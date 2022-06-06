import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {api} from "../http/api";
import {media} from "../components/main/media";
import Cards from "../components/Home/homeComponents/Cards";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";



const CardItem = () => {
    const navigate = useNavigate()
    const card = useSelector((state) => state.product.card)
    const {id} = useParams()
    const dispatch = useDispatch
    const [item, setItem] = useState({})
    const [cat, setCat] = useState({})
    useEffect(() => {
        api(`/books/${id}`)
            .then(({data}) => {
                setItem(data)
            })
    }, [])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    useEffect(() => {
        setTimeout(() =>{
            api(`/categories/${item.category}`)
                .then(({data}) => {
                    setCat(data)
                })
        },200)

    })

    console.log(item, "item")
    console.log(cat, "cat")
    console.log(card, "card")


    const addedCard = (items) => {
        dispatch({type: "ADD_CATALOG", payload: items})
    }

    const addedCardNavigate = (items) => {
        dispatch({type: "ADD_CATALOG", payload: items})
        navigate("/basket")
    }
    return (
        <div style={{padding :"70px 0"}}>
            <div className="container" style={{paddingBottom :"50px"}}>
                <p><span style={{color: "#757575"}}>Главная </span><span style={{color: "#757575"}}>/ {cat.title} </span><span
                    style={{color: "#000F35"}}>/ {item.title}</span></p>
                <div className="" style={{display: "flex", flexWrap: "wrap"}}>
                    <div className="">
                        <img src={item.image} alt="" style={{width :"350px", height: "500px"}}/>
                    </div>
                    <div className="" style={{marginLeft :'30px'}}>
                        <h1 style={{color: "#010049", fontSize: "36px",fontWeight:'normal'}}>{item.title}</h1>
                        <h1 style={{color: "#010049"}}>{item.price} сом</h1>
                        <p style={{fontSize: "24px", color: "#595959"}}>Жанр: {cat.title}</p>
                        <div className="">
                            <span style={{background: "#010049", color:"white", padding: "0 8px", cursor: "pointer", border: "2px solid #010049"}}>-</span>
                            <span style={{background: "#FFF", color:"#010049", padding: "0 8px", border: "2px solid #010049"}}>1</span>
                            <span style={{background: "#010049", color:"white", padding: "0 8px", cursor: "pointer", border: "2px solid #010049"}}>+</span>
                        </div>
                        <h4 style={{fontWeight: "600", color: "#595959", fontSize: "24px"}}>Описание</h4>
                        <p style={{fontWeight: "400", color: "#595959", fontSize: "16px", width: media(200, 600)}}>{item.description}</p>
                        <button style={{padding: "10px 30px", background: "none", border: "3px solid #010049", color: "#010049", borderRadius:"5px", fontSize: "16px", fontWeight: "600"}} onClick={() => addedCard(item)}>
                            Добавить в корзину
                        </button><br/>
                        <button style={{padding: "10px 30px", background: "none", border: "3px solid #010049", color: "#010049", borderRadius:"5px", fontSize: "16px", fontWeight: "600", marginTop: "10px"}} onClick={() => addedCardNavigate(item)}>
                            Купить сейчас
                        </button>
                    </div>

                </div>
            </div>
            <Cards/>

        </div>
    );
};

export default CardItem;
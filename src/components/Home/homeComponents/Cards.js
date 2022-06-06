import React, {useEffect, useState} from 'react';
import {api} from "../../../http/api";
import Card from "../../main/Card";

const Cards = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        api("/books")
            .then(({data}) => {
                setDatas(data)
        })
    }, [])

    const handleSelect = (e) => {
        api(`/books/?ordering=${e.target.value}`)
            .then(({data}) => {
                setDatas(data)
            })
    }
    return (
        <div className="container">
            <div style={{display: "flex", justifyContent: 'space-between', alignItems: "center" , marginTop: "20px", color:"010049"}}>
                <h1 style={{color: "#010049"}}>Возможно, Вам понравится</h1>
                <select style={{width: "120px", height: "30px", padding: "5px"}} onChange={(e) => handleSelect(e)}>
                    <option value="">Сортировка</option>
                    <option value="title">А - Я</option>
                    <option value="-title">Я - A</option>
                    <option value="price">Дорогие</option>
                    <option value="-price">Дешевые</option>
                    <option value="-pub_date">Hoвинки</option>
                </select>
            </div>

            <div style={{display: "flex",  flexWrap: "wrap"}}>
                {
                    datas.map(el => (
                        <>
                            <Card el={el}/>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;
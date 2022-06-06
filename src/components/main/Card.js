import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";


const card = {
    width: "200px",
    height: "400px",
    margin: "10px 18px"
}

const Card = ({el}) => {
    const [on, setOn] = useState(false)
    const cards = useSelector((state) => state.product.card)
    const dispatch = useDispatch()
    const addedCard = (item) => {
        dispatch({type: "ADD_CATALOG", payload: el})
    }
    let boll = false
    cards.map(item => {
        if (item.id === el.id){
           return boll = true
        }
    })
    return (
        <>
            <span style={card}>
                <Link to={`/cardItem/${el.id}`} style={{textDecoration: "none"}}>
                    <img src={el.image} alt="" style={{width: "100%", height: "60%"}}/>
                </Link>
                <span onClick={() => alert(boll)} style={{fontSize: "18px", fontWeight: "bold"}}>{el.title}</span>
                <div className="" style={{display: "flex", justifyContent :"space-between", marginTop: "10px", bottom: 0, padding: "0 5px"}}>
                    <span style={{fontWeight: "bold"}}>{el.price} сом</span>
                    <span onClick={() => boll ? "" : addedCard(el)} style={{cursor: "pointer"}}><FontAwesomeIcon icon={boll ? faCheck : faShoppingBasket}/></span>
                </div>
            </span>

        </>

    );
};

export default Card;
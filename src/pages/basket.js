import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'

const Basket = () => {
    const card = useSelector((state) => state.product.card)
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const dispatch = useDispatch()
    const addedCard = (item) => {
        dispatch({type: "ADD_CATALOG", payload: item})
    }

    const deleteItem = (item) => {
        dispatch({type: "REMOVE_CARD", payload: item})
    }

    const DECREASE = (id) => {
        dispatch({type: "DECREASE_QUANTITY", payload: id})
    }

    const [price ,  setPrice] = useState(0)


    useEffect(() => {
        setPrice(card.reduce((acc , el) => {
            return el.quantity * el.price + acc
        },0))

    })

    return (
        <div style={{padding: "70px 0", minHeight: "70vh"}}>
            <div className="container">
                <p><span style={{color: "#757575"}}>Главная </span><span
                    style={{color: "#757575"}}>/ Корзина </span><span
                    style={{color: "#000F35"}}>/ Оформление заказа</span></p>
                <div className="" style={{display:"flex", justifyContent :"space-between", flexWrap: "wrap-reverse"}}>
                    <div className="" style={{display: "flex", justifyContent: "space-around", flexWrap :"wrap",width: "800px"}}>
                        <div className="" style={{width: "300px"}}>
                            <h3 style={{color: "#010049"}}>Контакные данные</h3>
                            <input type="text" style={{
                                width: "288px",
                                padding: "10px 5px",
                                outline: "none",
                                border: "2px solid #010049",
                                borderRadius: "5px",
                                color: "#010049",
                                fontSize: "15px"
                            }} placeholder="Фио*"/>
                            <input type="text" style={{
                                width: "288px",
                                padding: "10px 5px",
                                outline: "none",
                                border: "2px solid #010049",
                                borderRadius: "5px",
                                color: "#010049",
                                fontSize: "15px",
                                marginTop :"20px"
                            }} placeholder="Телефон*"/>
                        </div>
                        <div className="" style={{width: "280px"}}>
                            <h3 style={{color: "#010049"}}>Доставка</h3>
                            <p style={{color: ""}}>Выберите удобный способ доставки <br/> для этого заказа.</p>
                            {/*<input type="radio" id="contactChoice1"*/}
                            {/*       name="contact" value="email" style={{color :"#010049"}}/>*/}
                            {/*    <label htmlFor="contactChoice1" style={{color: "#010049"}}>Самовывоз</label>*/}
                            <form>
                                <p>Please select your preferred contact method:</p>
                                <input type="radio" id="contactChoice1"
                                       name="contact" value="email"/>
                                <label htmlFor="contactChoice1" style={{color: "#010049", fontSize :"14px", marginTop :"20px"}}>Самовывоз</label><br/>

                                <input type="radio" id="contactChoice2"
                                       name="contact" value="phone"/>
                                <label htmlFor="contactChoice2" style={{color: "#010049", fontSize :"14px", marginTop :"20px"}}>Доставка курьером</label><br/>

                            </form>
                            <textarea style={{width: "280px", height :'100px', outline :"none", border: "2px solid #010049", borderRadius :"5px", marginTop :"50px", padding:"10px"}} placeholder="Область, город (район, село), улица, дом№, кв.№*"/>
                        </div>
                        <div className="" style={{width: "300px", marginTop: "-120px"}}>
                            <h3 style={{color: "#010049"}}>Оплата</h3>
                            <form style={{color: "#010049", fontSize: "20px", fontWeight: "bold"}}>
                                <input type="radio" id="contactChoice5"
                                       name="contact5" value="qwer"/>
                                <label htmlFor="contactChoice5" style={{color: "#010049", fontSize :"14px", marginTop :"20px"}}>Оплачу наличными при получении заказа</label><br/>

                                <input type="radio" id="contactChoice4"
                                       name="contact5" value="qwer"/>
                                <label htmlFor="contactChoice4" style={{color: "#010049", fontSize :"14px", marginTop :"20px"}}>Оплата с банковской картой через PayBox</label><br/>

                            </form>
                            <div className="">
                                <button style={{width: "100%", padding: "10px 0", marginTop: "20px", background: '#010049', border: "none", fontWeight: "bold", color: "white", borderRadius :"10px"}}>Оплатить</button>
                            </div>
                        </div>
                        <div style={{background: "#010049", width :"300px", height :"60px", padding: "20px 10px", color: "white"}}>
                            <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "15px"}}>
                                <span>Общая сумма:</span>
                                <span>{price} сом</span>
                            </div>
                            <div className="" style={{textAlign: "center"}}>
                                <span style={{textAlign: "center"}}>Ещё не оплачено</span>
                            </div>
                        </div>
                    </div>
                    <div className=""style={{ width: "400px", height :"600px", overflow: "scroll", padding : "10px"}}>
                        {
                            card.map((el, idx) => (
                                <>
                                    <div style={{width:'100%', height :"180px", margin :'5px 0', display :"flex"}}>
                                        <div className="" >
                                            <img src={el.image} alt="" style={{width :"130px", height : "100%", borderRadius :'10px', marginRight: "10px"}}/>
                                        </div>
                                        <div className="">
                                            <h5>{el.title}</h5>
                                            <h5>{el.price}</h5>
                                            <div className="">
                                                <span style={{background: "#010049", color:"white", padding: "0 8px", cursor: "pointer", border: "2px solid #010049"}} onClick={() => DECREASE(idx)}>-</span>
                                                <span style={{background: "#FFF", color:"#010049", padding: "0 8px", border: "2px solid #010049"}}>{el.quantity}</span>
                                                <span style={{background: "#010049", color:"white", padding: "0 8px", cursor: "pointer", border: "2px solid #010049"}} onClick={() => addedCard(el)}>+</span>
                                            </div>
                                            <button style={{marginTop:"10px", padding: "3px 5px", border: "2px solid #010049", color: "#010049", fontWeight: "bold"}} onClick={() => deleteItem(el)}>Удалить <FontAwesomeIcon icon={faRemove}/></button>
                                        </div>

                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
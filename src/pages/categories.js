import React, {useEffect, useState} from 'react';
import CategoriesItems from "../components/Home/homeComponents/Categories";
import {api} from "../http/api";
import {useParams} from "react-router-dom";
import Card from "../components/main/Card";

const categories = {
    padding: "65px"
}

const details = {
    marginTop: "20px",
    display:"flex",
    justifyContent: "space-between"
}

const Categories = () => {
    const {id} = useParams()
    const [categoris, setCategoris] = useState([])
    const [datas, setDatas] = useState([])
    const [select, setSelect] = useState('')

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        api(`/categories/${id}`)
            .then(({data}) => {
                setCategoris(data)
            })

    })
    useEffect(() => {
        api(`/books/`)
            .then(({data}) => {
                setDatas(data)
            })
    },[])


   const handleSelect = (e) => {
       api(`/books/?ordering=${e.target.value}`)
           .then(({data}) => {
               setDatas(data)
           })
    }
    const books = datas.filter(el => el.category === categoris.id)
    console.log(books, "books")
    return (
        <div style={categories}>
            <CategoriesItems/>
            <div className="container">
                <div style={details}>
                    <p><span style={{color: "#757575"}}>Главная </span><span
                        style={{color: "#000F35"}}>/ {categoris.title}</span></p>
                    <select style={{width: "120px", height: "30px", padding: "5px"}} onChange={(e) => handleSelect(e)}>
                        <option value="">Сортировка</option>
                        <option value="title">А - Я</option>
                        <option value="-title">Я - A</option>
                        <option value="-price">Дорогие</option>
                        <option value="price">Дешевые</option>
                        <option value="-pub_date">Hoвинки</option>
                    </select>
                </div>
                <div style={{display: "flex",  flexWrap: "wrap"}}>

                {
                    books.map(el => (
                            <Card el={el}/>
                    ))
                }
                </div>

            </div>
        </div>
    );
};

export default Categories;
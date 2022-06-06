import React, {useEffect, useState} from 'react';
import {api} from "../../../http/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const cat = {
    width :"200px",
    height: "50px",
    background: "#010049",
    borderRadius: "15px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}

const mapDiv = {
    display: "flex",
    justifyContent: "space-between",
}

const CategoriesItems = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        api("/categories")
            .then(({data}) => {
                setData(data)
            })
    }, [])
    console.log(data, "categories")
    return (
        <div className="container">
            <h1>Категории</h1>
            <div style={mapDiv}>
                {
                    data.length > 4 ? null :
                        data.map(el => (
                            <>
                                <Link to={`/categories/${el.id}`} style={{textDecoration: "none"}}>
                                    <div style={cat}>
                                        {el.title}
                                        <FontAwesomeIcon icon={faArrowRight} style={{marginLeft :"5px", marginTop: '3px'}}/>
                                    </div>
                                </Link>

                            </>

                        ))
                }

            </div>
        </div>
    );
};

export default CategoriesItems;
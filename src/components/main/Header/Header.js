import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


const header = {
    background: "#010049",
    position: "fixed",
    width: "100%",
    zIndex: "999"
}
const container = {
    width: '85%',
    margin: "0 auto"
}
const headerGeneral = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
}

const Header = () => {
    return (
        <div style={header}>
            <div style={container}>
                <div style={headerGeneral}>
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                        <h4>BOOKShop</h4>
                    </Link>

                    <div>
                        <Link to="/basket" style={{color: "white"}}>
                            <FontAwesomeIcon icon={faShoppingBasket}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
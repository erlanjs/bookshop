import React from 'react';

const Footer = () => {
    return (
        <div style={{background: "#010049", padding: '30px 0'}}>
            <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{fontSize: "20px", fontWeight: "bold", color: "white", textAlign: "center", width: '250px'}}>
                    <span>BOOKShop</span>
                </div>
                <div style={{fontSize: "16px", fontWeight: "normal", color: "white", textAlign: "center", width: '250px'}}>
                    <span>Способ оплаты</span><br/>
                    <span>Условия доставки</span><br/>
                    <span>Правила покупки</span><br/>
                </div>
                <div style={{fontSize: "16px", fontWeight: "normal", color: "white", textAlign: "center", width: '250px'}}>
                    <span>FAQ</span><br/>
                    <span>О нас</span><br/>
                </div>
                <div style={{fontSize: "16px", fontWeight: "normal", color: "white", textAlign: "center", width: '250px'}}>
                    <span>Связаться с нами:</span><br/>
                    <span>+996 222 533 735</span><br/>
                    <span>+996 222 533 735</span><br/>
                    <span>+996 222 533 735</span><br/>
                </div>
                <div style={{fontSize: "16px", fontWeight: "normal", color: "white", textAlign: "center"}}>
                    <span>Адрес</span><br/>
                    <p style={{width: "200px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in dolor viverra feugiat neque,
                        sed in. Mattis volutpat malesuada velit parturient aliquam, est. Mauris vitae velit laoreet
                        faucibus nec amet velit.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
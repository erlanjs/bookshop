import React, {useEffect} from 'react';
import Hero from "./homeComponents/Hero";
import CategoriesItems from "./homeComponents/Categories";
import Cards from "./homeComponents/Cards";

const home = {
    padding: "65px"
}

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div style={home}>
            <Hero/>
            <CategoriesItems/>
            <Cards/>
        </div>
    );
};

export default Home;
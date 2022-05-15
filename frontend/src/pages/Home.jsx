import React from "react";
import Header from "../components/base/header";
import Footer from "../components/base/footer";
import HomeBody from "../components/base/homeBody";

const Home = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <HomeBody/>
            <Footer/>
        </div>
    )
}
export default Home;
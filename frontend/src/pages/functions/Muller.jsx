import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import MullerBody from "../../components/functions/mullerbody";
const Muller = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <MullerBody/>
            <Footer/>
        </div>
    )
}

export default Muller;
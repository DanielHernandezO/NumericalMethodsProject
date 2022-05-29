import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import SecantBody from "../../components/functions/secant"
const Secant = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <SecantBody/>
            <Footer/>
        </div>
    )
}

export default Secant;
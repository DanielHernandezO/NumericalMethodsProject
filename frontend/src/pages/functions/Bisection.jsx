import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import BisectionMethod from "../../components/functions/bisectionBody/Index"
const Bisection = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <BisectionMethod/>
            <Footer/>
        </div>
    )
}

export default Bisection;
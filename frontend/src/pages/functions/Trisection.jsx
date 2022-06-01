import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import TrisectionMethod from "../../components/functions/trisectionBody/Index"
const Trisection = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <TrisectionMethod/>
            <Footer/>
        </div>
    )
}

export default Trisection;
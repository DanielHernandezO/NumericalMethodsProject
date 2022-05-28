import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import Lagrangebody from "../../components/functions/lagrangebody/index";

const Lagrange = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Lagrangebody/>
            <Footer/>
        </div>
    )
}

export default Lagrange;
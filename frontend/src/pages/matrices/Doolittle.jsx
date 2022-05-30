import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import DoolittleMethod from "../../components/matrices/doolittleBody/Index"
const Doolittle = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <DoolittleMethod/>
            <Footer/>
        </div>
    )
}

export default Doolittle;
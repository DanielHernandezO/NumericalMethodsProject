import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import CroutMethod from "../../components/matrices/croutBody/Index"
const Crout = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <CroutMethod/>
            <Footer/>
        </div>
    )
}

export default Crout;
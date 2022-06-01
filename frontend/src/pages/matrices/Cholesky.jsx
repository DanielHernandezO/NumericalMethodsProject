import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import CholeskyMethod from "../../components/matrices/choleskyBody/Index"
const Cholesky = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <CholeskyMethod/>
            <Footer/>
        </div>
    )
}

export default Cholesky;
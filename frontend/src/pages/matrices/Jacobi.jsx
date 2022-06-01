import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import JacobiBody from "../../components/matrices/jacobi";
const Jacobi = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <JacobiBody/>
            <Footer/>
        </div>
    )
}

export default Jacobi;
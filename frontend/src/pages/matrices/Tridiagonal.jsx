import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import TridiagonalBody from "../../components/matrices/tridiagonal";
const Tridiagonal = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <TridiagonalBody/>
            <Footer/>
        </div>
    )
}

export default Tridiagonal;
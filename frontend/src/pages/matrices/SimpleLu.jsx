import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import SimpleLuBody from "../../components/matrices/simpleLuBody";
const SimpleLu = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <SimpleLuBody/>
            <Footer/>
        </div>
    )
}
export default SimpleLu;
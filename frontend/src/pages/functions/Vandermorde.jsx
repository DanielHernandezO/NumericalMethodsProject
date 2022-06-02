import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import VandermordeBody from "../../components/functions/vandermorde"
const Vandermorde = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <VandermordeBody/>
            <Footer/>
        </div>
    )
}

export default Vandermorde;
import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import SimpsonBody from "../../components/integration/simpsonBody";

const Simpson = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <SimpsonBody/>
            <Footer/>
        </div>
    )
}

export default Simpson;
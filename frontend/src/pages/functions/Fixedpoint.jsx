import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import FixedpointBody from "../../components/functions/fixedpointbody";
const Fixedpoint = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <FixedpointBody/>
            <Footer/>
        </div>
    )
}

export default Fixedpoint;
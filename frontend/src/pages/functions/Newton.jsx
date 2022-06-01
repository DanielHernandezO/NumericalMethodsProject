import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import NewtonMethod from "../../components/functions/newtonBody/Index"
const  Newton= () => {
    return (
        <div className="container-fluid">
            <Header/>
            <NewtonMethod/>
            <Footer/>
        </div>
    )
}

export default Newton;
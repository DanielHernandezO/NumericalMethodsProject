import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import HeunMethod from "../../components/differential/heunBody/Index";
const Heun = () => {
    return (
        <div className="container-fluid">
            <Header />
            <HeunMethod/>
            <Footer />
        </div>
    )
}

export default Heun;
import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import Eulerbody from "../../components/functions/eulersbody/index";
const Euler = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Eulerbody/>
            <Footer />
        </div>
    )
}

export default Euler;
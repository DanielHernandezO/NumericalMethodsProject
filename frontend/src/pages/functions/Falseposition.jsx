import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import FalsepositionBody from "../../components/functions/falseposition"

const Falseposition = () => {
    return (
        <div className="container-fluid">
            <Header />
            <FalsepositionBody />
            <Footer />
        </div>
    )
}

export default Falseposition;
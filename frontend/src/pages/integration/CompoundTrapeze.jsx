import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import CompoundTrapezeBody from "../../components/integration/compoundTrapeze";

const CompoundTrapeze = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <CompoundTrapezeBody/>
            <Footer/>
        </div>
    )
}

export default CompoundTrapeze;
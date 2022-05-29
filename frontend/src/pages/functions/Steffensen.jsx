import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import SteffensenBody from "../../components/functions/steffensen";
const Aitken = () => {
    return (
        <div className="container-fluid">
            <Header />
            <SteffensenBody/>
            <Footer />
        </div>
    )
}

export default Aitken;
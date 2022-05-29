import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import AitkenBody from "../../components/functions/aitken";
const Aitken = () => {
    return (
        <div className="container-fluid">
            <Header />
            <AitkenBody/>
            <Footer />
        </div>
    )
}

export default Aitken;
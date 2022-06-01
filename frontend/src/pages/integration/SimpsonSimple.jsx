import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import SimpsonSimpleBody from "../../components/integration/simpsonSimpleBody";

const Simpson = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <SimpsonSimpleBody/>
            <Footer/>
        </div>
    )
}

export default Simpson;
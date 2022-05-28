import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import MultipleRootsBody from "../../components/functions/multipleRootsBody";
const MultipleRoots = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <MultipleRootsBody/>
            <Footer/>
        </div>
    )
}

export default MultipleRoots;
import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import IncrementalSearchBody from "../../components/functions/incrementalSearchBody/index";

const IncrementalSearch = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <IncrementalSearchBody/>
            <Footer/>
        </div>
    )
}

export default IncrementalSearch;
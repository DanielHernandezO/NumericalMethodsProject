import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import PivotLuBody from "../../components/matrices/pivotLuBody";
const PivotLu = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <PivotLuBody/>
            <Footer/>
        </div>
    )
}
export default PivotLu;
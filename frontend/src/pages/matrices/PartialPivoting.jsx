import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import PartialPivotingBody from "../../components/matrices/partialPivotingBody";
const PartialPivoting = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <PartialPivotingBody/>
            <Footer/>
        </div>
    )
}
export default PartialPivoting;
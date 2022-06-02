import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import TotalPivotingBody from "../../components/matrices/totalPivotingBody";
const PartialPivoting = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <TotalPivotingBody/>
            <Footer/>
        </div>
    )
}
export default PartialPivoting;
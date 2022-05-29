import React from "react";
import Table from "../../table";

const SplineQuadraticResult = ({ columns, rows, extraInfo }) => {
    const info = [];
    Object.entries(extraInfo).forEach(([key, value]) => {
        info.push({ key, value })
    })
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Result</h5>
                <div className="card mb-3 text-center">
                    {
                        info.map((element, index) => {
                            return <h6 key={index}><b>{element.key}: </b>{element.value}</h6>
                        })
                    }
                </div>
                <Table columns={columns} rows={rows} />
            </div>
        </div>
    )
}

export default SplineQuadraticResult;
import React from "react";

const SplineCubicDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b>X:</b> First row of the table
                    </li>
                    <li>
                        <b>Y:</b> Second row of the table
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        The input must be every element of the table followed by a coma like this : 1,5,2,3
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default SplineCubicDescription;
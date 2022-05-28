import React from "react";
import SplineQuadraticForm from "./SplineQuadraticForm";
import Logs from "../../logs";
import '../../../styles/functions.css';
const SplineQuadraticExecution = ({run, clear, dataForm, handleChangeDataForm, logs}) => {
    return (
    <div className="card mb-3 border-success">
        <div className="card-body">
            <h5 className="card-title">Enter data</h5>
            <div className="row">
                <div className="form-container">
                    <SplineQuadraticForm run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm}/>
                </div>
                <div className="col">
                    <Logs title='Logs' logs={logs}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SplineQuadraticExecution;
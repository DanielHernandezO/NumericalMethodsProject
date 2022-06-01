import React from "react";
import SplineCubicForm from "./SplineCubicForm";
import Logs from "../../logs";
import '../../../styles/functions.css';
const SplineCubicExecution = ({run, clear, dataForm, handleChangeDataForm, logs}) => {
    return (
    <div className="card mb-3 border-success">
        <div className="card-body">
            <h5 className="card-title">Enter data</h5>
            <div className="row">
                <div className="form-container">
                    <SplineCubicForm run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm}/>
                </div>
                <div className="col">
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModalXl" style={{float:"right"}}>Graph</button>
                    <Logs title='Logs' logs={logs}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SplineCubicExecution;
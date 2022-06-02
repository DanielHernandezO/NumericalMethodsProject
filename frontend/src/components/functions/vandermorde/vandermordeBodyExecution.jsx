import React from "react";
import Logs from "../../logs";
import VandermordeForm from "./vandermordeForm"
const VandermordeBodyExecution = ({ logs, run, dataForm, handleChangeDataForm, clear }) => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Enter data</h5>
                <div className="row">
                    <div className="form-container">
                        <VandermordeForm run={run} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} clear={clear} />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModalXl" style={{ float: "right" }}>Graph</button>
                        <Logs title='Logs' logs={logs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VandermordeBodyExecution;
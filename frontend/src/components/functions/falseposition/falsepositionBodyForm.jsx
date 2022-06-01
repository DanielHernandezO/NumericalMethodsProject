import React from "react";
const FalsepositionBodyForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>f(x)</label>
                        <input type="text" className="form-control form-control-sm" id="fx" placeholder="fx" value={dataForm.fx} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>x0</label>
                        <input type="number" className="form-control form-control-sm" id="x0" placeholder="x0" value={dataForm.x0} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>x1</label>
                        <input type="number" className="form-control form-control-sm" id="x1" placeholder="x1" value={dataForm.x1} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>niter</label>
                        <input type="number" className="form-control form-control-sm" id="niter" placeholder="niter" value={dataForm.niter} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>tol</label>
                        <input type="number" className="form-control form-control-sm" id="tol" placeholder="tol" value={dataForm.tol} onChange={handleChangeDataForm} />
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-success m-2" onClick={run}>Run</button>
                <button type="button" className="btn btn-outline-dark m-2" onClick={clear}>Clear</button>
            </div>
        </form>
    )
}

export default FalsepositionBodyForm;
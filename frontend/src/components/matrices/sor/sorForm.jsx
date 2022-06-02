import React from "react";
import Latex from "react-latex"
const SorForm = ({dataForm,run,clear,handleChangeDataForm}) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$A_{nxn}$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="A" placeholder="A" value={dataForm.A} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$b_{1xn}$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="b" placeholder="b" value={dataForm.b} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>x0</label>
                        <input type="text" className="form-control form-control-sm" id="x0" placeholder="x0" value={dataForm.x0} onChange={handleChangeDataForm} />
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
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>w</label>
                        <input type="number" className="form-control form-control-sm" id="w" placeholder="w" value={dataForm.w} onChange={handleChangeDataForm} />
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

export default SorForm;
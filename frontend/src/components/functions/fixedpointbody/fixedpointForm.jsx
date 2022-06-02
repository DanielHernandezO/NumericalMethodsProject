import React from "react";
import Latex from "react-latex"
const FixedpointForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$f(x)$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="f" placeholder="f" value={dataForm.f} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$g(x)$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="g" placeholder="g" value={dataForm.g} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$x0$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="x0" placeholder="x0" value={dataForm.x0} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$niter$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="niter" placeholder="niter" value={dataForm.niter} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$tol$'}</Latex></label>
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

export default FixedpointForm;
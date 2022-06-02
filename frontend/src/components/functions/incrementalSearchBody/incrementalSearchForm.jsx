import React from "react";
import Latex from "react-latex"
const IncrementalSearchForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$fx$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="fx" placeholder="fx" value={dataForm.fx} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$x_0$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="x0" placeholder="x0" value={dataForm.x0} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$delta$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="delta" placeholder="delta" value={dataForm.delta} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$niter$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="niter" placeholder="niter" value={dataForm.niter} onChange={handleChangeDataForm} />
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

export default IncrementalSearchForm;
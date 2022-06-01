import React from "react";
import Latex from "react-latex";
const BisectionForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
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
                        <label><Latex>{'$Left$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="left" placeholder="left" value={dataForm.left} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$Right$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="right" placeholder="right" value={dataForm.right} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$Tolerance$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="tolerance" placeholder="tolerance" value={dataForm.tolerance} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$Niter$'}</Latex></label>
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

export default BisectionForm;
import React from "react";
import Latex from "react-latex"
const SteffensenForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                    <label><Latex>{'$f(x)$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="fx" placeholder="fx" value={dataForm.fx} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$a$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="a" placeholder="a" value={dataForm.a} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$b$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="b" placeholder="b" value={dataForm.b} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$n$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="n" placeholder="n" value={dataForm.n} onChange={handleChangeDataForm} />
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

export default SteffensenForm;
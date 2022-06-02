import React from "react";
import Latex from "react-latex"
const HeunBodyForm = ({dataForm,run,clear,handleChangeDataForm}) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$f(x,y)$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="f" placeholder="f" value={dataForm.f} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$x$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="x" placeholder="x" value={dataForm.x} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$y$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="y" placeholder="y" value={dataForm.y} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$h$'}</Latex></label>
                        <input type="number" className="form-control form-control-sm" id="h" placeholder="h" value={dataForm.h} onChange={handleChangeDataForm} />
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

export default HeunBodyForm;
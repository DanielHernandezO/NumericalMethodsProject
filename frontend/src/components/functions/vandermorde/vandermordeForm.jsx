import React from "react";
import Latex from "react-latex"
const VandermordeForm = ({dataForm,run,clear,handleChangeDataForm}) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$x_{1xn}$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="xi" placeholder="xi" value={dataForm.xi} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label><Latex>{'$y_{1xn}$'}</Latex></label>
                        <input type="text" className="form-control form-control-sm" id="y" placeholder="y" value={dataForm.y} onChange={handleChangeDataForm} />
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

export default VandermordeForm;
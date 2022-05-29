import React from "react";
const SplineLinealForm = ({ run, clear, dataForm, handleChangeDataForm }) => {
    return (
        <form>
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>x</label>
                        <input type="text" className="form-control form-control-sm" id="x" placeholder="x" value={dataForm.x} onChange={handleChangeDataForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <label>y</label>
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

export default SplineLinealForm;
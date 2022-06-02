import React from "react";
import Matrix from "../../matrix";
import Vector from "../../vector";
const DoolittleBodyResult = ({matrixList,vectorResult}) => {
    return (
        <div className="card mb-3 border-success" id="result_doolittle">
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h6>Results vector</h6>
                        <Vector vector={vectorResult}/>
                    </div>
                </div>
                <div className="text-center">
                    {matrixList.map((item,index)=>{
                        return(<div className="m-3" key={index}>
                            <h6>{item.title}</h6>
                            <Matrix matrix={item.matrix}/>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default DoolittleBodyResult;
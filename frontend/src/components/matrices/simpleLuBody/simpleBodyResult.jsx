import React from "react";
import Matrix from "../../matrix";
import Vector from "../../vector";
const simpleBodyResult = ({matrixList,vectorResult}) => {
    /*
        matrixList:
        [{
            title: 'Stage 1',
            matrix:[[4,-1,0,3],[1,15.5,3,8],[0,-1.3,-4,1.1],[14,5,-2,30]]
        }]
    
    */
    return (
        <div className="card mb-3 border-success" id="result_simple_lu">
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

export default simpleBodyResult;
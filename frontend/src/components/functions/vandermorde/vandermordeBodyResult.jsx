import React from "react";
import Table from "../../table";
import Matrix from "../../matrix";
import Vector from "../../vector";
import Latex from "react-latex"
const VandermordeBodyResult = ({matrixList,vectorResult,extraInfo}) => {
    const info = [];
    Object.entries(extraInfo).forEach(([key, value]) => {
        info.push({ key, value })
    })
     return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h6>Coeficents</h6>
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
                <div>
                    {
                        info.length > 0 ? <div className="card mb-3 text-center">
                            {
                                info.map((element, index) => {
                                    return <h6 key={index}><b>{element.key}: </b>{element.value}</h6>
                                })
                            }
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default VandermordeBodyResult;
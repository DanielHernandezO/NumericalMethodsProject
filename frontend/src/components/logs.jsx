import React from "react";
const Logs = ({ title, logs }) => {
    /**
        {
            type: 'Success' | 'Error',
            text: valor que quiero mostrar
        } 


     */
    return (
        <>
            <h5>{title}</h5>
            {
                logs?.map((log, index) => {
                    const result = log.type === 'Success' ?
                        <div className="alert alert-success" role="alert" key={index}>
                            {log.text}
                        </div> :
                        <div className="alert alert-danger" role="alert" key={index}>
                            {log.text}
                        </div>
                    return result;
                })
            }
        </>
    )
}

export default Logs;
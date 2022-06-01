import React from "react";
import Latex from "react-latex"
const SteffensenBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x)$'}</Latex></b> Function to be integrated. Ej: 'x^2 + x + 2'
                    </li>
                    <li>
                        <b><Latex>{'$a$'}</Latex></b> Lower limit of the integration interval. Ej: 1
                    </li>
                    <li>
                        <b><Latex>{'$b$'}</Latex></b> Upper limit of the integration interval. Ej: 5
                    </li>
                    <li>
                        <b><Latex>{'$n$'}</Latex></b> Number of divisions of the function. Ej: 12
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <Latex>
                            {'The function must be continuous in the interval  $[a,b]$'}
                        </Latex>
                    </li>
                    <li>
                        <Latex>
                            {'The function must be integrable in the interval  $[a,b]$'}
                        </Latex>
                    </li>
                    <li>
                        <Latex>
                            {'$a < b$'}
                        </Latex>
                    </li>
                    <li>
                        <Latex>
                            {'$n$ must be a factor of 3'}
                        </Latex>
                    </li>
                </ol>
                <div className="card-footer">
                    <small className="text-muted"><b>Note: </b>If the input data does not comply with the rules, the success of the method is not assured.</small>
                </div>
            </div>
        </div>
    )
}

export default SteffensenBodyDescription;
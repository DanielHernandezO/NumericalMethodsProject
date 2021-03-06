import React from "react";
import Latex from "react-latex"
const AitkenBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x)$'}</Latex>:</b> succession or function to be accelerated. Ej: '(x+(2/x))/2'
                    </li>
                    <li>
                        <b><Latex>{'$x_0$'}</Latex>:</b> First value to be entered to the sequence or function. Ej: 1
                    </li>
                    <li>
                        <b><Latex>{'$niter$'}</Latex>:</b> Maximum number of iterations
                    </li>
                    <li>
                        <b><Latex>{'$tol$'}</Latex>:</b> Maximum permissible error
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <Latex>
                            {'$\\lbrace x_{n} \\rbrace_{n\\in\\N}$ will converge linearly to $\\ell$ if there exists a number $\\mu \\in (0,1)$ such that'}
                        </Latex><br></br><br></br>
                        <Latex>
                            {'$ \\lim\\limits_{n\\rarr\\infin} \\dfrac{|x_{n+1}-\\ell|}{|x_{n}-\\ell|} = \\mu$'}
                        </Latex><br></br><br></br>
                        <Latex>
                            {"Aitken's method will accelerate the succession $x_{n}$ si y solo si $ \\lim\\limits_{n\\rarr\\infin} \\dfrac{|\\hat {x_{n}}-\\ell|}{|x_{n}-\\ell|} = 0$ where $\\lbrace \\hat{x_{n}} \\rbrace_{n\\in\\N}$ is the new succession generated by aitken's method."}
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

export default AitkenBodyDescription;
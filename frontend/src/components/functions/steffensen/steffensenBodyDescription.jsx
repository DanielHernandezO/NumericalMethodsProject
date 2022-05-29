import React from "react";
import Latex from "react-latex"
const SteffensenBodyDescription = () => {
    return (
        <div className="card mb-3 border-success">
            <div className="card-body">
                <h5 className="card-title">Input</h5>
                <ul>
                    <li>
                        <b><Latex>{'$f(x)$'}</Latex></b> succession or function to be accelerated. Ej: '(x+(2/x))/2'
                    </li>
                    <li>
                        <b><Latex>{'$x_0$'}</Latex></b> First value to be entered to the sequence or function. Ej: 1
                    </li>
                    <li>
                        <b>niter: </b> Maximum number of iterations
                    </li>
                    <li>
                        <b>tol: </b> Maximum permissible error
                    </li>
                </ul>
                <h5 className="card-title">Rules</h5>
                <ol>
                    <li>
                        <Latex>
                            {"Suppose that $x = f(x)$ has the solution $\\rho$ with ${f'(\\rho)} {=}\\mathllap{/\}1 $. If there exist a $\\delta > 0$ such that $f\\in C^{3}[\\rho-\\delta,\\rho+\\delta]$, then Steffensen's method gives quadratic convergence for any $\\rho_{0}\\in[\\rho-\\delta,\\rho+\\delta]$"}
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
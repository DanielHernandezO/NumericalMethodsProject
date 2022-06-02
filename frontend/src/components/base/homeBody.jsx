import React from "react";

const HomeBody = () => {
    return (
        <div className="container">
            <h1 className="text-center">Welcome to Numerical Methods Platform</h1>
            <div>
                <h3 className="text-center">User manual</h3>
                <iframe width="100%" height="700px"
                    src="https://www.youtube.com/embed/ZQc3RXJcjK0?autoplay=1&mute=1">
                </iframe>
            </div>
            <p>Numerical Methods Platform is a Website where you can try different numerical methods with its own rules, posibilities and limitations.</p>
            <p>Check out our guide on how to use the platform for a better user experience here: Yt link</p>
            <div className="card mb-3 border-success">
                    <div className="card-body">
                        <h5 className="card-title">Functions</h5>
                        <p className="card-text">The follow numeric methods are methods based on a function with the objective to find one or more roots.</p>
                        <div>
                            <h6>List of methods</h6>
                            <ul>
                                <li><a href="/functions/incremental_search">Incremental search</a></li>
                                <li><a href="/functions/falseposition">False position</a></li>
                                <li><a href="/functions/secant">Secant</a></li>
                                <li><a href="/functions/bisection">bisection</a></li>
                                <li><a href="/functions/fixedpoint">Fixed point</a></li>
                                <li><a href="/functions/Newton">Newton</a></li>
                                <li><a href="/functions/multiple_roots">Multiple roots</a></li>
                                <li><a href="/functions/steffensen">Steffensen</a></li>
                                <li><a href="/functions/aitken">Aitken</a></li>
                                <li><a href="/functions/muller">Müller</a></li>
                                <li><a href="/functions/trisection">Trisection</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="card mb-3 border-success">
                    <div className="card-body">
                        <h5 className="card-title">Matrices</h5>
                        <p className="card-text">The following numeric methods are based on a matrix with the objetive of returning a vector and steps of the process of each method.</p>
                        <div>
                            <h6>List of methods</h6>
                            <ul>
                                <li><a href="/matrices/gaussian_elimination">Gaussian elimination</a></li>
                                <li><a href="/matrices/partial_pivoting">Partial pivoting</a></li>
                                <li><a href="/matrices/total_pivoting">Total pivoting</a></li>
                                <li><a href="#">Tridiagonal Gaussian elimination</a></li>
                                <li><a href="/matrices/simplelu">Simple LU</a></li>
                                <li><a href="/matrices/privotlu">Pivot LU</a></li>
                                <li><a href="/functions/crout">Crout</a></li>
                                <li><a href="/functions/doolittle">Doolittle</a></li>
                                <li><a href="/functions/cholesky">Cholesky</a></li>
                                <li><a href="#">Jacobi</a></li>
                                <li><a href="#">Gauss-Seidel</a></li>
                                <li><a href="#">SOR</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="card mb-3 border-success">
                    <div className="card-body">
                        <h5 className="card-title">Interpolation</h5>
                        <p className="card-text">The following numeric methods are based on a table with an X and a y, with the objective of returning an Interpolating Polynomial and a Polynom</p>
                        <div>
                            <h6>List of methods</h6>
                            <ul>
                                <li><a href="#">Vandermonde</a></li>
                                <li><a href="/functions/difdivididas">Newton( Divided differences)</a></li>
                                <li><a href="/functions/lagrange">Lagrange</a></li>
                                <li><a href="/functions/linealspline">Line plotters</a></li>
                                <li><a href="/functions/quadraticspline">Quadratic plotters</a></li>
                                <li><a href="/functions/cubicspline">Cubic plotters</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="card mb-3 border-success">
                    <div className="card-body">
                        <h5 className="card-title">Numerical integration</h5>
                        <p className="card-text">The following numeric methods are based on a function, a lower limit, an upper limit and a number of divisions of the functions with the objective of returning an approximation of the integral function and the iteratiosn to achieve it.</p>
                        <div>
                            <h6>List of methods</h6>
                            <ul>
                                <li><a href="/integration/compound_trapeze">Compound trapeze</a></li>
                                <li><a href="/integration/simpson">Simpson 1/3 compound</a></li>
                                <li><a href="/integration/simpson_simple">Simpson 3/8 simple</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="card mb-3 border-success">
                    <div className="card-body">
                        <h5 className="card-title">Differential equations</h5>
                        <p className="card-text">The following numeric methods are based on a function, an inferior limit, superior limit, and a number that determines how big each evaluation will be apart from each other with the objective of returning an approximation of the graphic function.</p>
                        <div>
                            <h6>List of methods</h6>
                            <ul>
                                <li><a href="#">Euler</a></li>
                                <li><a href="/functions/heun">Heun</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomeBody;
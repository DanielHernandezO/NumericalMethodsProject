import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Numerical Methods</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Functions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/functions/incremental_search">Incremental Searches</a></li>
                                <li><a className="dropdown-item" href="/functions/falseposition">False position</a></li>
                                <li><a className="dropdown-item" href="/functions/secant">Secant</a></li>
                                <li><a className="dropdown-item" href="/functions/bisection">bisection</a></li>
                                <li><a className="dropdown-item" href="/functions/fixedpoint">Fixed point</a></li>
                                <li><a className="dropdown-item" href="/functions/Newton">Newton</a></li>
                                <li><a className="dropdown-item" href="/functions/multiple_roots">Multiple roots</a></li>
                                <li><a className="dropdown-item" href="/functions/steffensen">Steffensen</a></li>
                                <li><a className="dropdown-item" href="/functions/aitken">Aitken</a></li>
                                <li><a className="dropdown-item" href="/functions/muller">Müller</a></li>
                                <li><a className="dropdown-item" href="/functions/trisection">Trisection</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Matrices
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/matrices/gaussian_elimination">Gaussian elimination</a></li>
                                <li><a className="dropdown-item" href="/matrices/partial_pivoting">Partial pivoting</a></li>
                                <li><a className="dropdown-item" href="/matrices/total_pivoting">Total pivoting</a></li>
                                <li><a className="dropdown-item" href="#">Tridiagonal Gaussian elimination</a></li>
                                <li><a className="dropdown-item" href="/matrices/simplelu">Simple LU</a></li>
                                <li><a className="dropdown-item" href="/matrices/privotlu">Pivot LU</a></li>
                                <li><a className="dropdown-item" href="/functions/crout">Crout</a></li>
                                <li><a className="dropdown-item" href="/functions/doolittle">Doolittle</a></li>
                                <li><a className="dropdown-item" href="/functions/cholesky">Cholesky</a></li>
                                <li><a className="dropdown-item" href="#">Jacobi</a></li>
                                <li><a className="dropdown-item" href="#">Gauss-Seidel</a></li>
                                <li><a className="dropdown-item" href="#">SOR</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Interpolation
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Vandermonde</a></li>
                                <li><a className="dropdown-item" href="/functions/difdivididas">Newton( Divided differences)</a></li>
                                <li><a className="dropdown-item" href="/functions/lagrange">Lagrange</a></li>
                                <li><a className="dropdown-item" href="/functions/linealspline">Line plotters</a></li>
                                <li><a className="dropdown-item" href="/functions/quadraticspline">Quadratic plotters</a></li>
                                <li><a className="dropdown-item" href="/functions/cubicspline">Cubic plotters</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Numerical integration
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/integration/compound_trapeze">Compound trapeze</a></li>
                                <li><a className="dropdown-item" href="/integration/simpson">Simpson 1/3 compound</a></li>
                                <li><a className="dropdown-item" href="/integration/simpson_simple">Simpson 3/8 simple</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Differential equations
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/functions/euler">Euler</a></li>
                                <li><a className="dropdown-item" href="/functions/heun">Heun</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
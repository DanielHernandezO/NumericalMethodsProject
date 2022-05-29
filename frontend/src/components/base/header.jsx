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
                                <li><a className="dropdown-item" href="#">bisection</a></li>
                                <li><a className="dropdown-item" href="#">False rule</a></li>
                                <li><a className="dropdown-item" href="#">Fixed point</a></li>
                                <li><a className="dropdown-item" href="#">Newton</a></li>
                                <li><a className="dropdown-item" href="#">Secant</a></li>
                                <li><a className="dropdown-item" href="/functions/multiple_roots">Multiple roots</a></li>
                                <li><a className="dropdown-item" href="/functions/steffensen">Steffensen</a></li>
                                <li><a className="dropdown-item" href="/functions/aitken">Aitken</a></li>
                                <li><a className="dropdown-item" href="#">Müller</a></li>
                                <li><a className="dropdown-item" href="#">Trisection</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Matrices
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Gaussian elimination</a></li>
                                <li><a className="dropdown-item" href="#">Partial pivoting</a></li>
                                <li><a className="dropdown-item" href="#">Total pivoting</a></li>
                                <li><a className="dropdown-item" href="#">Tridiagonal Gaussian elimination</a></li>
                                <li><a className="dropdown-item" href="#">Simple LU</a></li>
                                <li><a className="dropdown-item" href="#">Pivot LU</a></li>
                                <li><a className="dropdown-item" href="#">Crout</a></li>
                                <li><a className="dropdown-item" href="#">Doolittle</a></li>
                                <li><a className="dropdown-item" href="#">Cholesky</a></li>
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
                                <li><a className="dropdown-item" href="#">Newton( Divided differences)</a></li>
                                <li><a className="dropdown-item" href="#">Lagrange</a></li>
                                <li><a className="dropdown-item" href="#">Line plotters</a></li>
                                <li><a className="dropdown-item" href="#">Quadratic plotters</a></li>
                                <li><a className="dropdown-item" href="#">Cubic plotters</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Numerical integration
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Compound trapeze</a></li>
                                <li><a className="dropdown-item" href="#">Simpson 1/3 compound</a></li>
                                <li><a className="dropdown-item" href="#">Simpson 3/8 simple</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Differential equations
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Euler</a></li>
                                <li><a className="dropdown-item" href="#">Heun</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
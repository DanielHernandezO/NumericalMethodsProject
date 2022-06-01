import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Home from "../pages/Home"
import IncrementalSearch from "../pages/functions/IncrementalSearch"
import LinealSpline from "../pages/functions/SplineLineal"
import QuadraticSpline from "../pages/functions/SplineQuadratic"
import CubicSpline from "../pages/functions/SplineCubic"
import MultipleRoots from "../pages/functions/MultipleRoots"
import Bisection from "../pages/functions/Bisection"
import Aitken from "../pages/functions/Aitken"
import Lagrange from "../pages/functions/Lagrange"
import Difdivididas from "../pages/functions/Difdivididas"
import Steffensen from "../pages/functions/Steffensen"
import Falseposition from "../pages/functions/Falseposition"
import Secant from "../pages/functions/Secant"
import SimpleLu from "../pages/matrices/SimpleLu"
import Newton from "../pages/functions/Newton"
import Trisection from "../pages/functions/Trisection"
import Fixedpoint from "../pages/functions/Fixedpoint"
import Euler from "../pages/functions/Euler"
import Muller from "../pages/functions/Muller"
import Crout from "../pages/matrices/Crout"
import PivotLu from "../pages/matrices/PivotLu"
import Doolittle from "../pages/matrices/Doolittle"
import GaussianElimination from "../pages/matrices/GaussianElimination"
import PartialPivoting from "../pages/matrices/PartialPivoting"
import Heun from "../pages/differential/Heun"
import Cholesky from "../pages/matrices/Cholesky"
import TotalPivoting from "../pages/matrices/TotalPivoting"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/functions/incremental_search" element={<IncrementalSearch/>}/> 
                    <Route path="/functions/linealspline" element={<LinealSpline/>}/> 
                    <Route path="/functions/quadraticspline" element={<QuadraticSpline/>}/> 
                    <Route path="/functions/cubicspline" element={<CubicSpline/>}/> 
                    <Route path="/functions/multiple_roots" element={<MultipleRoots/>}/>
                    <Route path="/functions/bisection" element={<Bisection/>}/>
                    <Route path="/functions/aitken" element={<Aitken/>}/>
                    <Route path="/functions/lagrange" element={<Lagrange/>}/>
                    <Route path="/functions/steffensen" element={<Steffensen/>}/>
                    <Route path="/functions/falseposition" element={<Falseposition/>}/>
                    <Route path="/functions/secant" element={<Secant/>}/>
                    <Route path="/matrices/simplelu" element={<SimpleLu/>}/>
                    <Route path="/functions/difdivididas" element={<Difdivididas/>}/>
                    <Route path="/functions/newton" element={<Newton/>}/>
                    <Route path="/functions/trisection" element={<Trisection/>}/>
                    <Route path="/functions/muller" element={<Muller/>}/>
                    <Route path="/functions/fixedpoint" element={<Fixedpoint/>}/>
                    <Route path="/functions/euler" element={<Euler/>}/>
                    <Route path="/functions/crout" element={<Crout/>}/>
                    <Route path="/matrices/privotlu" element={<PivotLu/>}/>
                    <Route path="/functions/doolittle" element={<Doolittle/>}/>
                    <Route path="/matrices/gaussian_elimination" element={<GaussianElimination/>} />
                    <Route path="/matrices/partial_pivoting" element={<PartialPivoting/>}></Route>
                    <Route path="/functions/cholesky" element={<Cholesky/>}/>
                    <Route path="/matrices/total_pivoting" element={<TotalPivoting/>}/>
                    <Route path="/functions/heun" element={<Heun/>}/>
                    {/* Others url */}  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
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
import Aitken from "../pages/functions/Aitken"
import Lagrange from "../pages/functions/Lagrange"
import Steffensen from "../pages/functions/Steffensen"

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
                    <Route path="/functions/aitken" element={<Aitken/>}/>
                    <Route path="/functions/lagrange" element={<Lagrange/>}/>
                    <Route path="/functions/steffensen" element={<Steffensen/>}/>
                    {/* Others url */}  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
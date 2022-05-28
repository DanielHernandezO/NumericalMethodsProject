import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Home from "../pages/Home"
import IncrementalSearch from "../pages/functions/IncrementalSearch"
import LinealSpline from "../pages/functions/SplineLineal"
import QuadraticSpline from "../pages/functions/SplineQuadratic"
import MultipleRoots from "../pages/functions/MultipleRoots"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/functions/incremental_search" element={<IncrementalSearch/>}/> 
                    <Route path="/functions/linealspline" element={<LinealSpline/>}/> 
                    <Route path="/functions/quadraticspline" element={<QuadraticSpline/>}/> 
                    <Route path="/functions/multiple_roots" element={<MultipleRoots/>}/>
                    {/* Others url */}  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
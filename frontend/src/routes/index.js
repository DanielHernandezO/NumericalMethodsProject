import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Home from "../pages/Home"
import IncrementalSearch from "../pages/functions/IncrementalSearch"
import LinealSpline from "../pages/functions/SplineLineal"
import MultipleRoots from "../pages/functions/MultipleRoots"
import Bisection from "../pages/functions/Bisection"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/functions/incremental_search" element={<IncrementalSearch/>}/> 
                    <Route path="/functions/linealspline" element={<LinealSpline/>}/> 
                    <Route path="/functions/multiple_roots" element={<MultipleRoots/>}/>
                    <Route path="/functions/bisection" element={<Bisection/>}/>
                    {/* Others url */}  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
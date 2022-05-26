import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import Home from "../pages/Home"
import IncrementalSearch from "../pages/functions/IncrementalSearch"
import MultipleRoots from "../pages/functions/MultipleRoots"
import Graph from "../pages/Graph"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/functions/incremental_search" element={<IncrementalSearch/>}/>
                    <Route path="/functions/multiple_roots" element={<MultipleRoots/>}/>
                    <Route path="/graph" element={<Graph/>}/>
                    {/* Others url */}  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
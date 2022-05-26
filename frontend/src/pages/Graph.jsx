import React, { useState } from 'react'
import CanvaGraph from '../components/graph'
import Header from '../components/base/header'
import Footer from '../components/base/footer'

const Graph = () => {

    const [expression,setExpression] = useState('x');
    const [lowLim,setLowLim] = useState(-10);
    const [uppLim,setUppLim] = useState(10);
    const [step,setStep] = useState(0.5);

    const run = () => {

    }

    const clear = () => {

    }


  return (
    <div className='conatiner-fluid'>
      <Header />
      <h1 className='text-center'>Graficador</h1>
      <div className='card mb-3 border-success'>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <form>
                <div>
                  <div className='row mb-3'>
                    <div className='col-sm-10'>
                      <label>Function</label>
                      <input
                        type='text'
                        className='form-control form-control-sm'
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-outline-success m-2'
                    onClick={run}
                  >
                    Run
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-dark m-2'
                    onClick={clear}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
            <div className='form-container'>
              <CanvaGraph
                expression={expression}
                lowLim={lowLim}
                uppLim={uppLim}
                step={step}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Graph

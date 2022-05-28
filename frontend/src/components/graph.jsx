import React from 'react'
const Graph = () => {
  return (
    <div className="modal fade" id="exampleModalXl" tabIndex="-1" aria-labelledby="exampleModalXlLabel" style={{display:'none'}} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title h4" id="exampleModalXlLabel">Graph</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <iframe src="https://www.geogebra.org/graphing?lang=es"
              width={'100%'}
              height={'800px'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph
import React, { useEffect } from 'react'
const math = require('mathjs')
var Plotly = require('plotly.js-dist')
const Graph = ({expression,low_lim,upp_lim,step}) => {
  function draw () {
    try {
      // compile the expression once
      const expr = math.compile(expression)

      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(low_lim, upp_lim, step).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({ x: x })
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(()=>{
    draw()
  },[])

  //draw()
  return (
      <div id='plot'></div>
  )
}

export default Graph

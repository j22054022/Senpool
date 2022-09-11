import React, { useState } from 'react'
import CanvasJSReact from '../lib/canvasjs.react.js'
import './CryptoCard.scss'

function CryptoCard() {
    let CanvasJS = CanvasJSReact.CanvasJS
    let CanvasJSChart = CanvasJSReact.CanvasJSChart

    let data = []
    let y = 100
    let dataSeries = { type: 'line' }
    let dataPoints = []
    let startTime = new Date();

    for (let i = 0; i < 50000; i++) {
        y += Math.round(Math.random() * 10 - 5)
        dataPoints.push({
            x: i,
            y: y
        })
    }

    dataSeries.dataPoints = dataPoints
    data.push(dataSeries)

    const spanStyle = {
        position:'absolute', 
        top: '10px',
        fontSize: '20px', 
        fontWeight: 'bold', 
        backgroundColor: '#d85757',
        padding: '0px 4px',
        color: '#ffffff'
    }

    const options = {
        zoomEnabled: true,
        animationEnabled: true,
        title: {
            text: "Try Zooming - Panning"
        },
        data: data  // random data
    }

    return (
        <div>
            <CanvasJSChart options = {options} />
            <span id="timeToRender" style={spanStyle}></span>
        </div>
    )
}

export default CryptoCard
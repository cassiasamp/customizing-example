import React, { Component } from "react";
import Plot from 'react-plotly.js'

export default class PiePlot extends Component {
    render() {
        return (
            <div>
                <Plot 
                    data={[{
                        values:[33, 33, 34],
                        labels: ['React', 'Vue', 'Angular'],
                        type: 'pie'
                    }]}
                    layout={{width:500, height:500, title:'Simple pie chart'}}
                />
            </div>
        )
    }
}
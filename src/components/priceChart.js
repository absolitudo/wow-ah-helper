import React from 'react'

import * as d3 from 'd3'

class PriceChart extends React.Component {
    componentDidMount() {
        const width = 290
        const height = 50
        const margin = 10
        const data = countBuyouts(this.props.data)

        let svg = d3.select(this.refs.svg)
            .attr('width', width)
            .attr('height', height)

        /* Domains */
        let xDomain = d3.extent(data, (d) => d.price)
        let yDomain = d3.extent(data, (d) => d.amount)


        /* X scale */
        let xScale = d3.scaleLinear()
            .domain(xDomain[0], xDomain[1])
            .range([margin, width - margin])

            /* Y scale */
        let yScale = d3.scaleLinear()
            .domain([0, yDomain[1]])
            .range([height - margin, margin])


        /* X axis */
        let xAxis = d3.axisBottom()
            .scale(xScale)

        /* Y axis */
        let yAxis = d3.axisLeft()
            .scale(yScale)
            .tickSize(width - margin * 2)
            .ticks(4)

        /* Color scale */
        let colorScale = d3.scaleLinear()
            .domain(xDomain)
            .range(["#032d6b", "#59103e"])


        /* Groups */
        svg.append("g")
            .attr("transform", "translate(0," + (height - margin) +")")
            .call(xAxis)

        svg.append("g")
            .attr("transform", "translate(" + width - margin  +", 0)")
            .call(yAxis)

        svg.append("g")
            .selectAll("rect")
            .data(data)
            .enter()
                .append("rect")
                    .attr("fill", (d) => colorScale(d.price))
                    .attr("width", (width - margin * 2) / data.length)
                    .attr("height", (d) => (height - margin * 2)  - (yScale(d.amount)))
                    .attr("x", (d, i) => margin + i * (width / data.length))
                    .attr("y", (d) => margin + yScale(d.amount))
    }

    render() {
        return (
            <svg ref='svg'>
            </svg>
        )
    }
}

export const countBuyouts = (data) => {
    
    return data
}

export default PriceChart
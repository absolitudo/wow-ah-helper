import React from 'react'

import * as d3 from 'd3'

class PriceChart extends React.Component {
    componentDidMount() {
        const createData = (data) => {

            let newData = []

            let num = data[0]
            let counter = 1
            newData.push({
                price: num,
                amount: counter
            })
            for (let i = 0; i < data.length; i += 1) {

                if(num !== data[i]) {
                    newData.push({
                        price: num,
                        amount: counter
                    })

                    num = data[i]
                    counter = 1                    
                } else {
                    counter += 1
                }
            }

            return newData
        }

        var width = 290
        var height = 50
        let svg = d3.select(this.refs.mysvg)
            .attr('width', width)
            .attr('height', height)

        let data = createData(this.props.data)

        console.log(data)

        /* Domains */
        let xDomain = d3.extent(data, (d) => d.price)
        let yDomain = d3.extent(data, (d) => d.amount)

        /* X scale */
        let xScale = d3.scaleLinear()
            .domain(xDomain[0], xDomain[1])
            .range([0, width])

            /* Y scale */
        let yScale = d3.scaleLinear()
            .domain([0, yDomain[1]]).nice()
            .range([height, 0])


        /* X axis */
        let xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(8)

        /* Y axis */
        let yAxis = d3.axisRight()
            .scale(yScale)
            .ticks(8)
            .tickSize(width)

        /* Color scale */
        let colorScale = d3.scaleLinear()
            .domain(xDomain)
            .range(["#032d6b", "#59103e"])


        /* Groups */
        svg.append("g")
            .attr("transform", "translate(0," + height +")")
            .call(xAxis)

        svg.append("g")
            .call(yAxis)
        svg.append("g")
            .selectAll("rect")
            .data(data)
            .enter()
                .append("rect")
                    .attr("fill", (d) => colorScale(d.price))
                    .attr("width", width / data.length)
                    .attr("height", (d) => height - (yScale(d.amount)))
                    .attr("x", (d, i ) => i * (width / data.length))
                    .attr("y", (d) => yScale(d.amount))
    }

    render() {
        return (
            <svg ref='mysvg'>
            </svg>
        )
    }
}

export default PriceChart
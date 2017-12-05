import React from 'react'
import * as d3 from 'd3'
import { spawn } from 'child_process';

class PriceChart extends React.Component {
    componentDidMount() {
        const width = 290
        const height = 50
        const margin = 5
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
            .range(['#dbca30', '#db6969'])

        let tooltip = d3.select(this.refs.svg.parentNode).append("div")
            .attr("class", "chart-tooltip")
            .style("display", "none")

        /* Groups */
        svg.append('g')
            .attr('transform', 'translate(0,' + (height - margin) +')')
            .call(xAxis)

        svg.append('g')
            .call(yAxis)
            .attr('transform', 'translate(' + (width - margin)  +', 0)')
            .attr('class', 'axis-y')
            .selectAll('line')
                .attr('opacity', 0.8)
                .attr('stroke-dasharray', '2,30')

        svg.append('g')
            .selectAll('rect')
            .data(data)
            .enter()
                .append('rect')
                    .attr('fill', (d) => colorScale(d.price))
                    .attr('width', (width - margin * 2) / data.length)
                    .attr('height', (d) => height - margin - yScale(d.amount))
                    .attr('x', (d, i) => margin + i * (width - margin * 2) / data.length)
                    .attr('y', (d) => yScale(d.amount))
                    .on("mouseover", (d, i) => {
                        d3.select(d3.event.currentTarget).attr("fill", "#e0a3af")
                        tooltip
                            .style("display", null)
                            .style("left", (margin + i * (width - margin * 2) / data.length) + "px")
                            .html('Price: ' + getPrice(d.price) + '</br>Amount: ' + d.amount)

                    })
                    .on("mouseout", (d) => {
                        tooltip.style("display", "none")
                        d3.select(d3.event.currentTarget).attr("fill", (d) => colorScale(d.price))

        
            
})
    }

    render() {
        

        return (
            <div className='price-chart-container'>
                <svg ref='svg' className='price-chart'>
                </svg>
                <p dangerouslySetInnerHTML={{'__html': 'Price range: ' + getPrice(this.props.data[0]) + ' => ' + getPrice(this.props.data[this.props.data.length - 1])}}></p>
                <p>Amount: {this.props.data.length}</p>
            </div>
        )
    }
}

export const countBuyouts = (data) => {
    let newData = []
    let prev

    for (let i = 0; i < data.length; i++ ) {

        if (data[i] !== prev) {
            newData.push({
                price: data[i],
                amount: 1
            })

        } else {
            newData[newData.length - 1].amount += 1
        }

        prev = data[i]
    }

    return newData
}
const getPrice = (price) => {
    let gold = Math.floor(price)
    price = price.toFixed(4).toString()
    let silver = +price.slice(price.length - 4, price.length - 2)
    let copper = +price.slice(price.length -2, price.length)
    return '<span>' + (gold > 0 ? '<span class=\'moneygold\'>' + gold + '</span>' : '') + (silver > 0 ? '<span class=\'moneysilver\'>' + silver + '</span>' : '') + (copper > 0 ? '<span class=\'moneycopper\'>' + copper + '</span>' : '') + '</span>'
}


export default PriceChart
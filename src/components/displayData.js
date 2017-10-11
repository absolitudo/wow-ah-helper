import React from 'react'

const DisplayData = (props) => (
    <div>
        
        {props.data.map((sale, saleIndex) => {
            return (
                <div key={saleIndex}>
                    {sale.map((saleInfo, index) => <p key={index}>{saleInfo}</p>)}
                </div>
            )
        })
        }

    </div>
)

export default DisplayData
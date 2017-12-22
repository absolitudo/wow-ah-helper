import React from 'react'

const MoreInfo = (props) => (
    <div className='more-info-container' onClick={(event) => backgroundClick(event)}>
        <section className='more-info'>
            info
        </section>
    </div>
)

const backgroundClick = (event) => {
    event.stopPropagation()
}

export default MoreInfo
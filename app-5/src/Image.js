import React from 'react'

const Image = (props) => {
    return (
        <div>
            <img alt='spongebob' src={props.url}/>
        </div>
    )
}

export default Image
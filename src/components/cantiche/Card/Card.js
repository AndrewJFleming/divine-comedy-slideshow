import React from 'react';
import PropTypes from 'prop-types';

const Card = ({slide}) => {
    const {index, picture, canto, line, title} = slide;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={canto} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p>{canto}.{line} {title}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    slide: PropTypes.object.isRequired
}

export default Card;
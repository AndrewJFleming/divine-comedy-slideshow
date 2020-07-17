import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './CanticheCards.css';

import CanticheCard from './CanticheCard/CanticheCard';

class CanticheCards extends Component {
    state = {
        canticheCards: [
            { name: 'Inferno', 
            imgId: 'infImg', 
            src: "https://divine-comedy-images.s3-us-west-2.amazonaws.com/William-Blake-Inferno.jpg", 
            alt: "Inferno Canto 10 verses 40-42.jpg",
            link: "/inferno" },
            { name: 'Purgatory', 
            imgId: 'purImg', 
            src: "https://divine-comedy-images.s3-us-west-2.amazonaws.com/William-Blake-Purgatory.jpg", 
            alt: "Pur 24.jpg",
            link: "/purgatory" },
            { name: 'Paradise', 
            imgId: 'parImg', 
            src: "https://divine-comedy-images.s3-us-west-2.amazonaws.com/William-Blake-Paradise.jpg", 
            alt: "Par 18 dore.jpg",
            link: "/paradise" }
        ]
    }

    render () {
        let canticheCards = (
                    this.state.canticheCards.map(canticheCard => {
                        return (
                            <Link to={canticheCard.link}>
                                <CanticheCard
                                    name={canticheCard.name}
                                    imgId={canticheCard.imgId}
                                    src={canticheCard.src}
                                    alt={canticheCard.alt}/>
                            </Link>)
                        })
                    
        )

        return (
            <div className="CanticheCards">
                <h1 className="siteTitle">Dante Alighieri's Divine Comedy</h1>
                <div className="innerDiv">
                    {canticheCards}
                </div>
                <div className="info">
                    <h3>Welcome to the Divine Comedy Slideshow Project</h3>
                    <p>Please click on one of the three cards above to start viewing a slideshow of its respective slides.</p>
                </div>
            </div>
        );
    }
}

export default withRouter(CanticheCards);
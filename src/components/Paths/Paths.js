import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Paths.css';

import Path from './Path/Path';

class Paths extends Component {
    state = {
        paths: [
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
        let paths = (
                    this.state.paths.map(path => {
                        return (
                            <Link to={path.link}>
                                <Path
                                    name={path.name}
                                    imgId={path.imgId}
                                    src={path.src}
                                    alt={path.alt}/>
                            </Link>)
                        })
                    
        )

        return (
            <div className="Paths">
                <h1>Dante Algieri's Divine Comedy</h1>
                <div className="innerDiv">
                    {paths}
                </div>
                <div className="info">
                    <h3>Welcome to the Divine Comedy Slideshow Project</h3>
                    <p>Please click on one of the three cards above to start viewing a slideshow of its respective slides.</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Paths);
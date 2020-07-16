import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Home.css';

import About from '../../components/About/About';
import Paths from '../../components/Paths/Paths';
import Inferno from '../../components/cantiche/Inferno/Inferno';
import Purgatory from '../../components/cantiche/Purgatory/Purgatory';
import Paradise from '../../components/cantiche/Paradise/Paradise';

class Home extends Component {

    render () {
        return (
            <div>
                <header className="navigation">
                    <nav>
                        <ul>
                            <li><Link to="/" exact >Home</Link></li>
                            <li><Link to="/about" exact >About</Link></li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <Route path="/" exact component={Paths} />
                    <Route path="/about" exact component={About} />
                    <Route path="/inferno" exact component={Inferno} />
                    <Route path="/purgatory" exact component={Purgatory} />
                    <Route path="/paradise" exact component={Paradise} />
                </div>
            </div>
        );
    }
}

export default Home;
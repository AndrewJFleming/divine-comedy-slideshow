import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Home.css';
import Aux from '../../hoc/Auxiliary';

import About from '../../components/About/About';
import CanticheCards from '../../components/CanticheCards/CanticheCards';
import Inferno from '../../components/cantiche/Inferno/Inferno';
import Purgatory from '../../components/cantiche/Purgatory/Purgatory';
import Paradise from '../../components/cantiche/Paradise/Paradise';

class Home extends Component {

    render () {
        return (
            <Aux>
                <header className="navigation">
                    <nav>
                        <ul>
                            <li><Link to="/" exact >Home</Link></li>
                            <li><Link to="/about" exact >About</Link></li>
                        </ul>
                    </nav>
                </header>
                    <Route path="/" exact component={CanticheCards} />
                    <Route path="/about" exact component={About} />
                    <Route path="/inferno" exact component={Inferno} />
                    <Route path="/purgatory" exact component={Purgatory} />
                    <Route path="/paradise" exact component={Paradise} />
            </Aux>
        );
    }
}

export default Home;
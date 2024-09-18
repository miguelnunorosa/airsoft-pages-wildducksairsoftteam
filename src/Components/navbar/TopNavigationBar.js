import React, { Component } from "react";
import { Route } from "react-router-dom";



class TopNavigationBar extends Component {
   render(){

    return(
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            <a href="index.html" class="logo">Wild Ducks <em> Airsoft Team</em></a>
                            <div class="nav">
                                <Route exact path="/" component={Home} />
                                <Route exact path="/" component={Quem-Somos} />
                                <Route exact path="/" component={Equipa} />
                                <Route exact path="/" component={Contacto} />
                            </div>
                            <a class='menu-trigger'>
                            <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
   }
}

export default TopNavigationBar;
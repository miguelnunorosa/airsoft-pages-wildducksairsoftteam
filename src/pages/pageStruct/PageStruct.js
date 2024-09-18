import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom';


import TopNavigationBar from "../../Components/navbar/TopNavigationBar";
import Footer from "../footer/Footer";


import "./pageStruct.css";





class PageStruct extends Component {
    
   render(){
    
    return(
        <HashRouter>
            <TopNavigationBar />
            <Footer />
        </HashRouter>
    );
   }
}

export default PageStruct;
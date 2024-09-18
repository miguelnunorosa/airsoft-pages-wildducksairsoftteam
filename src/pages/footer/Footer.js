import React, { Component } from "react";

import "./footer.css";





class Footer extends Component {
   render(){

    return(
        <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p>Copyright &copy; 
                 2024 Wild Ducks Airsoft Team
                - Developed by <a rel="nofollow" href="https://miguelnunorosa.github.io" class="tm-text-link"target="_parent">Miguel Rosa</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
   }
}

export default Footer;
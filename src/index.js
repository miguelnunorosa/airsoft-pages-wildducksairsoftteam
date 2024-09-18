import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";

import PageStruct from './pages/pageStruct/PageStruct';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <PageStruct />
  {/* jQuery*/}
  <script src="assets/js/jquery-2.1.0.min.js"></script>

  {/* Bootstrap*/}
  <script src="assets/js/popper.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>

  {/* Plugins*/}
  <script src="assets/js/scrollreveal.min.js"></script>
  <script src="assets/js/waypoints.min.js"></script>
  <script src="assets/js/jquery.counterup.min.js"></script>
  <script src="assets/js/imgfix.min.js"></script>
  <script src="assets/js/mixitup.js"></script>
  <script src="assets/js/accordions.js"></script>

  <script src="assets/js/custom.js"></script>
  </React.StrictMode>

  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

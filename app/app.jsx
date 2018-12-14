import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
var React= require ('react') ;
var ReactDOM= require ('react-dom') ;
var Main= require ('Main') ;
var About= require ('About') ;
var Weather= require ('Weather') ;
var {Route, Router, IndexRoute, hashHistory}= require ('react-router') ;

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


ReactDOM.render (
    <Router history= {hashHistory}>
      <Route path= "/" component = {Main}>
        <Route path= "about" component = {About}/>
        <IndexRoute component= {Weather}/>
      </Route>
    </Router>,
    document.getElementById ("app")
);

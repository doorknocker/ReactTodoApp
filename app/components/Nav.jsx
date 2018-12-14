var React= require ('react') ;
var {Link}= require ('react-router') ;

var Nav= React.createClass({
  render: function (){
    return (
       <div class= "container">
          <h2>Nav  Component</h2>
          <Link to="/">Weather</Link>
          <Link to="/about">About</Link>
       </div>
  ) ;
}}) ;

module.exports= Nav ;

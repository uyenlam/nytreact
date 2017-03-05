// =========================================================================
// Here we show the Saved articles 
// =========================================================================

// Include React
var React = require("react");

// This is the Artnotes
var Artnotes = React.createClass({
    
  // Here we descibe this component's render method
  render: function() {

    return (
        // calling the props defined in the parent Saved.js
         <p class="bg-success">{this.props.notes}</p>
    ) // return
  } // render: function()
}); //React.createClass

// Export the component back for use in other files
module.exports = Artnotes;

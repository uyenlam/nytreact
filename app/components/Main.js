// Include React
var React = require("react");

// create an element on the ReactJS DOM
var Main = React.createClass({
   // This function allows childrens to update the parent.
   // grab the values from Search.js
  setTerm: function(term) {
    this.setState({ 
        topic: term.topic,
        startYear: term.startYear,
        endYear: term.endYear,
     });
  },

  // Here we render the function
  render: function() {

    return (
        // the header of the page
      <div className="container header">
        
          <h2><strong>New York Times Article Scrubber</strong></h2>
          <p><em>Fancy an article in the past? Find it here!</em></p>
          <hr />
         
        
        </div>

        // the body content of the page
        <div className="container body">

            <div className="row" id="search-section">
                {/* Render the Search child component from Search.js*/}
                {/* call the function setTerm above*/}
                <Search setTerm={this.setTerm} />
            </div>

            <div className="row" id="results-section">
                {/* Render the Results child component from Results.js*/}
                {/* Pass the value of this.state.results into articles which will be accessible in the children*/}
                <Results results={this.state.results} />
            </div>

            <div className="row" id="saved-section">
                {/* Render the Saved child component from Saved.js*/}
                {/* Pass the value of this.state.saved into articles which will be accessible in the children*/}
                <Saved articles={this.state.saved} />
            </div>
        </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;

// =========================================================================
// Here we have the Search form for the user to input their search criterias
// =========================================================================

// Include React
var React = require("react");

// This is the Search component. It includes the banner and form element
var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  // At initial state, all of the values are empty/ blank/ shown on the DOM as blank
  getInitialState: function() {
    return { 
        topic: "", 
        startYear: undefined, 
        endYear: undefined };
  },

   // This function will respond to every time the user input something new into the form
  handleChange: function(event) {

    // update the elements according to their ids
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },
  
  // This function will respond to the user input
  handleSubmit: function(event) {
    // prevent the page from refreshing
    event.preventDefault();

    // set the props -- these values will be accessible by the parent at Main.js
    this.props.setTerm({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
    });

    // once we have set the props, we can empty out the input form
    this.setState({ 
        term: "",
        startYear: undefined, 
        endYear: undefined
    });
  },

  // Here we descibe this component's render method
  render: function() {
    return (
        <div className="col-md-6">
            <div className="panel panel-default">
                {/* panel-heading*/}                  
                <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
                </div>
                {/* panel-body*/}
                <div className="panel-body text-center">
                {/* when the Search/ submit button is clicked, trigger the handleSubmit function*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <h4 className="">
                        <strong>Topic</strong>
                    </h4>

                    <input
                        type="string"
                        value={this.state.topic}
                        className="form-control"
                        onChange={this.handleChange}
                        id="topic"
                    />

                    <h4>
                        <strong>Start Year</strong>
                    </h4>
                    <input
                        type="number"
                        value={this.state.startYear}
                        className="form-control"
                        onChange={this.handleChange}
                        id="startYear"
                
                    />

                    <h4>
                        <strong>End Year</strong>
                    </h4>
                    <input
                        type="number"
                        value={this.state.endYear}
                        className="form-control"
                        onChange={this.handleChange}
                        id="endYear"
            
                    />

                    <button
                        type="submit"
                        className="form-control btn btn-primary btn-lg">Search </button>

                    {/*form-group*/}
                    </div> 
                </form>
                {/*panel-body*/}
                </div>
            {/*panel panel-default*/}  
            </div>
        {/*col-md-6*/}  
        </div>      
    );
  }
});

// Export the component back for use in other files
module.exports = Search;

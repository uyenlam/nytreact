// =========================================================================
// Here we show the Results we receive from the NYT API
// =========================================================================

// Include React
var React = require("react");

// This is the Results, our main component.
var Results = React.createClass({
    
  // Here we descibe this component's render method
  render: function() {
    return (

      <div className="col-md-6">
        <div className="panel panel-default">
            {/* panel-heading*/}                  
          <div className="panel-heading">
            <h3 className="panel-title text-center">Results</h3>
          </div>
            {/* panel-body*/}
          <div className="panel-body text-center">
            {/*for every article result*/}
              <div className="content-box" id="{{this._id}}">
                {/*article title*/}
                <div className="article-box-header">
                    <a href={"{{this.link}}"}><h3 className="article-title">{{this.title}}</h3></a>
                    <button className="add-comment"></button>
                    <button className="delete-article"></button>
                </div>
                {/*article content*/}
                <div className="article-content">
                    {/* article-image*/}
                    <div className="article-image">
                        <img src={'{{this.image}}'}/>
                    </div>
                    {/* text*/}
                    <p className="article-preview">{{this.text}}</p>
                </div>
            </div> {/*content-box*/}
            
          </div> {/*panel-body*/}
        
        </div> {/*panel panel-default*/}  

      {/*col-md-6*/}   
      </div>    
    ) // return
  } // render: function()
}); //React.createClass

// Export the component back for use in other files
module.exports = Search;

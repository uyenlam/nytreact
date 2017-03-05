// =========================================================================
// Here we show the Saved articles 
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
                <div className="content-box" id="{{this._id}}">
                    {/* article-title*/}
                    <div className="article-box-header">
                        <a href={"{{this.link}}"}><h3 class="article-title">{{this.title}}</h3></a>
                        <button className="add-note">Notes</button>
                        <button className="delete-saved">Delete from saved</button>
                    </div>
                    {/* article-content*/}
                    <div className="article-content">
                        {/* article image file*/}
                        <div className="article-image">
                            <img src={"{{this.image}}"}/>
                        </div>
                        {/* text*/}
                        <p className="article-preview">{{this.text}}</p>
                    </div>
                </div>
                
              </div> {/*panel-body*/}
            
            </div> {/*panel panel-default*/}  

          {/*col-md-6*/} 
          </div>   

    ) // return
  } // render: function()
}); //React.createClass

// Export the component back for use in other files
module.exports = Search;

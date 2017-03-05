// =========================================================================
// Here we show the Saved articles 
// =========================================================================

// Include React
var React = require("react");

// This is the Results, our main component.
var Saved = React.createClass({
    
  // Here we descibe this component's render method
  render: function() {
    // call props property
    var saved = this.props.saved;

    return (
          <div className="col-md-6">
            <div className="panel panel-default">
               {/* panel-heading*/}                  
              <div className="panel-heading">
                <h3 className="panel-title text-center">Saved Articles</h3>
              </div>
               {/* panel-body*/}
              <div className="panel-body text-center">
                <div className="content-box" id={saved._id}>
                    {/* article-title*/}
                    <div className="article-box-header">
                        <a href={saved.link}><h3 class="article-title">{saved.title}</h3></a>
                        <button className="delete-saved">Delete from saved</button>
                    </div>
                    {/* article-content*/}
                    <div className="article-content">
                        {/* text*/}
                        <p className="article-notes">
                            {/* Include grandschildren element Artnotes and call it in Artnotes.js*/}
                            <Artnotes notes={saved.notes} />
                        </p>
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
module.exports = Saved;

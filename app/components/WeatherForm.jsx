var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value; //set variable to location value
    if (location.length > 0){ //check for input
      this.refs.location.value = ''; //clear location value
      this.props.onSearch(location); //run the parent onSearch function (inside weather.jsx)
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter Location" ref="location"/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
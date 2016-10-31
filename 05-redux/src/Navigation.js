import React from "react";
import {connect} from "react-redux";

let NavigationComponent = (props) => (
<nav>
    <ul>
    <li><a to="/" onClick={props.navigateTo.bind(this, '/')}>Home</a></li>
    <li><a to="/apply" onClick={props.navigateTo.bind(this, '/apply')}>Apply</a></li>
    </ul>
</nav>
)

const state = (state, ownProps = {}) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch({ type: "NAVIGATE_TO", navigateTo: location });
  }
});

export default connect(state, mapDispatchToProps)(NavigationComponent);
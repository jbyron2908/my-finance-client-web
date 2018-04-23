/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class UIPlayground extends Component {
  render() {
    return (
      <div>
        UIPlayground
      </div>
    );
  }
}

UIPlayground.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({

});

const UIPlaygroundRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UIPlayground);

export default UIPlaygroundRedux;

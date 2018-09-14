import React from 'react';
import { connect } from 'react-redux';
import LeskaList from '../views/leska-list';
import * as leskaApi from '../../api/leska-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';

export class LeskaListContainer extends React.Component{

  componentDidMount = () => {
    leskaApi.getLeskas();
    this.props.dispatch(loadSearchLayout('leskas', 'Leska Results'));
  }

  render() {
    alert(this.props.products);
    return (

      <LeskaList leskas={this.props.leskas} deleteLeska={leskaApi.deleteLeska} />
    );
  }
};

const mapStateToProps = function(store) {
  return {
    leskas: store.leskaState.leskas
  };
};

export default connect(mapStateToProps)(LeskaListContainer);

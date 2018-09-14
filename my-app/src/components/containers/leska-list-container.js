import React from 'react';
import { connect } from 'react-redux';
import LeskaList from '../views/leska-list';
import * as leskaApi from '../../api/leska-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';

 class LeskaListContainer extends React.Component{

  componentDidMount = () => {
    leskaApi.getLeskas();
    this.props.dispatch(loadSearchLayout('leskas', 'Leska Results'));
  }

  render() {
    return (
      <LeskaList leskas={this.props.leskas} deleteLeska={leskaApi.deleteLeska} />
    );
  }
};

const mapStateToProps = function(state) {
  return {
    leskas: state
  };
};

export default connect(mapStateToProps)(LeskaListContainer);



// function mapStateToProps(state) {
//     const { leskas } = state;
//     return {
//         leskas
//     };
// }
//
// const connectedLeskaListContainer = connect(mapStateToProps)(LeskaListContainer);
// export { connectedLeskaListContainer as LeskaListContainer };

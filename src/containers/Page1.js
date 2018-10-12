import { connect } from 'react-redux';
import Page1 from '../components/Page1';

const mapStateToProps = (state, ownProps) => {
  const { page1 } = state;
  return {
    ...ownProps,
    ...page1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);

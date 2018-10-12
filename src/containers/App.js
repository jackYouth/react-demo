import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
  const { app } = state;
  return {
    ...ownProps,
    ...app
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
)(App);

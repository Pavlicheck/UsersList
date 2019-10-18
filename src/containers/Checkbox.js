import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox';
import {selectUser} from "../duck/users/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    selectUser: payload => dispatch(selectUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);

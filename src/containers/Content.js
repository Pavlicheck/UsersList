import { connect } from "react-redux";
import { fetchUsers } from "../duck/users/actions";
import Content from '../components/Content';

const mapStateToProps = state => {
  return state.users;
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

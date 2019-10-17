import { connect } from "react-redux";
import { selectAll } from "../duck/users/actions";
import Header from "../components/Header";

const mapStateToProps = state => {
  return {
    allSelected: state.users.users.every(user => user.selected)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectAll: select => dispatch(selectAll(select))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

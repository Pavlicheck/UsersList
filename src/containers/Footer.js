import { connect } from "react-redux";
import Footer from "../components/Footer";

const mapStateToProps = state => {
  return {
    users: state.users.users.filter(user => user.selected)
  };
};

export default connect(mapStateToProps)(Footer);

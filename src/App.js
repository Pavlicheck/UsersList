import React, { useEffect } from "react";
import { fetchUsers, selectUser } from "./duck/users/actions";
import { connect } from "react-redux";
import Table from "./components/Table";
import './App.css';

const App = ({ getUsers, selectUser, users }) => {
  useEffect(() => {
    !users.length && getUsers();
  }, [users]);

  return (
    <div className="App">
      <Table data={users} selectUser={selectUser}/>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users.users };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
    selectUser: payload => dispatch(selectUser(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

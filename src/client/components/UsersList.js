import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () =>
    this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  render() {
    return (
      <div>
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });
const loadData = () => {
  console.log("I'm trying to load some data");
};
export { loadData };
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);

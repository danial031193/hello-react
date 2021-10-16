const mapStateToProps = (state, ownProps) => ({
  username: state.users.list.find((user) => user.id === ownProps.id).username,
});

export { mapStateToProps };

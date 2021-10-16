import { removeUser } from '../../store/users/action-creators';

const mapStateToProps = (state) => ({
  accountId: state.account.id,
  users: state.users.list,
});

const mapDispatchToProps = {
  removeUser,
};

export { mapStateToProps, mapDispatchToProps };

import { login } from '../../store/account/action-creators';

const mapStateToProps = (state) => ({
  accountId: state.account.id,
  usersList: state.users.list,
});

const mapDispatchToProps = {
  login,
};

export { mapStateToProps, mapDispatchToProps };

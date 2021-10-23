import { addUser, updateNewUser } from '@store/users/action-creators';

const mapStateToProps = (state) => ({
  values: state.users.newUser,
});

const mapDispatchToProps = {
  addUser,
  setValue: updateNewUser,
};

export { mapStateToProps, mapDispatchToProps };

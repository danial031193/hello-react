import { connect } from 'react-redux';
import CreateUserForm from './index';
import { mapDispatchToProps } from './index.props';

export default connect(null, mapDispatchToProps)(CreateUserForm);

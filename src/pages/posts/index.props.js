import { getPosts } from '../../store/posts/action-creators';

const mapStateToProps = (state) => ({
  posts: state.posts.list,
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = {
  getPosts,
};

export { mapStateToProps, mapDispatchToProps };

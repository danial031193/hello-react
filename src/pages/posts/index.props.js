import { getPosts } from '@store/posts/action-creators';

const mapStateToProps = (state) => ({
  posts: state.posts.list.result,
  loading: state.posts.list.loading,
  error: state.posts.list.error,
});

const mapDispatchToProps = {
  getPosts,
};

export { mapStateToProps, mapDispatchToProps };

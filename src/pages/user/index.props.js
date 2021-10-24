import { getUserPosts } from '@store/posts/action-creators';

const mapStateToProps = (state) => ({
  posts: state.posts.userList.result,
});

const mapDispatchToProps = {
  getUserPosts,
};

export { mapStateToProps, mapDispatchToProps };

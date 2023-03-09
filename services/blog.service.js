import blogRepository from "../repositories/blog.repository.js";

const blogService = {
  createPostService: async function (post) {
    await blogRepository.createPostRepository(post);
  },
  getPostsService: async function () {
    return await blogRepository.getPostsRepository();
  },
  createCommentService: async function (comentario, postId) {
    await blogRepository.createCommentRepository(comentario, postId);
  }
};

export default blogService;

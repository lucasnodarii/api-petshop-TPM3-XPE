import blogService from "../services/blog.service.js";

const blogController = {
  createPost: async function (req, res, next) {
    try {
      let post = req.body;
      if (!post.titulo || !post.conteudo) {
        throw new Error("Titulo e conteudo são obrigatórios");
      }
      post = await blogService.createPostService(post);
      res.send(post);
      loggers.info(`POST /post - ${JSON.stringify(post)}`);
    } catch (error) {
      next(error);
    }
  },
  getPosts: async function (req, res, next) {
    try {
      res.send(await blogService.getPostsService());
    } catch (error) {
      next(error);
    }
  },
  createComment: async function (req, res, next) {
    try {
      let params = req.body;
      if (!params.postId || !params.comentario) {
        throw new Error("PostId, nome e conteudo são obrigatórios");
      }
      params = await blogService.createCommentService(
        params.comentario,
        params.postId
      );
      res.send(params);
    } catch (error) {
      next(error);
    }
  },
};

export default blogController;

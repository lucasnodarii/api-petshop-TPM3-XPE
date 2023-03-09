import { connect } from "./mongo.db.js";
import PostSchema from "../schemas/post.schema.js";
import CommentSchema from "../schemas/comment.schema.js";

const blogRepository = {
  createPostRepository: async function (post) {
    try {
      const mongoose = await connect();
      const Post = mongoose.model("Post", PostSchema);
      post = new Post(post);
      await post.save();
    } catch (error) {
      throw error;
    }
  },
  getPostsRepository: async function () {
    try {
      const mongoose = await connect();
      const Post = mongoose.model("Post", PostSchema);
      return await Post.find({}).exec();
    } catch (error) {
      throw error;
    }
  },
  createCommentRepository: async function (comentario, postId) {
    try {
      const mongoose = await connect();  

      const Post = mongoose.model("Post", PostSchema);
      const post = await Post.findOne({ _id: postId });
      post.comentarios.push(comentario);
      await Post.findOneAndUpdate({ _id: postId }, post);
    } catch (error) {
      throw error;
    }
  },
};

export default blogRepository;

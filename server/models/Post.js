const { Schema, model, Types } = require('mongoose');

const postSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    postText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    storyName: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
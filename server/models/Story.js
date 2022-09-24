const { Schema, model } = require('mongoose');
const contentSchema = require('./Content');
const Post = require('./Post');
const postSchema = require('./Post')


const storySchema = new Schema(
  {
    contents: [contentSchema],
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ]
  }
);

const Story = model('Story', storySchema);

module.exports = Story


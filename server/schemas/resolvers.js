const { AuthenticationError } = require("apollo-server-express");
const { User, Story, Post } =require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    stories: async() => {
      return await Story.find()
      .populate("contents")
      .populate("posts")
    },
    story: async(parent, { name }) => {
      return await Story.findOne({ name })
      .populate("contents")
      .populate("posts");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id})
        .select("-__v -password")
      }
    },
    user: async (parent, { username }) => {
      return await User.findOne({username})
      .select("-__v -password");
    },
    posts: async (parent, args, context) => {
      return await Post.find({ username: context.user.username})
    }
  },
  Mutation: {
    login: async (parent, {username, password}) => {      
      const user = await User.findOne({ username });
      
      if(!user) {
        throw new AuthenticationError("Incorrect credientials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.log(error)
      }
    },
    addStory: async (parent, args, context) => {
      console.log(context.user._id)
      if (context.user._id == '622594e03c7ece68e0443498') {
        return await Story.create(args); 
      }
      throw new AuthenticationError('Nice Try 😝🤣');
    },
    addContent: async (parent, { storyId, id, type, text, url }, context) => {
      if (context.user._id == '622594e03c7ece68e0443498') {
        return await Story.findByIdAndUpdate(
          { _id: storyId },
          { $push: { contents: { id: id, type: type, text: text, url: url } } },
          { new: true }
        ); 
      }
      throw new AuthenticationError('Nice Try 😝🤣');
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
  
        await Story.findByIdAndUpdate(
          { _id: args.storyId },
          { $push: { posts: post._id } },
          { new: true }
        );
  
        return post;
      }
  
      throw new AuthenticationError('Please log in!');
    },
    removeStory: async (parent, { storyId }, context) => {
      try {
        return await Story.findOneAndDelete({ _id: storyId });
      } catch (e) {
        console.log(e);
      }
    },
    removePost: async (parent, { postId }, context) => {
      try {
        return await Post.findOneAndDelete({ _id: postId });
      } catch (e) {
        console.log(e);
      }
    },
    removeUser: async (parent, { userId }, context) => {
      try {
        return await User.findOneAndDelete({ _id: userId });
      } catch (e) {
        console.log(e);
      }
    },
  } 
};

module.exports = resolvers;
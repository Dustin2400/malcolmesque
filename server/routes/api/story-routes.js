const router = require('express').Router();
const { Story, User, Post } = require('../../models');

router.get('/', (req, res) => {
  Story.find({})
  .then(dbStoryData => res.json(dbStoryData))
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get('/:storyName', ({ params }, res) => {
  Story.findOne({ name: params.storyName})
  .then(dbStoryData => {
    if(!dbStoryData) {
      res.status(404).json({ message: 'No story found with this id.'});
      return;
    }
    res.json(dbStoryData);
    })
    .catch(err => res.json(err));
})

router.get('/comments/:storyName', ({ params }, res) => {
  Post.find({ storyName: params.storyName })
  .then(dbCommentData => {
    console.log(dbCommentData);
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comments found for this story'});
      return;
    }
    res.json(dbCommentData);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.post('/', ({ body }, res) => {
  Story.create(body)
  .then(dbStoryData => res.json(dbStoryData))
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post('/comment/:storyName', ({ params, body }, res) => {
  var username;
  User.findOne({ _id: body.userId })
  .then(dbUserData => {
    username = dbUserData.username;
      Post.create(
        {
        postText: body.newComment,
        username: username,
        storyName: params.storyName
      })
      .then(dbPostData => {
        console.log(dbPostData);
        Story.findOneAndUpdate(
          { name: params.storyName },
          { $addToSet: { posts: dbPostData.postId } },
          { new: true }
        )
        .then(dbStoryData => {
          if(!dbStoryData) {
            res.status(404).json({ message: 'no story found with this name'});
            return;
          }
          res.json(dbStoryData)
        })
        .catch(err => 
          {
            console.log(err);
            res.json(err);
          });
      })
      .catch(err => {
        res.status(400).json(err);
      })
      
  })
  .catch(err => res.status(400).json(err));
  
});

router.put('/:storyId', ({ params, body }, res) => {
  Story.findOneAndUpdate(
    { _id: params.storyId },
    body,
    { new: true }
  )
  .then(dbStoryData => {
    if(!dbStoryData) {
      res.status(404).json({ message: 'No story found with this id!'});
      return;
    }
    res.json(dbStoryData);
  })
  .catch(err => res.status(400).json(err));
});


router.delete('/:storyId', ({ params }, res) => {
  Story.deleteOne({ _id: params.storyId})
  .then(dbStoryData => {
    if(!dbStoryData) {
      res.status(404).json({ message: 'No story found with this id.'});
      return;
    }
    res.json(dbStoryData);
    })
    .catch(err => res.json(err));
});

module.exports = router;
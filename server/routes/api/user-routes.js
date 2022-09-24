const router = require('express').Router();
const { json } = require('express');
const { User, Post } = require('../../models');

router.get('/', (req, res) => {
  User.find({})
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get('/:userId', ({ params }, res) => {
  User.findOne({ _id: params.userId })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id!'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.get('/comments/:username', ({ params }, res) => {
  Post.find({ username: params.username })
  .then(dbCommentData => {
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comments found for this user'});
      return;
    }
    res.json(dbCommentData);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.post('/', ({ body }, res) => {
  User.create(body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post('/login', ({ body }, res) => {
  User.findOne({ username: body.username })
  .then( async (dbUserData) => {
    var valid = await dbUserData.isCorrectPassword(body.password);
    if (valid) {
      res.json(dbUserData);
    } else {
      res.status(404).json({ message: 'Invalid username or password'});
      return;
    }
  })
  .catch(err => res.status(400).json(err));
});

router.put('/comments', ({ body }, res) => {
  Post.findOneAndUpdate(
    { _id: body._id},
    body,
    {new: true }
  )
  .then(dbCommentData => {
    console.log(dbCommentData);
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment found with this id!'});
      return
    }
    res.json(dbCommentData)
  })
});

router.delete('/:userId', ({ params }, res) => {
  User.deleteOne({ _id: params.userId})
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(404).json({ message: 'No user found with this id.'});
      return;
    }
    res.json(dbUserData);
    })
    .catch(err => res.json(err));
});

router.delete('/comments/:commentId', ({ params }, res) => {
  Post.deleteOne({ _id: params.commentId})
  .then(dbCommentData => {
    if(!dbCommentData) {
      res.status(404).json({ message: 'No comment found with this id.'});
      return;
    }
    res.json(dbCommentData);
  })
  .catch(err => res.json(err));
});

module.exports = router;
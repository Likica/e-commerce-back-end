const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product, ProductTag]
  })
    .then(Tag => res.json(Tag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/api/tag/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product, ProductTag]
  })
    .then(Tag => res.json(Tag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/tags', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(Tag => {
      res.json(Tag);
    });
});

router.put('/api/tag/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag: req.body.tag
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(Tag => {
    res.json(Tag);
  });
});

router.delete('/api/tag/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

module.exports = router;

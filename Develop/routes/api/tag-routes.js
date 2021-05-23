const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tag', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  db.Tag.findAll({
    include: [Product, ProductTag]
  })
    .then(dbTag => res.json(dbTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/api/tag/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  db.Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product, ProductTag]
  })
    .then(dbTag => res.json(dbTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/tag', (req, res) => {
  // create a new tag
  db.Tag.create(req.body)
    .then(dbTag => {
      res.json(dbTag);
    });
});

router.put('/api/tag/:id', (req, res) => {
  // update a tag's name by its `id` value
  db.Tag.update({
    tag: req.body.tag
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbTag => {
    res.json(dbTag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  db.Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    res.json(dbTag);
  });
});

module.exports = router;

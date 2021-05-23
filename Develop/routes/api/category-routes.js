const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  db.Category.findAll({
    include: [Product]
  })
    .then(dbCategory => res.json(dbCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/api/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  db.Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategory,);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/categories', (req, res) => {
  // create a new category
  db.Category.create(req.body)
    .then(dbCategory => {
      res.json(dbCategory);
    });
});

router.put('/api/categories/:id', (req, res) => {
  // update a category by its `id` value
  db.Category.update({
    category: req.body.category
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.delete('/api/categories/:id', (req, res) => {
  // delete a category by its `id` value
  db.Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

module.exports = router;

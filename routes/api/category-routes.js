const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then(Category => res.json(Category))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/api/category/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(Category => {
    if (!Category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(Category,);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/api/category', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(Category => {
      res.json(Category);
    });
});

router.put('/api/category/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category: req.body.category
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(Category => {
    res.json(Category);
  });
});

router.delete('/api/category/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    // attributes:
  })
    .then(dbEcommerce => res.json(dbEcommerce))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    // attributes: {},
    where: {
      id: req.params.id
    }
  })
    .then(dbEcommerce => {
      if (!dbEcommerce) {
        res.status(404).json({ message: 'No category found with that name'});
        return;
      }
      res.json(dbEcommerce);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  })
  .then(dbEcommerce => res.json(dbEcommerce))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbEcommerce => {
      if (!dbEcommerce[0]) {
        res.status(404).json({ message: 'No category found with that name'});
        return;
      }
      res.json(dbEcommerce);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbEcommerce => {
      if(!dbEcommerce) {
        res.status(404).json({ message: 'No category found with this name'});
        return;
      }
      res.json(dbEcommerce);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model:Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then((categoryData)=>{
    if(!categoryData){
       return res.status(404).json({message: 'Category not found'});
       
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  }) ;
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
  Category.findOne({

    where: {id: req.params.id},
    include: {
      model:Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}
  })
  .then((categoryData) => {
    if(!categoryData){
      return res.status(404).json({error: 'Category not found with this id'});
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  }) ;
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(updateCategory => {
      if (!updateCategory) {
        console.log('Category not found with this id');
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      // Doesnt show as json response but works
      console.log('Successfully updated category');
      res.json(updateCategory);
     
       

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((categoryData) => {
      if (!categoryData) {
        console.log('Category not found with this id');
        return res.status(404).json({ error: 'Category not found with this id' });
      }
      else {
        // Doesnt show as json response but works
        console.log('Successfully deleted category');
        res.json(categoryData);
        return res.status.json({ message: 'Successfully deleted category' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

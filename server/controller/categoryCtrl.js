const Category = require('../model/categoryModel')

const categroyCtrl = {
    getCategories: async(req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) => {
        try {
            const {name} = req.body
            const category = await Category.findOne({name})
            if(category) return res.status(500).json({msg: "This Category is already exist."})

            const newCategory = new Category({name})
            
            await newCategory.save()
            res.json({msg: "created a category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Category"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id, {name: req.body.name})
            res.json({msg: "Updated a Category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports =  categroyCtrl
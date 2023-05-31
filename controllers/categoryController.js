import { Categories } from '../model/model.js'
import { ApiError } from '../error/ApiError.js'

class CategoryController {
    async create(req, res) {
        const { name } = req.body;
        const categories = await Categories.create({ name })
        return res.json(categories);
    }

    async getAll(req, res) {
        const categoriesList = await Categories.findAll()
        return res.json(categoriesList)
    }

    async getOne(req, res, next ) {
        // try {
        //     const { id } = req.params;
        //     const category = await Categories.findOne({ where: { id } })
        //     return res.json(category)
        // } catch (e) {
        //     return next(res.json(ApiError.badRequest(e.message)))
        // }
        const { id } = req.params;
        const category = await Categories.findOne({ where: { id } })
        if(!category) {
            return next(res.json(ApiError.badRequest("Такой записи не найдено")))
        }
        return res.json(category)

    }

}

const categoryController = new CategoryController();
export { categoryController }
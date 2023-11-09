const { sign } = require('jsonwebtoken')
const { Product } = require('../models/Product')

class ProductController {
    async create(req, res) {
        try {
            const {
                name,
                description,
                price,
                logoUrl,
                category
            } = req.body

            const existProduct = await Product.findOne({where:{name:name}})

            if (existProduct){
              return res.status(403).send({message: "Produto já cadastrado com esse nome"})
            }

            const userCreated = await Product.create({
                name,
                description,
                price,
                logoUrl,
                category
            })

            return res.status(201).send(userCreated)
            
        } catch (error) {
            return res.status(400).send({
                message: "Erro na criação de produto",
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {

            const users= await Product.findAll()

            return res.status(201).send(users)

        } catch (error) {
            return res.status(400).send({
                message: "Erro ao listar todos os produtos",
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const { productId } = req.params
            const product= await Product.findByPk(productId)

            return res.status(201).send(`Produto: ${product.name}`)

        } catch (error) {
            return res.status(400).send({
                message: "Erro ao listar o produto",
                cause: error.message
            })
        }
    }

}

module.exports = new ProductController()
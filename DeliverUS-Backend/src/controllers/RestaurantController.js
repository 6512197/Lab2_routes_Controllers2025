import { Restaurant, Product, RestaurantCategory, ProductCategory } from '../models/models.js'

const index = async function (req, res) {
  try {
    const restaurants = await Restaurant.findAll(
      {
        attributes: { exclude: ['userId'] },
        include:
      {
        model: RestaurantCategory,
        as: 'restaurantCategory'
      },
        order: [[{ model: RestaurantCategory, as: 'restaurantCategory' }, 'name', 'ASC']]
      }
    )
    res.json(restaurants)
  } catch (err) {
    res.status(500).send(err)
  }
}

// TODO: Complete the following functions

const create = async function (req, res) {
  // creating new elements, the Model.build method that receives a JSON object 

  const newRestaurant = Restaurant.build(req.body)
  // newRestaurant.userId = req.user.id authentificated
  newRestaurant.userId = 1
  try {
    const restaurant = await newRestaurant.save()
    res.json(restaurant)
  } catch (err) {
    res.status(500).send(err)
  }
}

const show = async function (req, res) {

}

const update = async function (req, res) {

}

const destroy = async function (req, res) {

}

const RestaurantController = {
  index,
  create,
  show,
  update,
  destroy
}
export default RestaurantController

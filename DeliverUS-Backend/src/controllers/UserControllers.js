import { Restaurant, Product, RestaurantCategory, ProductCategory ,User} from '../models/models.js'

const index = async function (req, res) {
  try {
    const Users = await User.findAll(
      {
        attributes: { exclude: ['userId'] },
        include:
        {
          model: User,
          as: 'User'
        },
        order: [[{ model: User, as: 'Users' }, 'name', 'ASC']]
      }
    )
    res.json(Users)
  } catch (err) {
    res.status(500).send(err)
  }
}

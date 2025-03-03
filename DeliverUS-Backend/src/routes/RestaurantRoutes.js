// import OrderController from '../controllers/OrderController.js'
// import ProductController from '../controllers/ProductController.js'
import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // map an action with app.
  app.route('/restaurants')
    .get(
      RestaurantController.index)
    .post(
      RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)
    .put(
    // TODO: Add needed middlewares
      RestaurantController.update)
    .delete(
    // TODO: Add needed middlewares
      RestaurantController.destroy)

  // app.route('/restaurants/:restaurantId/orders')
  //   .get(
  //   // TODO: Add needed middlewares
  //     OrderController.indexRestaurant)

  // app.route('/restaurants/:restaurantId/products')
  //   .get(
  //   // TODO: Add needed middlewares
  //     ProductController.indexRestaurant)

  // app.route('/restaurants/:restaurantId/analytics')
  //   .get(
  //   // TODO: Add needed middlewares
  //     OrderController.analytics)
}
export default loadFileRoutes

import * as userService from "../services/user";
import logger from "../utils/logger";

/**
 * Controller to get all the users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function getAllUsers(request, response, next) {
  userService
    .getAllUsers()
    .then((data) => response.json(data))
    .catch((err) => next(err));

  //mathi ra tala ko same kaam ho. mathi chain after using database case ho
  //tala ko try catch chain json data ma find garera service bata return gareko kura ho
  // try {
  //   const data = userService.getAllUsers();
  // } catch (err) {
  //   next(err);
  // }
}

/**
 * Controller to get users by ID
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function getUserById(req, res, next) {
  try {
    const data = userService.getUserById(+req.params.userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to create users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function createUser(req, res, next) {
  const params = req.body;

  try {
    const data = userService.createUser(params);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to delete users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function deleteUser(req, res, next) {
  const userId = +req.params.userId;

  try {
    const data = userService.deleteUser(userId);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to update users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function updateUser(req, res, next) {
  const params = req.body;
  const userId = +req.params.userId;

  try {
    const data = userService.updateUser(userId, params);

    res.json(data);
  } catch (err) {
    next(err);
  }
}
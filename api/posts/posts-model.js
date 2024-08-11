const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function getByUserId(userId) {
  return db('posts').where('user_id', userId);
}

function get() {
  return db('posts');
}

function getById(id) {
  return db('posts')
    .where({ id })
    .first();
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(([id]) => getById(id));
}

function update(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}

module.exports = {
  getByUserId,
  insert, 
  getById, 
}
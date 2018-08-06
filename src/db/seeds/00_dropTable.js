// NOT FUNCTIONAL
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('plants_boards').del()
  await knex('plants').del()
  await knex('boards').del()
  await knex('users').del()
};

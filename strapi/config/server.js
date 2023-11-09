module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 3000,
    //env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

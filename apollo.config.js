module.exports = {
  client: {
    includes: ['{pages,graphql}/**/*.{gql,graphql}'],
    service: {
      localSchemaFile: './graphql/schema.json',
      name: 'tibber',
    },
  },
};

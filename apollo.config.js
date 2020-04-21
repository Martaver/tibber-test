
module.exports = {
    client: {
        service: {
            name: 'tibber',
            localSchemaFile: './graphql/schema.json'
        },
        includes: ['{pages,graphql}/**/*.{gql,graphql}'],
    }
}

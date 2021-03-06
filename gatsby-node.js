exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      wpgraphql {
        pages(first: 20) {
          nodes {
            uri
            id
          }
        }
      }
    }
  `)

  const pages = result.data.wpgraphql.pages.nodes

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: page.id,
      },
    })
  })
}

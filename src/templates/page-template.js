import React from "react"
import { graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`

export const PageTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  return (
    <AppLayout>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <p dangerouslySetInnerHTML={{ __html: page.content }} />
    </AppLayout>
  )
}

export default PageTemplate

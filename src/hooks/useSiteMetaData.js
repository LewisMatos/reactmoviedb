import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            top_rated_endpoint
            popular_endpoint
            image_url
            image_size
          }
        }
      }
    `
  )
  return site.siteMetadata
}

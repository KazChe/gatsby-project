import * as React from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';

export function Seo(props) {
    const data = useStaticQuery(graphql `
    query GetSiteMetadata {
        site {
            siteMetadata {
              description
              title
              image
              siteURL
            }
          }
      }      
    `);

    const defaults = data?.site?.siteMetadata;

    const title = props.title || defaults.title;
    const description = props.dedscription || defaults.dedscription;
    const image = (props.image || defaults.image, defaults.image);
    const siteURL = new URL(props.path || '/', defaults.siteURL);

    return(
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={siteURL} />
            {image && <meta name="image" content={image} />}
            {/* facebook stuff */}
            <meta property="og:url" content={siteURL} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
        </Helmet>
    )
}
import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo";
import "../styles/globals.css"

export function Layout({
    children,
    title = false,
    description = false,
    image = false,
}) {
    const data = useStaticQuery(graphql `
    query GetSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }      
    `);

    const meta = data?.site?.siteMetadata ?? {}; 

    return (
        <>
        <Seo title={title} description={description} image={image} />
        <header>
            <Link to="/">{meta.title}</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}
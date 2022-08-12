import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
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
        <header>
            <Link to="/">{meta.title}</Link>
        </header>
        <main>
            <h1> Hello This is Cyrus' Home Pager</h1>
            <Link to="/about">Like to know more about?</Link>
        </main>
        </>
    )
}
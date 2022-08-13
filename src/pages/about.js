import * as React from 'react';
import { Seo } from "../components/seo";
import { Link } from 'gatsby';
import { Layout } from "../components/layout";

export default function AboutPage() {
    return (
        <Layout title="About this site huh?" description="More information about this site">
            <h1> How About This Site</h1>
            <Link to="/">Go Homes</Link>
        </Layout>
    )
}
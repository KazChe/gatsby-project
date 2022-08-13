import * as React from 'react';
import { Seo } from "../components/seo";
import { Link } from 'gatsby';

export default function AboutPage() {
    return (
        <>
        <Seo title="About this site" description="More Info about this site"/>
        <main>
            <h1> How About This Site</h1>
            <Link to="/">Go Homes</Link>
        </main>
        </>
    )
}
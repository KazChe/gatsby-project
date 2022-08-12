import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
    return (
        <main>
            <h1> Hello This is Cyrus' Home Pager</h1>
            <Link to="/about">Like to know more about?</Link>
        </main>
    )
}
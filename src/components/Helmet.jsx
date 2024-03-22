import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetCP = ({ pageTitle, pageDescription, pageKeywords }) => (
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
    </Helmet>
);

export default HelmetCP;

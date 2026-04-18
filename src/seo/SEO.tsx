import React from 'react';
import { Helmet } from 'react-helmet-async';
import metadata from './metadata.json';

interface SEOProps {
    pageKey: string;
}

type PageMetadata = {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url: string;
    noIndex?: boolean;
    schemaType?: 'WebPage' | 'Organization';
};

const SITE_NAME = 'PresentoLab Visual Storytelling Agency';
const DEFAULT_IMAGE = 'https://presentolab.com/og-image.png';
const BASE_URL = 'https://presentolab.com';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PresentoLab',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    description:
        'PresentoLab crafts world-class presentation design, storytelling, and brand clarity for startups and global brands.',
    sameAs: [
        'https://www.linkedin.com/company/presentolab',
        'https://www.instagram.com/presentolab',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@presentolab.com',
    },
    address: {
        '@type': 'PostalAddress',
        streetAddress: '5900 Balcones Drive #15684',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78731',
        addressCountry: 'US'
    }
};

const SEO: React.FC<SEOProps> = ({ pageKey }) => {
    const pages = metadata as Record<string, PageMetadata>;
    const page: PageMetadata = pages[pageKey] ?? pages['default'];

    const fullTitle = `${page.title} ${SITE_NAME}`;
    const image = page.image ?? DEFAULT_IMAGE;
    const canonicalUrl = page.url;
    const schemaType = page.schemaType ?? 'WebPage';

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: fullTitle,
        description: page.description,
        url: canonicalUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: BASE_URL,
        },
    };

    const jsonLd = schemaType === 'Organization' ? organizationSchema : webPageSchema;

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={page.description} />
            {page.keywords && <meta name="keywords" content={page.keywords} />}
            <link rel="canonical" href={canonicalUrl} />
            {page.noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={page.description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={page.description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;

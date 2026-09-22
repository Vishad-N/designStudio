import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo({ 
  title, 
  description, 
  url, 
  image = "https://dsinterior.in/assets/chair-hero.jpg",
  type = "website",
  schema 
}) {
  const siteName = "Design Studio";
  const defaultTitle = `${siteName} — Interiors that become the accent`;
  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || "We create designer interiors that don’t just complement a home — they become its accent. Premium interior design services in Mumbai, Pune, Bengaluru, and Delhi.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph tags for Facebook / LinkedIn */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

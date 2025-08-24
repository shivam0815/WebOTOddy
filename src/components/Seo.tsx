// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  keywords?: string;
};

const Seo: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image = "/default-preview.jpg",
  author = "Otoddy",
  keywords = "",
}) => {
  const absoluteImageUrl = `https://otoddy.com${image}`; // Replace with your real domain

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* Basic Meta */}
      <meta charSet="utf-8" />
      <title>{title} | Otoddy</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | Otoddy`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Otoddy`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:creator" content="@OtoddyOfficial" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0d6efd" />

      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default Seo;

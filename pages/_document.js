import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/public/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/public/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#50b8bb" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preload" href="/public/fonts/Lato-Regular.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/public/fonts/Poppins-Bold.woff2" as="font" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

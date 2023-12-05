import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaInformation() {
  const siteTitle = 'Handsign | Learn ASL using AI camera';
  const siteDescription = 'A simple ASL (American Sign Language) alphabet detection using TensorFlow and Handpose model.';
  const siteImageUrl = 'https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg';

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'id' }}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>{siteTitle}</title>
        <link rel="canonical" href="https://handsign-m4qq6.ondigitalocean.app/" />
        <meta name="description" content={siteDescription} />
        <meta name="image" content={siteImageUrl} />
        {/* OpenGraph tags */}
        <meta property="og:url" content="https://handsign-m4qq6.ondigitalocean.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteImageUrl}?tr=w-1200,h-630,fo-auto`} />
        <meta property="fb:app_id" content="" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@syauqy" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteImageUrl}?tr=w-1200,h-675,fo-auto`} />
      </Helmet>
    </div>
  );
}

import React from 'react'

function sitemap() {
  return null;
}

export const getServerSideProps = async ({res}) => {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

    </urlset>
  `

  res.setHeader('Content Type', 'text/xml');
  res.write(sitemap);
  res.end();
}

export default sitemap;
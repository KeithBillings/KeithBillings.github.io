const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

let sitemap = new SitemapStream({ hostname: 'https://www.keithbillings.com/' });

let writeStream = createWriteStream(resolve(__dirname, './public/sitemap.xml'));
sitemap.pipe(writeStream);

// List of URLs
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/about', changefreq: 'yearly', priority: 0.8 });
sitemap.write({ url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 });

// Listen for the 'finish' event on writeStream
writeStream.on('finish', () => console.log('Sitemap created.'));

sitemap.end();

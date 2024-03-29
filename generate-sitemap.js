const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

let sitemap = new SitemapStream({ hostname: 'https://keithbillings.com/' });

let writeStream = createWriteStream(resolve(__dirname, './public/sitemap.xml'));
sitemap.pipe(writeStream);

// List of URLs
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/contact', changefreq: 'yearly', priority: 0.7 });

// Listen for the 'finish' event on writeStream
writeStream.on('finish', () => console.log('Sitemap created.'));

sitemap.end();

// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  let articleTimestamps = [];
  let nextUrl = "https://news.ycombinator.com/newest";

  // Keep going until we collect 100 articles
  while (articleTimestamps.length < 100) {
    // Navigate to the current page (initially the first page)
    await page.goto(nextUrl);
    
    // Select the full timestamps from the 'title' attribute
    const timestampsOnPage = await page.$$eval('.age a', articles =>
      articles.map(article => article.title) // Get the 'title' attribute which contains the timestamp
    );

    // Add timestamps to the main list
    articleTimestamps = [...articleTimestamps, ...timestampsOnPage];

    // If we have enough articles, stop
    if (articleTimestamps.length >= 100) {
      break;
    }

    // Get the URL for the next page from the "More" button
    const nextLink = await page.$eval('a.morelink', link => link.href);
    nextUrl = nextLink;
  }

  // Slice the first 100 timestamps
  articleTimestamps = articleTimestamps.slice(0, 100);

  // Validate that the articles are sorted from newest to oldest
  let sorted = true;
  for (let i = 0; i < articleTimestamps.length - 1; i++) {
    const currentTime = new Date(articleTimestamps[i]);
    const nextTime = new Date(articleTimestamps[i + 1]);
    if (currentTime < nextTime) {
      sorted = false;
      break;
    }
  }

  if (sorted) {
    console.log('The articles are correctly sorted from newest to oldest.');
  } else {
    console.log('The articles are NOT sorted correctly.');
  }

  /* OPTIONAL: you could choose to close the browser after validation using the following code:
   
  await browser.close();

  */
}

(async () => {
  await sortHackerNewsArticles();
})();

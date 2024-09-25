# HACKER NEWS SORTING CHALLENGE

This repository demonstrates my approach to solving a technical challenge using JavaScript and Microsoft's Playwright framework. The task involves validating that the first 100 articles on Hacker News are sorted from newest to oldest.

## Purpose

I decided to use this technical challenge as a template to highlight my problem-solving process and showcase how I work with web automation tools. The challenge required handling dynamic web content, pagination, and timestamp validation. This project demonstrates my proficiency with JavaScript, Playwright, and data extraction from web pages.

I’ve kept the original challenge instructions in this README (further down), as they provide context and detail the technical requirements, as well as the next steps.

### My Approach

1. Understanding the Task
The task was to validate that exactly 100 articles were ordered by date. Since the articles are spread across multiple pages on Hacker News, handling pagination was key to solving this challenge.

2. Extracting Timestamps
Using Playwright, I navigated the Hacker News site and extracted the absolute timestamps from the title attribute of the elements displaying the article's relative time (e.g., "2 hours ago"). These timestamps were crucial to correctly validating the article order.

3. Implementing Pagination
I implemented logic to handle pagination, ensuring the script continued to fetch articles from subsequent pages until 100 articles had been collected.

4. Sorting Validation
Once I had gathered the first 100 articles, I verified that they were sorted correctly from newest to oldest by comparing their timestamps using JavaScript’s Date object.

#### Testing

In order to see the results of this challenge, simply run:

npm i
node index.js




ORIGINAL INSTRUCTIONS (redacted to remove the company's information)

# Take Home Assignment

Welcome to the take home assignment for our [QA Engineer] role! We appreciate your interest and look forward to seeing what you come up with.

## Instructions

This assignment has two questions as outlined below. When you are done, send the following:

1. A link to a zip file of this folder on Google Drive 

2. A note indicating your work location (Country/State)

3. A note of how you found this job post (LinkedIn, Handshake, Wellfound, referral, etc.)

### Question 1

In this assignment, you will create a script on [Hacker News](https://news.ycombinator.com/) using JavaScript and Microsoft's [Playwright](https://playwright.dev/) framework. 

1. Install node modules by running `npm i`.

2. Edit the `index.js` file in this project to go to [Hacker News/newest](https://news.ycombinator.com/newest) and validate that EXACTLY the first 100 articles are sorted from newest to oldest. You can run your script with the `node index.js` command.

Note that you are welcome to update Playwright or install other packages as you see fit, however you must utilize Playwright in this assignment.

### Question 2

Please record a short, ~2 min video that includes:

1. Why you want to work here 

2. A walk-through demonstration of your code, showing a successful execution

Post the link (Please use [Loom](https://www.loom.com) to record your response). The answer and walkthrough should be combined into *one* video.

## Frequently Asked Questions

### What is your hiring process? When will I hear about next steps?

This take home assignment is the first step in our hiring process, followed by a final round interview if it goes well. **We review every take home assignment submission and promise to get back to you either way within one week (usually sooner).** The only caveat is if we are out of the office, in which case we will get back to you when we return. If it has been more than one week and you have not heard from us, please do follow up.

The final round interview is a 2-hour technical work session that reflects what it is like to work here. We provide a $150 stipend for your time for the final round interview regardless of how it goes. After that, there may be a short chat with our director about your experience and the role.

Our hiring process is rolling where we review candidates until we have filled our openings. If there are no openings left, we will keep your contact information on file and reach out when we are hiring again.

### How do you decide who to hire?

We evaluate candidates based on three criteria:

- Technical ability (as demonstrated in the take home and final round)
- Customer service orientation (as this role is customer facing)
- Alignment with our values

This means whether we hire you is based on how you do during our interview process, not on your previous experience (or lack thereof). Note that you will also need to pass a background check to work here as our customers require this.

### How can I help my application stand out?

We've found that our best hires have been the most enthusiastic throughout our process. If you are very excited about working here, please feel free to go above and beyond on this assignment.

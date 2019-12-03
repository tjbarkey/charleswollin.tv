## Project Overview

### `Intro`

This site is hosted at http://www.charleswollin.com.

Charles needed a new website to act as a landing page for potential clients, as well as fans and friends, to showcase his extensive work in the sports broadcasting field and give him control of the site's content in an easy to use online interface.

### `Technologies Used`

-Strapi CMS
-Single Page CreateReactApp App
-React with Hooks
-React Router
-ES6
-RESTful APIs
-Heroku (backend/CMS/database hosting)
-Netlify (front end hosting)
-PostgreSQL
-AWS Bucket for Image Serving
-Google Analytics

### `Process`

I broke down the project needs into chunks: Database, CMS, Hosting, Frontend Components, Rendering/Routing.

I knew that I wanted to create a lightweight headless CMS that would populate all of the site's information and blog posts, and that gave me control over how that information was served. I landed on Strapi because it's a new, Node based open source CMS with decent documentation and an active community of developers. It was easy to learn and set up and I had a functioning backend API up and running in no time on Heroku, which I chose because of the speed and simplicity of setup, and because of the ability to automate deployment with Git updates. I decided to use a Postgres database in favor of the trending NoSQL options because I knew I'd be adding fields and manipulating the database as I developed the frontend, and the more strict nature of Postgres meant less opportunity for bugs.

I chose to build the frontend of the app with CreateReactApp because, as someone who is building projects and trying to make a career transition while working an engineering job that requires 60+ hours a week, time is of the essence, and I don't have time to muddle my way through setting up WebPack and other dependencies and file structures. I decided to learn the Hooks method of writing React because it seemed like the latest trend in React, and I want to stay on trend as I make this transition. It was a pretty straightforward process, save for a few hiccups in passing callbacks into deeply nested components, because I've coded several straightforward apps in React with Classes prior to this project. I handled the routing with React Router.

I tried to build reusable components as much as possible throughout the process. I realized after coding this app that there are lots of areas that can be refactored into simpler, more maintainable and readable code, but again, time is of the essence for me as I'm working full time and I'm more focused on building lots of things at the moment to show off my versatility.

I did most of the visual design after I built the initial components that would fetch server data and put it in place. I used sketch to assist with designing layouts and margins, etc. I used Illustrator to create custom SVG components and the logo. I've fielded some initial feedback from users (my friends) and have made minor changes to design and functionality accordingly.

There are still some minor issues that I'd like to work out when I get more time, but I'm fairly proud of my first fullstack, production quality app that I coded from scratch. It gets a solid 95% efficiency rating on desktop (75% on mobile) from Google.

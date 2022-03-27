# Flyer App

- [DEMO LINK](https://obashmakov.github.io/flyer-app/)

This project was created using React(Hooks), Redux, HTML/CSS, BEM. Adapted for desktop and mobile devices. 

## Description

In this app you can display all available flyers from different shops. You can also filter flyers by category or
retailer, or search by title the flyer that you need. Also you can save flyers to your preferred list.

## Installing on local machine

- Fork and clone this repository
- Open your terminal in project folder and run npm install
- Run npm start
- Open in broser localhost:3000

## Installing with Docker

- Fork and clone this repository
- Open your terminal in project folder and create docker image with: docker build -t react-image .
- Run the app on port 3000 with this command: docker run -d -p 3000:3000 --name flyer-app react-image
- Open in browser localhost:3000

# Learnwell
A simple app built as a take-home assessment. Here's the brief...

## Overview

``You are a software engineer, and have been hired by an EdTech company to develop a simple web application that allows users to create, comment on, and watch educational videos. The application should interact with the given backend API and provide a seamless and engaging experience for users. The design and UI are up to you to create.``

API: https://take-home-assessment-423502.uc.r.appspot.com/docs

App Functionality: The website must have the following capabilities:
- Show a list of videos and allow users to select a video from the list.
- Allow the user to create a new video object with a title, description and a video URL.
- A user must be able to comment on a video and view comments from other users.
- Open the videos in full screen with full playback functionality.
- Include options for adjusting playback speed and volume.

## Tech stack
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ReactPlayer](https://www.npmjs.com/package/react-player)
- [Vite](https://vitejs.dev/)

## Design
Uncontrolled to keep it simple, relies on FormData api and built in validations

Routers gives each video a unique page (allows for sharing) with a simple lightweight SAP

use light player to improve tabbablity by removing a bunch of other stuff


## Thumbnails
Limitation of reactplayer is thumbnails, added a check to make sure its from a site that can get the thumbnail provided a fallback if not
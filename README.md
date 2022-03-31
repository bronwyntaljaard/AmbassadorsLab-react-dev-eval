# Bronwyn Taljaard's project

# What I did:

- Make it look really nice:  
I added a gradient to the background and a new font which I incorporated from Google Fonts. I updated headings by making them bigger. I also aded a new UI component, called Card, which I wrapped around each "step" in the user flow. I styled this card in its own css file.

- Let users pick from multiple (custom) stickers:  
I added more sticker options for users to choose from.

- Improve the workflow and ux:  
By wrapping each step of the user flow in its own card, users can easily see where in the flow they are and where to go next. Bigger headings also add to this.

- Organize, document and test the code:  
After seeing that the initial commit of the assesment repo used "conventional commits" I installed a library so I can ensure my commit messages follow this convention.  
I added a new folder for the slap images, for the UI components (card) and components. Due to time limits, I was only able to put step one of the user flow into its own component, which I then added back into the main app.

# What I would do next if I had more time:

- Organize, document and test the code, improve UX:  
I started with creating a component for step 2 of the user flow and incorporated it into the main app. However, once clicking on the slap icons, the app crashed. If I had more time, I would like to investigate further to fix this. Thereafter, I would also put step 3 and 4 of the user flow into their own components. Once each step was in its own componets, I would create a type of caorusel for users to move through each of the steps in the user flow, which would be more interesting and visually apprealling than just scrolling through the steps.

- Show multiple captured images in a gallery:  
I would like to investigate how to save the data of the pictures taken into an array. Right now, the pictures taken are displayed, but once the user clicks somewhere else, they disappear. From here, I would want to display them in a gallery. From here, a user could potentially download the images or share them on social media.

- Organize, document and test the code:  
I would like to investigate how to use unit tests to test each of the components individually to verify behaviour.

***

# ORIGINAL Devtest Readme
# Devtest Readme

Hello candidate, Welcome to our little dev test. The goal of this exercise, is to asses your general skill level, and give us something to talk about at our next appointment.

## What this app should do

SlapSticker is an app that lets users to slap stickers on their face, using their webcam. Functionality wise the app works, but the ui needs some love. We'd like for you to extend this prototype to make it look and feel it bit better.

### These are the basic requirements:

- User can pick a sticker
- User can give the captured image a title
- User can place the sticker over the webcam image
- User can capture the webcam image with sticker

##What we want you to do

Off course we didn't expect you to build a full fledged app in such a short time frame. That's why the basic requirements are already implemented.

However, we would like for you to show off your strengths as a developer by improving the app.

### Some ideas (no need to do all):

- Make it look really nice
- Let users pick from multiple (custom) stickers
- Improve the workflow and ux
- Show multiple captured images in a gallery
- Let users download or share the captured pics
- Add super cool effects to webcam feed
- Organize, document and test the code
- Integrate with zoom, teams, meet...

### quickstart

- You can clone this repo to get started
- run `$ npm install` to install deps
- run `$ npm run start` to start dev environment
- push it to github or gitlab to share it with us.

P.s. We've already added some libraries to make your life easier (Create React App, Jss, React Router), but feel free to add more.

# Original Create React App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

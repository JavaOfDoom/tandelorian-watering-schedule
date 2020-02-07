### Apprenticeship Code Challenge Criteria

## Prompt: We grow in Tandem
At Tandem, we are serious about everyone's growth, including that of our plants. Whether you are
walking around upstairs or downstairs at the office, you will find our green friends happily growing like
the rest of us. There are quite a few Tandelorians who will walk around the office and water the plants
to ensure they are healthy.

However, we have quite a big plant family, and it is hard to manually keep track of when to water any
particular plant. We don't want our plants to ever miss out on a watering!

## Goal
Your goal is to create an application that generates a watering schedule for the next 12 weeks for all of
our plants.

Use creative license in terms of how you want us to see this schedule. At minimum, the plant caretaker
looking at the schedule should be able to easily identify which plants to water on a particular date. It
could be a user interface (UI), command-line tool, written to file, etc.

We would also like to see a README which includes any information about how to run the code, any
known issues or complexity we should look out for, and any additional features you would like to have
added to make your scheduler even more awesome.

## Assumptions
* We do not water our plants on a weekend. Work-life balance is important, and we shouldn't be in
the office on a weekend.
* Our plants are reasonably tolerant and will still be happy if they are watered a day before or after
the day they should be watered.
* Watering an individual plant takes no time at all so you don't have to worry about how many
plants can be watered in a particular day.
* The scheduling should start from next Monday and last for 12 weeks.
* All plants will be watered on the first day of the schedule (next Monday).
* We recognize that when to water a plant is heavily dependent on other factors such as soil,
weather, humidity, etc. You can assume that we know exactly when to water these specific plants.
* You have been provided a JSON file which contains data for our plants.

## Acceptance Criteria
* The user can view which plant(s) to water on which date(s).
* The schedule covers the next 12 weeks starting next Monday.
* No plants are watered on Saturdays or Sundays.
* Each plant is watered on its desired schedule or as close as possible, taking into account weekends.

## Install Instructions
* To see this project download or clone it to your local machine.
* Once you have done that, `cd` into the `tandelorian-watering-schedule` folder and run `npm install`
* All the dependencies should install. Once the install is finished run `npm start`.
* Go to [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features I was not able to include
1) I think it would be a great feature to allow whomever watered the plant to put their name down and make the plant off as watered so that as other Tandelorians came along the plants would now get overwatered. I don't have enough experience yet with creating a backend to contain and persist that information.

2) I was able to highlight the current day, but idealy it would be great if it loaded directly to the current date so that the user would not have to scroll down to see the current date. Along with that, all past dates would be stored and you could access them, but only if the user wanted to.

3) I also wanted to add error handling and unit testing, but in my limited time this last week i was not able to. I understand the benefit of both, but do not have the familiarity with them to easily implement them yet. This is something that I want to learn more about.

4) Another feature that would be fun would to allow for adding a new plant and its picture to the list.

5) I was also considering how to add holidays into the schedule to adjust watering days like I did with weekend days, but time did not permit it.

## Known Issues
The only issue that really stood out to me was the centering of the individual plant cards while adjusting the browswer. It looks very nice on a full browser window and on mobile, but while adjusting the plant cards stay to the left and there is a gap on the right. When attempting to center the cards if a row was uneven then they would be off-center of the centered cards.

## Complexities and Challenges
This was my first time building a react app from scratch. I haven been working with react a lot The Difference Engine, but it's been mostly front-end styling and working with all ready existing code. It was a bit of a challenge as I worked on building out the structure and implementing the algorithms. I got stuck the longest while trying to construct the array that had each plant and the days it was supposed to be watered. And then when trying to flip it and create another array of each weekday and pass the plants that would only get watered on that day.

Another challenge I came across was connecting the specific images with specific plants. However after creating the first two big arrays of plant watering days the solution came to me much faster.

It was such an exhilirating challenge! Despite all I've learned the last few years, I keep finding new and fun things to learn about code and how to implement them!

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

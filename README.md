Important Note About Project Generation
In the upcoming lecture, we will be using the expo-cli to generate our project. To ensure that we don't accidentally mix Yarn and npm in our project, add the --npm flag:

npx expo-cli init food --npm



Yelp API Workarounds
In the upcoming lecture, we will be signing up for a Yelp developer account. Depending on your location, some students may be blocked from creating an account. There are a few things you can try.

Students noted a workaround in this thread using their phone which will show a captcha:

https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707036#questions/8334522

Using a VPN for registration and making API calls should also work. Students mentioned they were able to successfully sign up for an API key using the Opera Browser's built-in VPN feature. Other students mentioned that they were able to use Tunnelbear's free tier.

Lastly, you can try just using my key:

Ox1dPyMFowdC1KnQxkg5khZeHnh2CEFUatNpYxFFTcppxtOeJhcBe3QzvCUyl3vDsE_ToYeaIJgnv142pnstFlAeSs6CQ6qIv7vS9tmzPzJhNhgnSFIlgE0AdCmzYnYx

Note - If some students try to use this in production or abuse the key in some way, you will start getting 429 errors (too many requests). There is a strict 5000 call per day quota - please only use this key for this course and to complete this project.


React Navigation Fix
At the end of the next lecture, we will be installing the React Navigation library to use in our project. Please read the following important information and updated installation instructions:

Important Message about React Navigation v5
This project will be using the v4 version of React Navigation and not the v5 version. To date, this code still works as expected. The v4 version is still important to know and understand as it is used widely in existing codebases in many organizations. I highly encourage you to continue on with the course as it is so that you fully understand how React Navigation works. Once you have finished the course, you can use this as a self-study opportunity to attempt a migration of your finished working projects to v5. The docs provide some great resources on this: https://reactnavigation.org/docs/upgrading-from-4.x/.

1. React Navigation v4 Installation
note: You cannot mix Yarn and npm in the same project as it will break your dependencies. You must consistently use the same package manager. If you have yarn installed on your computer it will be used by default to generate the project. In this case, you must use Yarn to install your dependencies.

1. Install React Navigation

npm install react-navigation --legacy-peer-deps

or

yarn add react-navigation

2. Install Dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

4. Start the app and clear the cache with expo r -c

Errors?
If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)

Then, run npm install --legacy-peer-deps and then npm start.

React Navigation v4 Docs:
https://reactnavigation.org/docs/4.x/getting-started

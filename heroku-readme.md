## Create and Deploy a React App in Two Minutes
You can get started building React apps for free on Heroku.

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
Try it yourself using the buildpack docs.

## Deploying to Heroku

$ heroku create YOUR-APP-NAME

Now push it up to Heroku with the following command:

$ git push heroku master

It should take a few moments to run, and when it finishes it should say "Launching..." along with a URL.

To easily see our heroku url we can type:

$ heroku apps:info

Copy this URL and paste it into your browser.

When you go to this URL, it will initially tell you, 'The page you were looking for doesn't exist.' This is because we haven't built our application yet. That's the next step.

One thing that's important to note is that our web application has two environments. One is "localhost," or your very own machine/computer that we will test our code on locally. (Another name for this environment is your development environment). Then, we have our application that is live on the internet on Heroku. (Another name for this is production).

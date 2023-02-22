# pollingApi
This is a node js api running web app which is used for polls.

## IMPORTANT THING TO NOTE

    This api url is /api/v1/action. It means that my API url is something like this 

    http://localhost:8001/api/v1/questions/create 

    or 
    http://localhost:8001/api/v1/questions/:id/delete 

    so if testing in postman make sure you use the correct url mentioned here.

# How to set up the app to run

1. Just clone the git repo.

2. After cloning the repo npm install or use yarn to install all dependencies 

3. make a .env file and there add your url with port number in it. like this 
    url=http://localhost:8001

4. run npm start 

5. Now the app is running open your postman and test the api there 




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task Master
This is an application that displays all available tasks. The user can click on the arrow to view more information about a specific task. The details include the description and the assignee. The status is also displayed, in which, the user can click to update from available -> assigned -> accepted -> finished. The user can also upload an image to the corresponding task using the upload button.

### Interface
![alt app_photo](photo.png)

### Links
* [Front-end](https://master.d1ouueqql1w4yj.amplifyapp.com/)
* [Back-end](http://taskmasterapp.us-east-2.elasticbeanstalk.com/tasks)
* [Source code for backend](https://github.com/joriefernandez/taskmaster)

### S3 Deployment issue
* Need to uncheck block public access to view the image url. If not, it would cause Access Denied error
* Lambda function script should use Node.js 8 version to avoid gm module error
* Public policy access for S3 bucket causes security issues with Amazon.

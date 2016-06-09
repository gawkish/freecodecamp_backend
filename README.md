# freecodecamp_backend
FreeCodeCamp backend challenges

Deploying on heroku (using Heroku CLI):

timestamp-microservice:
	cd timestamp-microservice; heroku git:remote -a fcc-b-timestamp-microservice; cd ..
	git subtree push --prefix timestamp-microservice heroku master

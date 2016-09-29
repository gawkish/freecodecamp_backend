# freecodecamp_backend
FreeCodeCamp backend challenges

Deploying on heroku (using Heroku CLI):

timestamp-microservice:
	cd timestamp-microservice
	heroku git:remote -a fcc-b-timestamp-microservice
	cd ..
	git subtree push --prefix timestamp-microservice heroku master

request_header_parser_microservice:
	cd request_header_parser_microservice
	heroku git:remote -a fcc-b-request-header-parser
	cd ..
	git subtree push --prefix request_header_parser_microservice heroku master

URL-shortener-microservice:
	cd URL-shortener-microservice
	heroku git:remote -a fcc-b-url-shortener
	cd ..
	git subtree push --prefix URL-shortener-microservice heroku master
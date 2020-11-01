## Running the id4namespace locally

1. Install NodeJS and NPM from https://nodejs.org.

2. Install all required npm packages by running `npm install` from the command line in the project root folder (where the package.json is located).

3. Start the application by running `npm start` from the command line in the project root folder, this will build the application and automatically launch it in the browser on the URL http://localhost:9000.


## Build and run a docker image

1. Install Docker Engine from https://docs.docker.com/engine/install/

2. Build an run the docker image `docker build -t id4namespace-app . && docker run -it -p 80:80 id4namespace-app`

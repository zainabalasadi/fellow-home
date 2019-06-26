# Project Home

By William Chan, Anna Ung, Jason Love, Zainab Alasadi

# Setup

Install [docker](https://docs.docker.com/v17.12/install/#supported-platforms) and [docker-compose](https://docs.docker.com/compose/) and make a new virtual environment.

```bash
$ cd backend
$ virtualenv --python=python3 venv 
$ . venv/bin/activate
$ pip3 install -r requirements.txt 
```
Install [npm](https://www.npmjs.com/get-npm) and the node dependencies.
```bash
$ cd ../frontend
$ npm install
```
Build and run the docker containers
```bash
$ cd .. # cd to root
$ docker-compose build
$ docker-compose up -d # -d flag runs the container in the  background
```
Alternatively run this command to build and run at once.
```bash
$ docker-compose up -d --build 
```
Shutdown the container
```bash
$ docker-compose down
```
# Testing
Test the backend
```bash
cd backend
python3 -m pytest
```
***NOTE: YOU DO NOT NEED DOCKER FOR THE UNIT TESTS***

# Common commands
Interact with the flask shell
```bash
$ docker-compose exec fellow-backend flask shell
```
Interact with the postgres shell
```
$ docker-compose exec fellow-db psql -U postgres
postgresql=# \c fellow_dev
```
In general, to access the shell with docker use
```bash
docker-compose exec <service> <commands...>
```
# Troubleshooting
If you get an error which says something along the lines of
```
If you faced an issue like “Couldn’t connect to Docker daemon at http+docker://localunixsocket — is it running?
```
either run `docker-compose`with `sudo` or follow [this guide](https://docs.docker.com/install/linux/linux-postinstall/).


please install docker and docker-compose from:

Linux:
https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository
https://docs.docker.com/compose/install/

Windows:
https://docs.docker.com/v17.12/docker-for-windows/install/

Mac:
https://docs.docker.com/v17.12/docker-for-mac/install/#download-docker-for-mac

please also install node and npm from:
https://nodejs.org/en/download/

After running `make`, run

```
docker-compose exec fellow-backend python manage.py recreate_db
docker-compose exec fellow-backend python manage.py populate_db
```

Access the site at: http://localhost:3000

PLEASE REFER TO THE USER MANUAL SECTION IN THE REPORT FOR MORE INFO.

# tests/test_auth.py

import json


def test_unauthorised_path(test_client, init_database):
    response = test_client.get('/')
    assert response.status_code == 401


def test_login(test_client, init_database):
    response = test_client.post('/login',
                                data=json.dumps({'email': 'wow@gmail.com',
                                                 'password': 'wow'}),
                                headers={'content-type': 'application/json'})
    assert response.status_code == 200

    data = response.get_json()
    assert data['access_token']


def test_authorised_login(test_client, init_database):
    response = test_client.post('/login',
                                data=json.dumps({'email': 'wow@gmail.com',
                                                 'password': 'wow'}),
                                headers={'content-type': 'application/json'})
    assert response.status_code == 200

    data = response.get_json()
    assert data['access_token']

    response = test_client.get('/', headers={'Authorization': f'Bearer {data["access_token"]}'})
    assert response.status_code == 200

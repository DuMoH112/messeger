# web_server docker-django-react


#### Чтобы создать проект необходимо выполнить комманду:
```sh 
$ ./Create_project project_name #(название проекта пишется маленькими буквами через нижнее подчёркивание)
```


#### Чтобы запустить уже созданный проект необходимо выполнить комманду:
`$ sudo docker-compose up`


#### Чтобы остановить проект необходимо выполнить комманды:
```sh
$ sudo docker stop $(sudo docker ps -aq)
$ sudo docker rm $(sudo docker ps -aq)
```


#### settings.py для подключения БД postgresql
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
	    'NAME': 'userdb',
	    'USER' : 'user',
	    'PASSWORD' : 'changeme',
	    'HOST' : '127.0.0.1',
	    'PORT' : '5432',
    }
}
```# messager

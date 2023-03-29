# О ресурсе

![](docs/assets/hero-bg.jpg)

Репозиторий проекта [propwashservice.ru](http://propwashservice.ru)

Данные материалы исходят из личного опыта, наблюдений в FPV сообществе. Никакой рекламы, спонсорства, все по личной инициативе для продвижения хобби в массы. Приятного чтения!

Проект базируется на генераторе [VitePress](https://vitepress.vuejs.org) и [Github Pages](https://pages.github.com/)

Содержимое страниц лежит в папке `docs`. Pull request'ы по улучшению ресурса приветствуются.

## Локальный запуск и отладка

```shell
yarn init
yarn docs:dev
```

### Запуск через Docker

#### Запуск через `http`
1. Собрать образ и запустить контейнер:
    ```bash
    docker build --tag test-drone-docs --file deploy/Dockerfile --build-arg HTTP_OR_HTTPS=http .
    docker run --rm --detach --name drone-docs --publish 80:80 test-drone-docs
    ```
1. [Зайти на localhost](http://localhost:80)
1. Остановка и удаление контейнера и образа
    ```bash
    docker stop drone-docs
    docker rm test-drone-docs
    ```
#### Запуск через `https`
1. Собрать образ и запустить контейнер:
    ```bash
    docker build --tag test-drone-docs --file deploy/Dockerfile --build-arg HTTP_OR_HTTPS=https .
    docker run --rm --detach --name drone-docs --publish 80:80 --publish 443:443 test-drone-docs
    ```
1. [Зайти на localhost](https://localhost:443)
    > Обратите внимание, что сертификат самоподписан! Это значит, что ваш браузер будет ругаться и не даст вам перейти на данную страницу.  
    Возможные варианты решения: проигнорировать предупреждение; добавить сертификат к доверенным
1. Остановка и удаление контейнера и образа
    ```bash
    docker stop drone-docs
    docker rm test-drone-docs
    ```

### Запуск через Docker compose
#### Запуск через `http`
1. Собрать образ и запустить контейнер:
    ```bash
    docker compose --file deploy/compose.local.yaml up --build
    ```
1. [Зайти на localhost](http://localhost:80)
1. Остановка контейнера
    ```bash
    docker compose --file deploy/compose.local.yaml stop
    ```
1. Удаление контейнера и образа
    ```bash
    docker compose --file deploy/compose.local.yaml down --volumes --rmi

    ```
#### Запуск через `https`
1. Установить переменную окружения `DRONE_DOCS_HTTP_OR_HTTPS`:
    - На `Windows` в `PowerShell`
        ```ps1
        $env:DRONE_DOCS_HTTP_OR_HTTPS="https"
        ```
    - На `Unix`
        ```bash
        export DRONE_DOCS_HTTP_OR_HTTPS=https
        ```
1. Собрать образ и запустить контейнер:
    ```bash
    docker compose --file deploy/compose.local.yaml up --build
    ```
1. [Зайти на localhost](https://localhost:443)
    > Обратите внимание, что сертификат самоподписан! Это значит, что ваш браузер будет ругаться и не даст вам перейти на данную страницу.  
    Возможные варианты решения: проигнорировать предупреждение; добавить сертификат к доверенным
1. Остановка контейнера
    ```bash
    docker compose --file deploy/compose.local.yaml stop
    ```
1. Удаление контейнера
    ```bash
    docker compose --file deploy/compose.local.yaml down --volumes --rmi
    ```
1. Удалить переменную окружения `DRONE_DOCS_HTTP_OR_HTTPS`:
    - На `Windows` в `PowerShell`
        ```ps1
        $env:DRONE_DOCS_HTTP_OR_HTTPS=""
        ```
    - На `Unix`
        ```bash
        unset DRONE_DOCS_HTTP_OR_HTTPS
        ```
## Авторы

- Валентина, Михаил - команда [PropWash Service](https://github.com/ikherty)
- Андрей Щ. - [EIIIE](https://github.com/EIIIE)
- Дмитрий В. - [dimazollo](https://github.com/dimazollo)

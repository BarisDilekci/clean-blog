# clean-blog

## Steps to Run the Project

1. Clone Github Repo:

 ```bash
git clone https://github.com/BarisDilekci/clean-blog.git
cd clean-blog
```

2. In the project's root directory, initialize a `package.json` file by running the following command:

    ```bash
    npm init
    ```

3. If necessary, update dependencies in the project by running the following command:

    ```bash
    npm update -y
    docker build -t pcat .
    docker compose up
    ```

5. Check MongoDB:

    ```bash
    docker ps
    docker exec -it <mongo_container_id> mongo

    ```



6. Open your web browser and go to [localhost:3000](http://localhost:3000).

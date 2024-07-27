# Task Manager

### Description

This is a task management application (Task Management) built with NestJS, MikroORM and PostgreSQL. The application allows users to register, log in and manage their work.

### How to run this app

#### Requirements: Docker have been installed on your system

#### Run: docker compose up -d

### Server configuration

Server is running on PORT `3000` as default but you can change this configuration at .env

### Questions:

1. Describe how you will scale and optimize the performance of your application in the future?

- following current structure, if there is a new module need to implement. Just create a new module at `modules`, dto will be written in `dtos`, entity will be written in `entities`, create a new table or migration will be written in `migrations`
- optimize the performance:
  - With DB: check database queries, indexing and migration, pagination, pool connections.
  - With App: Cache request, Code optimize, Load Balancing

2. How do you make sure your application is user safe and information secure?

- Strong password, Password encrypted, stateless authentication (jwt)
- Input validation, environment variables, .env
- Token has expired time

3. Explain how you will deploy your application to a server?

- Use cloud, providers ex: aws, digital ocean, Azure
- On cloud, install node, postgres or just docker
- Can map reverse proxy if needed

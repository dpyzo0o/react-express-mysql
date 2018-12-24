# react-express-mysql

A scaffold with basic user authentication.

## Tech Stack

- [react](https://github.com/expressjs/express)
- [react-router](https://github.com/ReactTraining/react-router)
- [create-react-app](https://github.com/facebook/create-react-app)
- [express](https://github.com/expressjs/express)
- [mysql](https://github.com/mysqljs/mysql)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## How to

1. `npm install` then `cd client && yarn install`, this will install the dependencies for server and client side.

2. You have to modify the mysql configuration, either by creating .env file or modify `db/index.js` directly. In this project, I just created a table with 5 columns(id, email, password, permission, gender). Currently

3. `npm start` in the root folder, this will run both server and client scripts.

4. Head to localhost:3000, which is the default port by [create-react-app](https://github.com/facebook/create-react-app)

## Notes

I used [ant-design](https://github.com/ant-design/ant-design) as UI framework. If you don't want to import all styles of antd, you have to do [some extra work](https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides). [react-app-reqired](https://github.com/timarney/react-app-rewired) was and is still the recommended way by antd to achieve this. However, react-app-wired doesn't support create-react-app 2.0 anymore, see [2.0 Discussion](https://github.com/timarney/react-app-rewired/issues/162). I go for [craco](https://github.com/sharegate/craco), which is pretty easy to use.

## TODO

- [ ] add register page

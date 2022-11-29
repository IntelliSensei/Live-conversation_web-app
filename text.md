# Feature User Authentication

## Epic

We want to give the users the ability to register themselves, sign in and use their settings when they do communicate using live-conversation

## User stories

### As a user I want to be able to login
- [x] Create webcomponent that allows user to log in
- [x] Create authentication service
- [x] Create endpoint for login
- [x] Store user token on client side

### As a user I want to be able to sign up
- [x] Create webcomponent that allows user to sign up
- [x] Create endpoint that lets an anonymous user sign up 

### As a user I want to be able to configure my preferences
- [ ] Create webcomponent to reconfigure user (alias, color, password)
- [ ] Create endpoint to edit user

### As a user I want to identify myself while communicating
- [x] Add a new conversation type that keeps a token 

## Authentication Service

A service that allows users to authenticate themselves. 

A user is a persistent entity with a secret value and preferences of the user in question.

When a user proves their vailidity via creating the secret the user recieves a signed document that allows other applications to trust the user.

### Tasks
- [x] Create apollo-server application
- [x] Create mutations to add and update user
- [x] Create new query that logs in user
- [x] Create MongoDB that stores the user
- [x] Create schemas for the user 
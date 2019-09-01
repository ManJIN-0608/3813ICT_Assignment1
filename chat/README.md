# ChatApp
This project was implemented with Angular CLI version 8.2.2.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Augular architecture
**login component**:<br/>
The login component uses **checkUser** route from node server to check whether user exists.<br/>
There are a text box for user to enter username and a button to login. 

**home component**:<br/>
The home component is my main page. It uses **all routes** from node server and uses *ngIf to differentiate roles.<br/>

**superadmin permissions**:<br/>
* create user
* delete user
* create group
* delete group
* add user to group
* delete user from group
* create channel
* delete channel
* add user to channel
* delete user from channel

**groupadmin permissions**:<br/>
* create user
* create group
* delete group
* add user to group
* delete user from group
* create channel
* delete channel
* add user to channel
* delete user from channel

**groupassis permissions**:<br/>
* create channel
* delete channel
* add user to channel
* delete user from channel
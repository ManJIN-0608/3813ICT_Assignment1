# ChatApp
This project was implemented with Angular CLI version 8.2.2.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Augular architecture
**login component**
The login component uses **checkUser** route from node server to check whether user exists.

**home component**
The home component is my main page. It uses all routes from node server and uses *ngIf to differentiate roles.
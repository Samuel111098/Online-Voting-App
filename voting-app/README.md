# VotingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

********************************************************

This is the assignment I was handed for the Second round of the interview process for Platform Commons Foundation. 
The website enables either user or admin to login to their dashboard or wall which hold the posts created by the admin. 
The user can vote on his favourite posts and also view the number of responses for each post. 

Tech stack : {
    Angular 9,
    TypeScript,
    bootstrap,
}

Npm modules : {
    json-serverModule(to simulate a fake server for API calls),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
}

Service : {
    Common Service(to fetch and post data through api)
}

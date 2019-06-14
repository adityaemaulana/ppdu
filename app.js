import AppConfig from './app.routes.js';
import LandingController from './modules/landing_page/landing_page.controller.js';

var app = angular.module('app', ["ngRoute"]);

app.config(AppConfig);

app.controller('landingController', LandingController);
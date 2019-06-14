function AppConfig($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'modules/landing_page/landing_page.template.html',
    controller : 'landingController'
  })
  .otherwise({
    redirectTo: '/'
  });
}

export default AppConfig;
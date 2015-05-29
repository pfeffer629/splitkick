angular.module('starter', [
  'ionic',
  'ngResource',
  'ng-token-auth',
  'angular.filter',
  'starter.controllers',
  'starter.services',
])

.run(function($ionicPlatform, $rootScope, $location) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  })
  $rootScope.$on('auth:login-success', function(){
    $location.path('/tab/dash')
  });
})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $authProvider.configure({
    apiUrl: 'https://lit-lake-5524.herokuapp.com/'
  });


  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    resolve: {
      auth: function($auth) {
        return $auth.validateUser();
      }
    }
  })

  .state('tab.routines', {
    url: '/routines',
    views: {
      'tab-routines': {
        templateUrl: 'templates/tab-routines.html',
        controller: 'RoutinesCtrl'
      }
    }
  })

  .state('tab.routine-detail', {
    url: '/routines/:id',
    views: {
      'tab-routines': {
        templateUrl: 'templates/routine-detail.html',
        controller: 'RoutineDetailCtrl'
      }
    }
  })

  .state('tab.new-routine', {
    url: '/routines/new',
    views: {
      'tab-routines': {
        templateUrl: 'templates/new-routine.html',
        controller: 'NewRoutineCtrl'
      }
    }
  })

  .state('tab.new-exercise', {
    url: '/routines/:id/exercise',
    views: {
      'tab-routines': {
        templateUrl: 'templates/new-exercise.html',
        controller: 'NewExerciseCtrl'
      }
    }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

});

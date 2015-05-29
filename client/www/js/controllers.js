angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $auth, $rootScope) {
  $scope.handleBtnClick = function(){
    $auth.authenticate('facebook')
    $auth.submitLogin($scope.loginForm)
  };
})

.controller('RegisterCtrl', function($scope, $auth){
  $scope.handleRegBtnClick = function(){
    $auth.submitRegistration($scope.registrationForm)
    .error(function(resp){
      console.log(resp);
    })
  };
})

.controller('DashCtrl', function($scope, $auth) { 
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('RoutinesCtrl', function($scope, $state, Routines){
  $scope.routines = Routines.query()
  $scope.newRoutine = function(){
    $state.go('tab.new-routine')
  }
})

.controller('NewRoutineCtrl', function($scope, $state, Routines){
  $scope.createRoutine = function(name){
    Routines.save({ name: name }, function(response){
      $state.go('tab.routine-detail', {id: response.id})
    })
  }
})

.controller('NewExerciseCtrl', function($scope, $state, $stateParams, ExerciseReferences, Exercises){
  $scope.groupReference = ExerciseReferences.group()
  $scope.muscleReference = ExerciseReferences.muscle()
  $scope.exerciseReference = ExerciseReferences.exercise()

  $scope.addExercise = function(exercise, reps, weight){
    if(exercise === undefined) { 
      alert("you must select an exercise");
    }
    else {
      Exercises.save({ 
        exercise: {
          routine_id: $stateParams.id,
          group: exercise.group,
          muscle: exercise.muscle,
          exercise: exercise.exercise,
          reps: reps,
          weight: weight 
        }
      }, function(response){
        Exercises.get({id: response.id}, function(){
          $state.go('tab.routine-detail', {id: $stateParams.id}, {reload: true})
        });
      });
    };

    // CURRENTLY TRYING TO GET PAGE TO RELOAD AFTER 
    // SAVE IS FINISHED
  }
})

.controller('RoutineDetailCtrl', function($scope, $state, $stateParams, Routines){
  $scope.routine = Routines.get({id:$stateParams.id})
  $scope.newExercise = function(){
    $state.go('tab.new-exercise', {id: $stateParams.id})
  }
});
require 'csv'

# Exercise Seed

exercises = CSV.read('exercise_list.csv')

exercises.each do |exercise|
  ExerciseReference.create(group: exercise[0], muscle: exercise[1], exercise: exercise[2])
end
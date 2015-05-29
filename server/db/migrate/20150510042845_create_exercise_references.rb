class CreateExerciseReferences < ActiveRecord::Migration
  def change
    create_table :exercise_references do |t|
      t.string :group
      t.string :muscle
      t.string :exercise
    end
  end
end

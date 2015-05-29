class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.belongs_to :routine, index: true, foreign_key: true
      t.string :group
      t.string :muscle
      t.string :exercise
      t.integer :reps
      t.integer :weight
    end
  end
end

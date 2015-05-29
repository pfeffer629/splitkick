class ExercisesController < ApplicationController
  
  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render json: @exercise
    end
  end

  def show
    @exercise = Exercise.find(params[:id])
    render json: @exercise
  end

  private

  def exercise_params
    params.require(:exercise).permit(:routine_id, :group, :muscle, :exercise, :reps, :weight)
  end
end

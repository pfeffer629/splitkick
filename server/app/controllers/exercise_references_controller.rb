class ExerciseReferencesController < ApplicationController
  def index
    render json: ExerciseReference.pluck(:group, :muscle).uniq
  end

  def default_serializer_options
    { root: false }
  end
end
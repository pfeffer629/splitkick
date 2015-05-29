class RoutinesController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  # GET /routines
  # GET /routines.json
  def index
    @user = current_user
    @routines = @user.routines

    render json: @routines
  end

  # GET /routines/1
  # GET /routines/1.json
  def show
    @routine = Routine.find(params[:id])
    render json: @routine
  end

  # GET /routines/new
  def new
    @routine = Routine.new
  end

  # GET /routines/1/edit
  def edit
  end

  # POST /routines
  # POST /routines.json
  def create
    @user = current_user
    @routine = Routine.new(routine_params)
    if @routine.save
      @user.routines << @routine
      render json: @routine      
    else
      render json: @routine.errors
    end
  end

  # PATCH/PUT /routines/1
  # PATCH/PUT /routines/1.json
  def update
    respond_to do |format|
      if @routine.update(routine_params)
        format.html { redirect_to @routine, notice: 'Routine was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @routine.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /routines/1
  # DELETE /routines/1.json
  def destroy
    @routine.destroy
    respond_to do |format|
      format.html { redirect_to routines_url }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_routine
    @routine = Routine.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def routine_params
    params.require(:routine).permit(:name, :belongs_to)
  end

  def default_serializer_options
    { root: false }
  end
end

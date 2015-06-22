class MedicationsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
      @user = current_user
      @ums = UserMedication.includes(:medication).where(user: @user)
      respond_to do |format|
          format.html { render :index }
          format.json { render json: @ums, methods: [:medication, :user]}
      end
  end

  def create
    @medication = Medication.create(medication_params)
    @user_medication = UserMedication.create(user: current_user, medication: @medication)
    redirect_to profile_path
  end
  def update
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @ums, methods: :medication}
    end
  end

  def medication_params
    params.require(:medication).permit(:name, :dosage, :alias)
  end

end

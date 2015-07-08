class MedicationsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
      user = current_user
      user.add_sample if !user.user_medications
      @ums = UserMedication.includes(:medication).where(user: user)
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @ums, methods: [:medication, :user]}
      end
  end

  def create
    @medication = Medication.create(medication_params)
    @user_medication = UserMedication.create(user_med_params)
    if @user_medication.day == ""
       @user_medication.update_attributes(day: nil)
    end
    @ums = UserMedication.includes(:medication).where(user: current_user)
       respond_to do |format|
        format.html { render :index }
        format.json { render json: @ums, methods: [:medication, :user]}
      end
  end

  def update
    UserMedication.update_attributes(params)
    @ums = UserMedication.includes(:medication).where(user: @user)
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @ums, methods: :medication}
    end
  end

  def medication_params
    params.require(:medication).permit(:name, :dosage)
  end

  def user_med_params
    params.require(:user_medication).permit(:alias, :color, :day).merge(user: current_user, medication: @medication)
  end

end

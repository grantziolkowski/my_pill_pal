class MedicationsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  before_action :require_signin

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
    @medication = Medication.create(name: medication_params[:name], dosage: medication_params[:dosage])
    @user_medication = UserMedication.create(user_med_params)
    if @user_medication.day == ""
       @user_medication.update_attributes(day: nil)
    end
    @ums = UserMedication.includes(:medication).where(user: current_user).last
    render json: @ums, methods: [:medication, :user]
  end

  def update
    UserMedication.find(params[:id]).update(day: params[:day])
    @ums = UserMedication.includes(:medication).where(user: @user)
    render json: @ums, methods: :medication
  end

  def medication_params
    params.require(:medication).permit(:name, :dosage)
  end

  def user_med_params
    params.permit(:alias, :color, :day).merge(user: current_user, medication: @medication)
  end

end

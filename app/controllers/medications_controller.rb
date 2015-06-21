class MedicationsController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
      @user = current_user
      @ums = UserMedication.includes(:medication).where(user: @user)
      p @ums
      respond_to do |format|
          format.html { render :index }
          format.json { render json: @ums, methods: [:medication, :user]}
      end
  end

  def update
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @ums, methods: :medication}
    end
end
end

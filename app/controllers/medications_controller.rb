class MedicationsController < ApplicationController
  def index
    if current_user
      @user = current_user
      ums = UserMedication.includes(:medication).where(user: @user)
      respond_to do |format|
          format.html { render :index }
          format.json { render json: ums, methods: :medication}
      end
    else
      redirect_to root_path
    end
  end

  def update
    p params
  end
end

class UsersController < ApplicationController
  def new
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to root_path
  end

  def show
    if current_user
      @user = current_user
      ums = UserMedication.includes(:medication).where(user: @user)
      respond_to do |format|
          format.html { render :show }
          format.json { render json: ums, methods: :medication}
      end
    else
      redirect_to root_path
    end
    # api_call = PillFillApiCall.new
    # @response = api_call.request
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

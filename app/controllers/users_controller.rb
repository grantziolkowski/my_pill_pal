class UsersController < ApplicationController
  def new
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to root_path
  end

  def show
    @user = current_user
    @medications = UserMedication.where(user: @user)
    # api_call = PillFillApiCall.new
    # @response = api_call.request
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

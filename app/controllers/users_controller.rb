class UsersController < ApplicationController
  skip_before_action :require_signin, only: [:create]

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to root_path
  end

  def show
    # api_call = PillFillApiCall.new
    # @response = api_call.request
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

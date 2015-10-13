class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:create]
  skip_before_action :require_signin, only: [:new, :create]

  def create
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to profile_path
    else
      flash[:notice] = "Bad Username or Password"
      redirect_to root_path
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end

class SessionsController < ApplicationController
  skip_before_action :require_signin, only: [:new, :create]
  def new
  end

  def create
    p User.first
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
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

class SessionsController < ApplicationController
  skip_before_action :require_signin, only: [:new, :create]
  def new
  end

  def create
    p "CREEREATTTING"
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      p "Current"
      p current_user
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

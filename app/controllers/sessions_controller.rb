class SessionsController < ApplicationController
  skip_before_action :require_signin, only: [:new, :create]
  def new
  end

  def create
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to user_medications_path(user)
    else
      flash[:notice] = "Bad Username or Password"
      redirect_to user_medications_path(current_user)
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end

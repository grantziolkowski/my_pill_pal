class SessionsController < ApplicationController
  def new
  end

  def create
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
  end
end

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  before_action :require_signin

  def current_user
    User.find_by(id: session[:user_id])
  end

  def show
  end

  def require_signin
    unless current_user
      flash[:error] = "You must be logged in to access this section"
      redirect_to signin_path # halts request cycle
    end
  end
end

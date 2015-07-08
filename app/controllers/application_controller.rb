class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  before_action :require_signin, except: [:index]
  def index
    current_user ? @id = current_user.id : @id = nil
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @id}
      end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def require_signin
    unless current_user
      flash[:error] = "You must be logged in to access this section"
      redirect_to root_path # halts request cycle
    end
  end
end

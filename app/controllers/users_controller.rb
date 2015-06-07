class UsersController < ApplicationController
  def show
    api_call = PillFillApiCall.new
    @response = api_call.request
  end
end

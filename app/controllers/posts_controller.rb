class PostsController < ApplicationController
  def index
    @posts = {title: "fun", content: "you got it"}
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts, methods: [:comments, :tags, :user]}
      end
  end
end

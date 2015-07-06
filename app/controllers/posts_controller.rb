class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts, methods: [:comments, :tags, :user]}
      end
  end
end

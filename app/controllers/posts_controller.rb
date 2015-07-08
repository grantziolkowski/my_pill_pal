class PostsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @posts = Post.all
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts, methods: [:comments, :tags, :user]}
      end
  end

  def create
    post = Post.create(title: post_params[:title], content: post_params[:content], author: current_user)
    medication = Medication.find_by(name: params[:post][:medications_string])
    post.medications << medication if medication
    @posts = Post.all
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts, methods: [:comments, :medications, :author]}
      end
  end

  def post_params
    params.require(:post).permit(:title, :content, :medications_string)
  end
end

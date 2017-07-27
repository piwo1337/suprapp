class StaticPagesController < ApplicationController
  def index
    @posts = Post.order('posts.created_at DESC').paginate(:page => params[:page], :per_page => 4)
  end
end

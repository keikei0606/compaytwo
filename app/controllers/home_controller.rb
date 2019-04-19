class HomeController < ApplicationController

  def index
    @posts = Post.all
    @title = "test"
    render json:@posts
  end
end

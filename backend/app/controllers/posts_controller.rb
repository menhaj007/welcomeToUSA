class PostsController < ApplicationController
    before_action :check_configuration

    def check_configuration
        render 'configuration_missing' if Cloudinary.config.api_key.blank?
    end

    def create
        new_post = Post.create(post_params)
        # byebug
        # public_id = post_params[:image]["public_id"]
        if new_post.valid?
            render json: new_post, status: :created
        else
            render json: {errors: new_post.errors.full_messages}, status: 422
        end
    end

    # def index
    #     render json: Post.all
    # end
    def index
        post = Post.all.with_attached_image
        # byebug
    
        render json: post.map { |p| p.as_json.merge({ image: url_for(p.image) }) }
    end

    def show
        post = Post.find_by(id: params[:id])
        if post
            render json: post, include: [:comments]
        else
            render json: {error: "Not found"}, status: :not_found
        end
        
    end

    private
    def post_params
        # params.require(:post).permit(:title, :user_id, :image)
        params.permit(:title, :user_id, :image, :image_url, :public_id)
    end
end

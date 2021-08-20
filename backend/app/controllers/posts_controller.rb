class PostsController < ApplicationController
    before_action :check_configuration

    def check_configuration
        render 'configuration_missing' if Cloudinary.config.api_key.blank?
    end

    def create
        new_post = Post.create(post_params)
        new_post.public_id = new_post.image.key
        # byebug
        if new_post.valid?
            render json: new_post, status: :created
        else
            render json: {errors: new_post.errors.full_messages}, status: 422
        end
    end

    def create_without_attachment
        new_post = Post.create(post_without_attachment_params)
        
        # byebug
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

    def destroy
        # post = Post.find_by(id: params[:id])
        post = Post.find(params[:id])
        public_id = post.image.key
        post.destroy
        render json: Cloudinary::Uploader.destroy(public_id)
    end


    private
    def post_params
        # params.require(:post).permit(:title, :user_id, :image)
        params.permit(:title, :user_id, :image, :image_url, :public_id)
    end
    def post_without_attachment_params
        params.permit(:title, :user_id)
    end
end

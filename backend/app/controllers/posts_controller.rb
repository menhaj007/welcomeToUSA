class PostsController < ApplicationController
    # before_action :check_configuration

    # def check_configuration
    #     render 'configuration_missing' if Cloudinary.config.api_key.blank?
    # end

    def create
        new_post = Post.create(post_params)
        # byebug
        if new_post.valid?
            render json: new_post, status: :created
        else
            render json: {errors: new_post.errors.full_messages}, status: 422
        end
    end

    # def update
    #     post = Post.find_by(id: params[:id])
    #     post.update(post_params)
    #     render josn: post

    #     # byebug
    # end
    def update
        post = Post.find_by(id: params[:id])
        # byebug

        post.assign_attributes(update_params)
        if post.valid?
            post.save
            render json: post, status: :created
        else
            render json: {errors: post.errors.full_messages}, status: 422
        end
    end


    def index
        render json: Post.all
    end

    # def index
    #     post = Post.all.with_attached_image
    #     # byebug
    
    #     render json: post.map { |p| p.as_json.merge({ image: url_for(p.image) }) }
    # end

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
        post = Post.find_by(id: params[:id])
        if post.comments.length > 0
            # byebug
            post.comments.each { |item|  Cloudinary::Uploader.destroy(item.image.key)}
        else
        end
        post.destroy
    end


    private
    def post_params
        params.require(:post).permit(:title, :user_id)
        # params.permit(:title, :user_id, :image, :image_url, :public_id)
    end
    def update_params
        params.require(:post).permit(:title, :id)
    end
    
end

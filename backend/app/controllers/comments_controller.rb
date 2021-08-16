class CommentsController < ApplicationController
    before_action :check_configuration

    def check_configuration
        render 'configuration_missing' if Cloudinary.config.api_key.blank?
    end

    def create
        new_comment = Comment.create(comment_params)
        if new_comment.valid?
            render json: new_comment, status: :created
        else
            render json: {errors: new_comment.errors.full_messages}, status: 422
        end
    end

    def show
        # comment = Comment.find_by(id: params[:id]);
        # if comment
        #     render json: comment
        # else
        #     render json: {error: "Not found"}, status: :not_found
        # end
        comment_with_post_id = Comment.where(post_id: params[:id]).with_attached_image
        if comment_with_post_id
            # render json: comment_with_post_id
            # byebug
            render json: comment_with_post_id.map { |p| 
                
                puts p.as_json.merge({ image: url_for(p.image) }) }
        else
            render json: {error: "Not found"}, status: :not_found
        end
        
    end
    

    private
    def comment_params
        # params.require(:comment).permit(:readers_comment, :post_id, :image)
        params.permit(:readers_comment, :post_id, :public_id, :image_url,:image)
    end
end

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

    def destroy
        comment = Comment.find_by(id: params[:id])
        # byebug
        public_id = comment.image.key
        comment.destroy
        render json: Cloudinary::Uploader.destroy(public_id)
    end

    def update
        comment = Comment.find_by(id:params[:id])
        if comment.update(comment_params)
            render json: comment, status: :created
        else
          render :edit, status: :unprocessable_entity
        end
      end

    private
    def comment_params
          # params.require(:comment).permit(:readers_comment, :post_id, :image)
          params.permit(:readers_comment, :post_id, :public_id, :image_url,:image)
    end
    
    #   private
    #     def article_params
    #       params.require(:article).permit(:title, :body)
    #     end


    # def index
    #     # post = Post.all.with_attached_image
    #     # # byebug
    
    #     # render json: post.map { |p| p.as_json.merge({ image: url_for(p.image) }) }
    # end

    # def show
    #     comment = Comment.find_by(id: params[:id]);
    #     if comment
    #         render json: comment
    #     else
    #         render json: {error: "Not found"}, status: :not_found
    #     end

    #     # comment_with_post_id = Comment.where(post_id: params[:id]).with_attached_image
    #     # if comment_with_post_id
    #     #     # render json: comment_with_post_id
    #     #     # byebug
    #     #     render json: comment_with_post_id.map { |p| p.as_json.merge({ image: url_for(p.image) }) }
    #     # else
    #     #     render json: {error: "Not found"}, status: :not_found
    #     # end
        
    # end
    

    
end

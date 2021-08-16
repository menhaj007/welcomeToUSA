class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :readers_comment, :public_id, :image_url, :image
  
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end

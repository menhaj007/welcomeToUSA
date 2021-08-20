class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :readers_comment, :public_id, :image_url, :image
  
  def image
    rails_blob_url(object.image, disposition: "attachment", host: "http://127.0.0.1:3000") if object.image.attached?
  end
end

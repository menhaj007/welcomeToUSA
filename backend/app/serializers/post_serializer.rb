class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :image_url, :public_id, :image  
  
  has_many :comments


  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end

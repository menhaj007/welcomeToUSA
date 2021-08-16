class Comment < ApplicationRecord
    belongs_to :post
    # has_one_attached :image
    has_one_attached :image, dependent: :purge
end

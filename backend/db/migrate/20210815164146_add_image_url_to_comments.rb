class AddImageUrlToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :image_url, :string
  end
end

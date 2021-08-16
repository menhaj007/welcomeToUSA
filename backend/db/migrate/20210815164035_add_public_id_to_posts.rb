class AddPublicIdToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :public_id, :integer
  end
end

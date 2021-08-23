class RemovePublicIdFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :public_id, :integer
  end
end

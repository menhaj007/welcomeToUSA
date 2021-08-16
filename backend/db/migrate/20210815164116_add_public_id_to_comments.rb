class AddPublicIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :public_id, :integer
  end
end

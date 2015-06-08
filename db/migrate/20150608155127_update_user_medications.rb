class UpdateUserMedications < ActiveRecord::Migration
  def change
    add_column :user_medications, :color, :string
    add_column :user_medications, :photo, :string
  end
end

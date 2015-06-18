class AddDayToUserMedications < ActiveRecord::Migration
  def change
    add_column :user_medications, :day, :string
  end
end

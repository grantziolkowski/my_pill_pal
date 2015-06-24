class CreateUserMedications < ActiveRecord::Migration
  def change
    create_table :user_medications do |t|
      t.references :user, null: false
      t.references :medication, null: false
      t.string :alias
      t.string :notes
      t.integer :times_per_day

      t.timestamps null: false
    end
  end
end

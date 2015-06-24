class CreateMedications < ActiveRecord::Migration
  def change
    create_table :medications do |t|
      t.string :name, null: false
      t.integer :dosage
      t.string :url
      t.timestamps null: false
    end
  end
end

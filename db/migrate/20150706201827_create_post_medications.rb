class CreatePostMedications < ActiveRecord::Migration
  def change
    create_table :post_medications do |t|
      t.references :post
      t.references :medication

      t.timestamps null: false
    end
  end
end

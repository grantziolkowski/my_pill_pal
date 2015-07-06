class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content, null: false
      t.references :author, null: false

      t.timestamps null: false
    end
  end
end

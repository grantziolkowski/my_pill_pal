class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content, null: false
      t.references :auther, null: false

      t.timestamps null: false
    end
  end
end

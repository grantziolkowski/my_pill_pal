class CreatePillFillApiCalls < ActiveRecord::Migration
  def change
    create_table :pill_fill_api_calls do |t|

      t.timestamps null: false
    end
  end
end

class AddLabelToMedication < ActiveRecord::Migration
  def change
    add_column :medications, :label, :string
  end
end

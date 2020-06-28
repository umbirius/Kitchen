class RemoveType < ActiveRecord::Migration[5.2]
  def change
    remove_column :appointments, :type
  end
end

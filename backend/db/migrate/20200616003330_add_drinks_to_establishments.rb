class AddDrinksToEstablishments < ActiveRecord::Migration[5.2]
  def change
    add_column :establishments, :drinks, :string
  end
end

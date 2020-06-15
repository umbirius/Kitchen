class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.datetime :when
      t.integer :establishment_id
      t.string :type
      t.integer :user_id_one
      t.integer :user_id_two
      t.string :code_word

      t.timestamps
    end
  end
end

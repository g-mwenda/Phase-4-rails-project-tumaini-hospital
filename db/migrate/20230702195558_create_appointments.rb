class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :date
      t.string :time
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

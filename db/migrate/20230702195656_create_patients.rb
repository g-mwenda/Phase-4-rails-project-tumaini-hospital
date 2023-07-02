class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :condition
      t.text :notes
      t.boolean :archive, default: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

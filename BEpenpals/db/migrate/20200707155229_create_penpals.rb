class CreatePenpals < ActiveRecord::Migration[6.0]
  def change
    create_table :penpals do |t|
      t.string :name
      t.string :address
      t.integer :age
      
      t.references :user_penpals, foreign_key: true
      t.timestamps
    end
  end
end

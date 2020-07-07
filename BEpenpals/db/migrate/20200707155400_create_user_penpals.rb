class CreateUserPenpals < ActiveRecord::Migration[6.0]
  def change
    create_table :user_penpals do |t|
      t.references :user
      t.references :penpal
      
      t.timestamps
    end
  end
end

class AddImageToPenpals < ActiveRecord::Migration[6.0]
  def change
    add_column :penpals, :image, :blob
  end
end

class AddLettersReceivedToPenpals < ActiveRecord::Migration[6.0]
  def change
    add_column :penpals, :letters_received, :integer, :default => 0
  end
end

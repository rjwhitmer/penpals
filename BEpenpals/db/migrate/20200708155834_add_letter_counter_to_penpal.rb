class AddLetterCounterToPenpal < ActiveRecord::Migration[6.0]
  def change
    add_column :penpals, :letters_sent, :integer, :default => 0
  end
end

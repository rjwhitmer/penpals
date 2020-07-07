class Penpal < ApplicationRecord
    has_many :user_penpals
    has_many :users, through: :user_penpals
end

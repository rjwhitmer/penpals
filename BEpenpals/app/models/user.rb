class User < ApplicationRecord
    has_many :user_penpals
    has_many :penpals, through: :user_penpals
end

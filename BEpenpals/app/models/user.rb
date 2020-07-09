class User < ApplicationRecord
    has_many :user_penpals
    has_many :penpals, through: :user_penpals
    has_secure_password
    validates :email, uniqueness: true
end

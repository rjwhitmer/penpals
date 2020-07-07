class UserPenpal < ApplicationRecord
    belongs_to :user
    belongs_to :penpal
end

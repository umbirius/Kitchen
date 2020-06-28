class User < ApplicationRecord

    has_many :appointments, ->(user){ unscope(where: :user_id).where "user_id_one = ? OR user_id_two = ?", user.id, user.id }
    
end

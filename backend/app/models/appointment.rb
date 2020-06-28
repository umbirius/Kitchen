class Appointment < ApplicationRecord
    belongs_to :establishment

    belongs_to :first_user,  foreign_key: :user_id_one, class_name: "User", optional: true
    belongs_to :second_user,  foreign_key: :user_id_two, class_name: "User", optional: true

end

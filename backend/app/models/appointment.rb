class Appointment < ApplicationRecord
    belongs_to :establishment
    belongs_to :user, optional: true
end

class Appointment < ApplicationRecord
    belongs_to :establishment
    belongs_to :users
end

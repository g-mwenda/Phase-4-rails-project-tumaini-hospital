class Appointment < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true, uniqueness: true
    validates :date, presence: true
    validates :time, presence: true
end

class Appointment < ApplicationRecord
    belongs_to :user
  
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true, uniqueness: { message: 'is already scheduled for an appointment' }
    validates :date, presence: true
    validates :time, presence: true
  end
  
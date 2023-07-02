class Patient < ApplicationRecord
    belongs_to :user

    
    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true, uniqueness: true
    validates :notes, presence: true
    validates :condition, presence: true
end

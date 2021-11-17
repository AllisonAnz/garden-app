class User < ApplicationRecord
    validates :username, presence: :true

    has_many :plants

    has_many :garden_plants, through: :plants, source: :plantable, source_type: 'GardenPlant'
    has_many :veggie_plants, through: :plants, source: :plantable, source_type: 'VeggiePlant'
    has_many :house_plants, through: :plants, source: :plantable, source_type: 'HousePlant'
end



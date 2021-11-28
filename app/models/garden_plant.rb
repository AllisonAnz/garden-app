class GardenPlant < ApplicationRecord
    has_one :plant, :as => :plantable
end

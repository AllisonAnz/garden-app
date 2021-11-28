class HousePlant < ApplicationRecord
    has_one :plant, as: :plantable
end

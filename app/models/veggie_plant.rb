class VeggiePlant < ApplicationRecord
    has_one :plant, as: :plantable
end

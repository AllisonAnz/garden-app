class Plant < ApplicationRecord
    belongs_to :plantable, :polymorphic => true
    belongs_to :user
end

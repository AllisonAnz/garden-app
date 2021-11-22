class Plant < ApplicationRecord
    belongs_to :plantable, :polymorphic => true
    accepts_nested_attributes_for :plantable
    belongs_to :user
end

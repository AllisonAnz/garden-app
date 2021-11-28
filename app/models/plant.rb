class Plant < ApplicationRecord
    belongs_to :plantable, :polymorphic => true, dependent: :destroy
    accepts_nested_attributes_for :plantable, :update_only => true 
    belongs_to :user

end

class PlantSerializer < ActiveModel::Serializer
  attributes :id, :plantable_type, :description, :image, :last_watered, :last_fertilized, :sun_requirement
  has_one :plantable, polymorphic: true

  
end

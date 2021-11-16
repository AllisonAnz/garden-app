class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :image
      
      t.date :last_watered
      t.date :last_fertilized

      t.string :sun_requirement
      t.text :description

      t.integer :plantable_id
      t.string :plantable_type

      t.timestamps
    end
  end
end

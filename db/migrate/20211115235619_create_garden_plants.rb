class CreateGardenPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :garden_plants do |t|
      t.string :name
      t.string :life_cycle
      t.string :color 
      
      t.text :garden_location 
      t.string :height 
      
      t.string :planting_season
      t.string :bloom_season

      t.date :planted
      t.integer :days_to_germinate
      t.integer :days_to_bloom
      t.text :notes
      t.timestamps
    end
  end
end

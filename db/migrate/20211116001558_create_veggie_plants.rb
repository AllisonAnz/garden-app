class CreateVeggiePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :veggie_plants do |t|
      t.string :name

      t.text :veggie_location 

      t.string :planting_season 
      t.string :harvest_season 

      t.date :planted 
      t.integer :days_to_germinate 
      t.integer :days_to_harvest
      t.text :notes

      t.timestamps
    end
  end
end

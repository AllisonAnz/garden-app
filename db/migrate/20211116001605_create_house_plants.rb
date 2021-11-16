class CreateHousePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :house_plants do |t|
      t.string :name
      t.date :last_repotted 
      t.string :soil
      t.integer :watering_schedule

      t.text :notes

      t.timestamps
    end
  end
end

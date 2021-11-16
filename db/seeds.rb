puts "Clearing old data"
Plant.destroy_all
GardenPlant.destroy_all 
VeggiePlant.destroy_all 
HousePlant.destroy_all
User.destroy_all 

user1 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user2 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user3 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
user4 = User.create(username: Faker::Internet.username, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)




gardenplant1 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "front middle", height: Faker::Measurement.height, planting_season: "July-Aug", bloom_season: "July", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
gardenplant2 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "front second from right", height: Faker::Measurement.height, planting_season: "Feb-March", bloom_season: "August", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
gardenplant3 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "middle middle", height: Faker::Measurement.height, planting_season: "April-May", bloom_season: "July", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
gardenplant4 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "back right corner", height: Faker::Measurement.height, planting_season: "Sept-October", bloom_season: "June", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
gardenplant5 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "annual", color: Faker::Color.color_name, garden_location: "front left corner", height: Faker::Measurement.height, planting_season: "May", bloom_season: "June", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
gardenplant6 = GardenPlant.create(name: Faker::Lorem.word, life_cycle: "perennial", color: Faker::Color.color_name, garden_location: "back middle", height: Faker::Measurement.height, planting_season: "April", bloom_season: "October", planted: Faker::Date.in_date_period(month: 2), days_to_germinate: Faker::Number.within(range: 1..360), days_to_bloom: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)


houseplant1 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)
houseplant2 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)
houseplant3 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)
houseplant4 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)
houseplant5 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)
houseplant6 = HousePlant.create(name: Faker::Lorem.word, last_repotted:Faker::Date.in_date_period(month: 2), soil: Faker::Lorem.word, watering_schedule: Faker::Number.within(range: 1..14), notes:  Faker::Lorem.sentence)


veggieplant1 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Front right", planting_season: "March", harvest_season: "August", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
veggieplant2 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Back Middle", planting_season: "April", harvest_season: "August", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
veggieplant3 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Front Middle", planting_season: "May", harvest_season: "September", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
veggieplant4 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Middle Two Rows back", planting_season: "April", harvest_season: "September", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
veggieplant5 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Back Right Corner", planting_season: "March", harvest_season: "October", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)
veggieplant6 = VeggiePlant.create(name: Faker::Lorem.word, veggie_location: "Front Left Corner", planting_season: "June", harvest_season: "October", planted: Faker::Date.in_date_period(month: 5), days_to_germinate: Faker::Number.within(range: 1..360), days_to_harvest: Faker::Number.within(range: 30..90), notes: Faker::Lorem.sentence)


plant1 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant1)
plant2 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Partial Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant2)
plant3 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant3)
plant4 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant4)
plant5 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant5)
plant6 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: gardenplant6)
plant7 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant1)
plant8 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Partial Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant2)
plant9 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant3)
plant10 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant4)
plant11 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant5)
plant12 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: veggieplant6)
plant13 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant1)
plant14 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant2)
plant15 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant3)
plant16 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Partial Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant4)
plant17 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Full Sun", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant5)
plant18 = Plant.create(image: Faker::Placeholdit.image, last_watered: Faker::Date.backward(days: 14), last_fertilized: Faker::Date.backward(days: 14), sun_requirement: "Shade", description: Faker::Lorem.paragraph(sentence_count: 2), user_id: User.all.sample.id, plantable: houseplant6)


puts "seeding done"


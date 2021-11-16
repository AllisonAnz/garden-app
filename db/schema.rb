# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_16_002751) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "garden_plants", force: :cascade do |t|
    t.string "name"
    t.string "life_cycle"
    t.string "color"
    t.text "garden_location"
    t.string "height"
    t.string "planting_season"
    t.string "bloom_season"
    t.date "planted"
    t.integer "days_to_germinate"
    t.integer "days_to_bloom"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "house_plants", force: :cascade do |t|
    t.string "name"
    t.date "last_repotted"
    t.string "soil"
    t.integer "watering_schedule"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string "image"
    t.date "last_watered"
    t.date "last_fertilized"
    t.string "sun_requirement"
    t.text "description"
    t.integer "plantable_id"
    t.string "plantable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_plants_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "veggie_plants", force: :cascade do |t|
    t.string "name"
    t.text "veggie_location"
    t.string "planting_season"
    t.string "harvest_season"
    t.date "planted"
    t.integer "days_to_germinate"
    t.integer "days_to_harvest"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "plants", "users"
end

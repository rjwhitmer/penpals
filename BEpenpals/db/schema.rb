# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_08_165336) do

  create_table "penpals", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "age"
    t.integer "user_penpals_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.binary "image"
    t.integer "letters_sent", default: 0
    t.integer "letters_received", default: 0
    t.index ["user_penpals_id"], name: "index_penpals_on_user_penpals_id"
  end

  create_table "user_penpals", force: :cascade do |t|
    t.integer "user_id"
    t.integer "penpal_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["penpal_id"], name: "index_user_penpals_on_penpal_id"
    t.index ["user_id"], name: "index_user_penpals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "age"
    t.integer "user_penpals_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.binary "image"
    t.string "email"
    t.string "password_digest"
    t.index ["user_penpals_id"], name: "index_users_on_user_penpals_id"
  end

  add_foreign_key "penpals", "user_penpals", column: "user_penpals_id"
  add_foreign_key "users", "user_penpals", column: "user_penpals_id"
end

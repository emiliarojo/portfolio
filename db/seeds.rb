# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

Project.destroy_all

# grant = Project.create(
#   name: "Grant Chichester",
#   description: "Logo Design",
#   link: "https://grantchichester.me/"
# )
# grant.photo.attach(io: File.open('app/assets/images/projects/Grant/Grant-background.png'), filename: 'Grant-background.png')

# fanfind = Project.create(
#   name: "FanFind",
#   description: "Mobile Web Application",
#   link: "https://www.fan-find.com/"
# )
# fanfind.photo.attach(io: File.open('app/assets/images/projects/FanFind/FanFind-background.png'), filename: 'FanFind-background.png')

shart = Project.create(
  name: "shART",
  description: "Web Application",
  link: "https://shart-jpates2.herokuapp.com/"
)
file = URI.open("https://res.cloudinary.com/dwj0s8pzs/image/upload/v1676543334/shART-background_r33wbx.png")
shart.photo.attach(io: file, filename: "shART-background.png", content_type: "image/png")

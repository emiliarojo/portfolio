# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Project.destroy_all

grant = Project.create(
  name: "Grant Chichester",
  description: "Logo Design",
  link: "https://grantchichester.me/"
)
grant.photo.attach(io: File.open('app/assets/images/projects/Grant/Grant-background.png'), filename: 'Grant-background.png')

fanfind = Project.create(
  name: "FanFind",
  description: "Mobile Web Application",
  link: "https://www.fan-find.com/"
)
fanfind.photo.attach(io: File.open('app/assets/images/projects/FanFind/FanFind-background.png'), filename: 'FanFind-background.png')

shart = Project.create(
  name: "shART",
  description: "Web Application",
  link: "https://shart-jpates2.herokuapp.com/"
)
shart.photo.attach(io: File.open('app/assets/images/projects/shART/shART-background.png'), filename: 'shART-background.png')

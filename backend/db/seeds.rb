# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv' 
require 'faker'

csv_text = File.read(Rails.root.join('lib/user_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    u = User.new 
    u.username = row['Username']
    u.gender = row['Gender']
    u.interests = row['Interests']
    u.save
end 


csv_text = File.read(Rails.root.join('lib/establishment_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    e = Establishment.new 
    e.name = row['name']
    e.genre = row['genre']
    e.drinks = row['drinks']
    e.save
end 


csv_text = File.read(Rails.root.join('lib/appointment_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
Establishment.all.each do |establishment|
    csv.each do |row|
        a = establishment.appointments.new
        a.when = DateTime.new(row['year'].to_i,row['month'].to_i,row['date'].to_i,row['hour'].to_i,row['minute'].to_i).strftime("%m/%d/%Y %H:%M")
        a.code_word = Faker::Color.color_name + "-" + Faker::Creature::Animal.name
        a.save
    end 
end 


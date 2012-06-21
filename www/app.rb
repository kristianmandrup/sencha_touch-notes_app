require 'sinatra'
require "sinatra/reloader" if development?

# Make sure our assets reload on every request.
set :static_cache_control, [:public, :max_age => 0]

# Pick which set of files get served depending
# on our environment
case ENV["RACK_ENV"] || "development"
when "production"
  puts "Production"
  set :public_folder, "./build/production"
when "testing"
  puts "Production"
  set :public_folder, "./build/testing"
else "development"
  puts "Debug"
  set :public_folder, "./"
end

get "/" do
  redirect "/index.html"
end
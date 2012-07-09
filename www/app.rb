require 'sinatra'
require "sinatra/reloader" if development?

# Make sure our assets reload on every request.
set :static_cache_control, [:public, :max_age => 0]

# set :bind, 'localhost'
set :port, 4567

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

helpers do
  def templates
    Dir.glob("templates/**").map do |template|
      name = File.basename(template, ".html")
      content = open(template).read
      "<textarea id='#{name}' class='x-hidden-display'>#{content}</textarea>"
    end.join("\n")
  end
end

# set :views, Proc.new { File.join(root, "app/view") }

get "/" do
  erb :index
end

get "/siesta" do
  erb :siesta
end
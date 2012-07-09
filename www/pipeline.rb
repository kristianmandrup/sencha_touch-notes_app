# http://www.simonecarletti.com/blog/2011/09/using-sprockets-without-a-railsrack-project/

# https://gist.github.com/1194180#comments

# http://www.sencha.com/forum/archive/index.php/t-171545.html?s=1dc899bca025853fe5d582ffb1a8c5e1

require 'bundler/setup'
Bundler.require

assets = Sprockets::Environment.new('.') do |env|
  env.logger = Logger.new(STDOUT)
end

assets.append_path('assets')

module AssetHelpers
  def asset_path(name)
    "/assets/#{name}"
  end
end

assets.context_class.instance_eval do
  include AssetHelpers
end

get '/assets/*' do
  new_env = env.clone
  new_env["PATH_INFO"].gsub!("/assets", "")
  assets.call(new_env)
end

session = Rack::Test::Session.new(Rack::MockSession.new(assets))
session.get('application.css')
puts session.last_response.body
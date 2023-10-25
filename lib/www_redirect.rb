class WwwRedirect
  def initialize(app)
    @app = app
  end

  def call(env)
    request = Rack::Request.new(env)

    if !request.host.start_with?('www.')
      [301, { 'Location' => request.url.sub('//', '//www.') }, ['Redirecting...']]
    else
      @app.call(env)
    end
  end
end

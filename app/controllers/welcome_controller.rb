class WelcomeController < ApplicationController
    def index 
        render json: {greeeting: 'Hello Class'
    }
end
end
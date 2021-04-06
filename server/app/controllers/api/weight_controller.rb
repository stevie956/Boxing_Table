class Api::WeightController < ApplicationController
    def index 
        render json: {greeeting: 'Hello Weight'
    }
end
end

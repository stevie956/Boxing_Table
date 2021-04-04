class BoxingController < ApplicationController
  def index 
        render json: {type: 'index'}
  end

  def create 
    boxing = Boxing.create(name: params[:name], weight_id: params[:weight_id], country: params[:country])
    boxing_valid = boxing.valid?
    p boxing 
    p boxing_valid
    if boxing_valid
    render json: {message: 'Successfully created entry!'}, status: 200
    else 
    render json: {message: 'Unable to create entry!'}, status: 400
    end
  end 

  def show 
    render json: {type: 'show'}
  end

  def update 
    render json: {type: 'update'}
  end

  def destroy  
    render json: {type: 'destroy'}
  end
end

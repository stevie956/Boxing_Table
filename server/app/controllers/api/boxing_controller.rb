class Api::BoxingController < ApplicationController
  def index 
        render json: Boxing.all
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
    puts params[:id]
    render json: Boxing.find(params[:id])
  end

  def update 
    boxing = Boxing.find(params[:id])
    boxing = Boxing.update(name: params[:name], weight_id: params[:weight_id], country: params[:country])
    render json: {message: 'Successfully updated entry!'}
  end

  def destroy  
    Boxing.destroy(params[:id])
    render json: {message: 'Entry deleted!'}
 end
end

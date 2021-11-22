class PlantsController < ApplicationController

    def index 
        render json: Plant.all
    end


    # GET /plant/:id
    def show
        plant = find_plant 
        render json: plant
    end

   
end

private 

def find_plant 
    Plant.find(params[:id])
end
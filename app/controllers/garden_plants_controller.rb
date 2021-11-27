class GardenPlantsController < ApplicationController
    def index 
        render json: GardenPlant.all
    end

    def show 
        gardenplant = find_garden_plant
        render json: gardenplant 
    end

    def create 
        garden_plant = GardenPlant.create!(garden_plant_params)
        render json: garden_plant, status: :created
    end
    
    def plant_index
        garden_plant = GardenPlant.find_garden_plant 
        plants = garden_plant.plants
        render json: plants, include: :garden_plant
    end

    def plant
        plant = Plant.find(params[:id])
        render json: plant, include: :garden_plant
    end

    private 

    def find_garden_plant
        GardenPlant.find(params[:id])
    end

    def garden_plant_params 
        params.permit(:name)
    end
end

class GardenPlantsController < ApplicationController
    def show 
        garden_plant = GardenPlant.find(params[:id])
        render json: garden_plant
    end
    
    def update 
        garden_plant = GardenPlant.find(params[:id])
        garden_plant.update!(plant_params)
        render json: garden_plant
    end

    private 

    def plant_params 
        params.require(:garden_plant).permit(
            :color
        )
    end
end

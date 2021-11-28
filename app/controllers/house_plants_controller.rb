class HousePlantsController < ApplicationController
    def update 
        house_plant = HousePlant.find(params[:id])
        house_plant.update!(plant_params)
        render json: house_plant
    end

    private 

    def plant_params 
        params.require(:house_plant).permit(
            :color
        )
    end
end

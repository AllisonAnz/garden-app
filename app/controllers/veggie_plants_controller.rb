class VeggiePlantsController < ApplicationController
    def update 
        veggie_plant = VeggiePlant.find(params[:id])
        veggie_plant.update!(plant_params)
        render json: veggie_plant
    end

    private 

    def plant_params 
        params.require(:veggie_plant).permit(
            :color
        )
    end
end

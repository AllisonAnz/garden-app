
class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        render json: Plant.all
    end

    # GET /plant/:id
    def show
        plant = find_plant 
        render json: plant
    end

    # POST /users
    # .create! raises an ActiveRecord::RecordInvalid execption if the create fails
    def create
        plantable_type = params[:plantable_type]
        if plantable_type === "GardenPlant"
            plant_type = GardenPlant.create!(plantable_params)
        elsif plantable_type === "VeggiePlant"
            plant_type = VeggiePlant.create!(plantable_params)
        elsif plantable_type === "HousePlant"
            plant_type = HousePlant.create!(plantable_params)
        end
          plant = Plant.create!(user_id: 1, plantable_id: plant_type.id, plantable_type: plantable_type)
        render json: plant, status: :created
    end



private 

    def plantable_params 
        params.permit(:name)
    end

    def find_plant 
        Plant.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "Plant not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
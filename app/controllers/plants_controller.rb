
class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        plants = Plants.all
        render json: plants
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
          plant = Plant.create!(user_id: session[:user_id], plantable_id: plant_type.id, plantable_type: plantable_type)
        render json: plant, status: :created
    end

    # Patch /plants/:id 
    def update 
        plant = find_plant 
        plant.update!(plant_params)
        render json: plant 
    end

    def destroy 
       plant = Plant.find(params[:id])
       plant.destroy 
       head :no_content
    end



private 

    def plantable_params 
        params.permit(:name)
    end

    def plant_params 
        params.require(:plant).permit(
            :sun_requirement, :last_watered, :last_fertilized,
            plantable_attributes: [:color]
        )
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

    def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
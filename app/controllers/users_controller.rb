class UsersController < ApplicationController
      rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
      rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # GET /users
    def index 
        @users = User.all
        render json: @users
    end

    # GET /users/:id
    def show 
        user = find_user 
        render json: user
    end

    # POST /users
    # .create! raises an ActiveRecord::RecordInvalid execption if the create fails
    def create
        user = User.create!(user_params)
        render json: user, status: :created 
    end

    # PATCH /users/:id
    def update 
        user = find_user 
        user.update(user_params)
        render json: user
    end

    # DELETE /users/:id
    def destroy 
        user = find_user 
        user.destroy 
        head :no_content 
    end

    private 

    def user_params
        params.permit(:username, :first_name, :last_name)
    end

    def find_user 
        User.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end


end

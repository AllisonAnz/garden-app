Rails.application.routes.draw do
  
  resources :plants, only: [:index, :show, :create, :update, :destroy] 
  
  
  resources :users, only: [:index, :show, :create, :update]
  
  resources :garden_plants, only: [:show, :update] 

  resources :veggie_plants, only: [:update]

  resources :house_plants, only: [:update]

  post "/login", to: "sessions#create" 

  get "/me", to: "users#show" 

  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

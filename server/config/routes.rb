Rails.application.routes.draw do
  get "/welcome", to: "welcome#index"
  namespace :api do 
   resources :boxing
   resources :weight
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

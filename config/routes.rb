Rails.application.routes.draw do
  post "/login", to:"sessions#login"
  delete "/logout", to:"sessions#logout"

  get "/current_user", to:"users#loggedin_user"
  patch "/changepassword/:id", to:"users#changepassword"

    resources :users, only: [:index, :show,:create,:destroy]
    resources :appointments, only: [:index, :show,:create,:update,:destroy]
    resources :patients, only: [:index, :show,:create,:update,:destroy]


  get "/userpatients", to:"patients#userpatients"
  patch "/patients/archive/:id", to:"patients#archive"
  

end
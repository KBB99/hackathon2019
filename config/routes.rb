Rails.application.routes.draw do
  # resources :registrations
  root 'registrations#new'
  get '*path' => redirect('/')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

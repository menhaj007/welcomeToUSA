Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :comments

  post '/posts/new', to: 'posts#create_without_attachment'

end

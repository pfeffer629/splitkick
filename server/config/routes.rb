Rails.application.routes.draw do
  scope "api" do
    resources :routines
    resources :exercises
    resources :exercise_references
  end
  mount_devise_token_auth_for 'User', at: 'auth'
end

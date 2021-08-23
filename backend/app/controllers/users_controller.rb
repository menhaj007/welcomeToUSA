class UsersController < ApplicationController

    def create
        new_user = User.create(user_params)
        if new_user.valid?
            render json: new_user, status: :created
        else
            render json: {errors: new_user.errors.full_messages}, status: 422
        end
    end
    def index
        users = User.all
        render json: users, include: [:post]
    end

    
    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end

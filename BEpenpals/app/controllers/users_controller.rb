class UsersController < ApplicationController
    skip_before_action :authenticate, only: [:create, :index]

    def index
        user = @user.id
        render json: user, include: :penpals
    end

    def show
        user = @user.id
        render json: { user: @user }, include: :penpals
    end

    def create
        @user = User.create({
            name: params[:name],
            address: params[:address],
            age: params[:age],
            image: params[:image],
            email: params[:email],
            password: params[:password]
        })
        render json: { user: @user }
    end

    def update
        @user = User.find(params[:id])
        @user.update({
            penpal_id: params[:penpal_id]
        })
        render json: { message: "Penpal added successfully!" }
    end
end

class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, include: :penpals
    end

    def show
        @user = User.find_by(params[:id])
        render json: { user: @user }
    end

    def create
        @user = User.create({
            name: params[:name],
            address: params[:address],
            age: params[:age]
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

class UserPenpalsController < ApplicationController
    # before_action :authenticate, only: [:create]
    def index
        @userpenpals = UserPenpal.all
        render json: @userpenpals
    end

    def create
        @userpenpal = UserPenpal.new({
            user_id: params[:user_id],
            penpal_id: params[:penpal_id]
        })
        
        if @userpenpal.save
            render json: { message: "User has a new penpal!" }
        else
            render json: { error: @userpenpal.errors }
        end

    end
end
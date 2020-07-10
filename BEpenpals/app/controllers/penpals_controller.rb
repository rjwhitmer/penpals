class PenpalsController < ApplicationController
    skip_before_action :authenticate, only: [:index, :create]

    def index
        @penpals = Penpal.all
        render json: @penpals
    end

    def create
        @penpal = Penpal.create({
            name: params[:name],
            address: params[:address],
            age: params[:age],
            image: params[:image],
        })
        render json: @penpal
    end

    def update
        @penpal = Penpal.update({
            letters_received: params[:letters_received]
        })
        render json: @penpal
    end
end

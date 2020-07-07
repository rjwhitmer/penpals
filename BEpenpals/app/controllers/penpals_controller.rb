class PenpalsController < ApplicationController
    def index
        @penpals = Penpal.all
        render json: @penpals
    end

    def create
        @penpal = Penpal.create({
            name: params[:name],
            address: params[:address],
            age: params[:age],
            image: params[:image]
        })
        render json: @penpal
    end
end

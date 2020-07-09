class ApplicationController < ActionController::API
    before_action :authenticate

    def authenticate
        header = request.headers["Authorization"]
        token = header.split(" ")[1]
        if !token
            render json: { error: 'Must be logged in to do this!!' }, stauts: :unauthorized
        else 
            secret = Rails.application.secret_key_base
            
            begin
                payload = JWT.decode(token, secret)[0]
                
                @user = User.find(payload["user_id"])

            rescue
                render json: { error: 'Must be logged in to do this!' }, status: :forbidden
            end
        end
    end
end

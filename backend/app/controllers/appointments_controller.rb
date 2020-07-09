
class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: AppointmentSerializer.new(appointments)
    end

    def update
        byebug
        appointment = Appointment.find_by(id: params[:id])

        if params[:cancel] && appointment.status
            if appointment.user_id_one == params[:user_id] 
                appointment.update(user_id_one: nil, status: false)
            elsif appointment.user_id_two == params[:user_id]
                appointment.update(user_id_two: nil, status: false)
            end
        elsif params[:cancel] && !appointment.status
            if appointment.user_id_one == params[:user_id] 
                appointment.update(user_id_one: nil)
            elsif appointment.user_id_two == params[:user_id]
                appointment.update(user_id_two: nil)
            end
        else 
            if !appointment.user_id_one 
                appointment.update(user_id_one: params[:user_id])
            elsif appointment.user_id_one && !appointment.status
                appointment.update(user_id_two: params[:user_id], status: true)
            end 
        end 


        render json: AppointmentSerializer.new(appointment)
    end


end

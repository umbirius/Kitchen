
class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: AppointmentSerializer.new(appointments)
    end

    def update
        appointment = Appointment.find_by(id: params[:id])
        if !appointment.user_id_one 
            byebug
            appointment.update(user_id_one: params[:user_id])
        elsif appointment.user_id_one && !appointment.status
            byebug
            appointment.update(user_id_two: params[:user_id], status: true)
        end 
        render json: AppointmentSerializer.new(appointment)
    end


end

class AppointmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
  
    # Get all appointments
    def index
      appointments = Appointment.all
      render json: appointments.as_json
    end

    # Get single appointment
    def show
      appointment = Appointment.find_by(id: params[:id])
      if appointment
        render json: appointment.as_json
      else
        render json: { error: "Appointment not found" }, status: :not_found
      end
    end
  
    # Create a new appointment
 # Create a new appointment
def create
    appointment = Appointment.create(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      date: params[:date],
      time: params[:time],
      user_id: params[:user_id]
    )
    if appointment.valid?
      render json: { success: "Appointment added successfully" }, status: :created
    else
      render json: { error: appointment.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
    # Update an appointment
    def update
      appointment = Appointment.find_by(id: params[:id])
      if appointment
        appointment.update(
          date: params[:date],
          time: params[:time]
        )
        render json: { success: "Appointment updated successfully" }, status: :ok
      else
        render json: { error: "Appointment not found" }, status: :not_found
      end
    end
  
    # Delete an appointment
    def destroy
      appointment = Appointment.find_by(id: params[:id])
      if appointment
        appointment.destroy
        render json: { success: "Appointment deleted successfully" }, status: :ok
      else
        render json: { error: "Appointment not found" }, status: :not_found
      end
    end
  end
  
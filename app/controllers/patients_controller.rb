class PatientsController < ApplicationController
    skip_before_action :authorize
  
    # Get all patients
    def index
      patients = Patient.all
      render json: patients.as_json(include: :user)
    end
  
    # Get approved patients
    def userpatients
      patients = Patient.where(archive: false)
      render json: patients.as_json(include: :user)
    end
  
    # Get single patient
    def show
      patient = Patient.find_by(id: params[:id])
      if patient
        render json: patient.as_json(include: :user)
      else
        render json: { error: "Patient not found" }, status: :not_found
      end
    end
  
    # Add new patient
    def create
      patient = Patient.create(
        name: params[:name],
        email: params[:email],
        phone: params[:phone],
        condition: params[:condition],
        notes: params[:notes],
        user_id: params[:user_id]
      )
      if patient.valid?
        render json: { success: "Patient added successfully" }, status: :created
      else
        render json: { error: patient.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # Update patient
    def update
      patient = Patient.find_by(id: params[:id])
      if patient
        patient.update(
          condition: params[:condition],
          notes: params[:notes]
        )
        render json: { success: "Patient updated successfully" }, status: :ok
      else
        render json: { error: "Patient not found" }, status: :not_found
      end
    end
  
    # Archive patient
    def archive
      patient = Patient.find_by(id: params[:id])
      if patient
        patient.update(archive: !patient.archive)
        render json: { success: "Patient archive status updated successfully" }, status: :ok
      else
        render json: { error: "Patient not found" }, status: :not_found
      end
    end
  
    # Delete patient
    def destroy
      patient = Patient.find_by(id: params[:id])
      if patient
        patient.destroy
        render json: { success: "Patient deleted successfully" }, status: :ok
      else
        render json: { error: "Patient not found" }, status: :not_found
      end
    end

  end
  
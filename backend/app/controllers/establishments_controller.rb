# frozen_string_literal: true

class EstablishmentsController < ApplicationController
  def index
    establishments = Establishment.all
    render json: EstablishmentSerializer.new(establishments)
  end
end

class EstablishmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :genre, :drinks
end

class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :gender, :interests
end

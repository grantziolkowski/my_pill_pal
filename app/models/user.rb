class User < ActiveRecord::Base
  has_secure_password

  has_many: :medications
  has_many: :posts, foreign_key: :author_id
  has_many: :comments, foreign_key: :commenter_id
  has_many: :user_pharmacies
  has_many: :pharmacies, through: :user_pharmacies
end

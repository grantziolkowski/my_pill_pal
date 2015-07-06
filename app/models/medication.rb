class Medication < ActiveRecord::Base
  has_many :user_medications
  has_many :users, through: :user_medications
  has_many :post_medications
  has_many :posts, through: :post_medications
end

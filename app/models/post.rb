class Post < ActiveRecord::Base
  has_many :post_medications
  has_many :medications, through: :post_medications

  belongs_to :author, class_name: "User"
end

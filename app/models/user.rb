class User < ActiveRecord::Base
  has_secure_password
  before_save :add_sample

  has_many :user_medications
  has_many :medications, through: :user_medications
  has_many :posts, foreign_key: :author_id
  has_many :comments, foreign_key: :commenter_id
  has_many :user_pharmacies
  has_many :pharmacies, through: :user_pharmacies

  def add_sample
    self.user_medications.new(medication: Medication.find_by(name: "Sample"), color: "red")
  end
end

class Medication < ActiveRecord::Base
  before_save :get_pill_fill_info
  has_many :user_medications
  has_many :users, through: :user_medications
  has_many :post_medications
  has_many :posts, through: :post_medications

  def get_pill_fill_info
    PillFillApiCall.new(self.name)
  end
end

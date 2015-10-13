class Medication < ActiveRecord::Base
  before_save :get_pill_fill_info

  has_many :user_medications
  has_many :users, through: :user_medications
  has_many :post_medications
  has_many :posts, through: :post_medications

  def get_pill_fill_info
    api_call =  PillFillApiCall.new
    med_id = api_call.request_by_name(self.name)
    if api_call.request_by_id(med_id)
      self.label = api_call.request_by_id(med_id)
    end
  end
end

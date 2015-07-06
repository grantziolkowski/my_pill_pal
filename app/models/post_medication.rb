class PostMedication < ActiveRecord::Base
  belongs_to :post
  belongs_to :medication
end

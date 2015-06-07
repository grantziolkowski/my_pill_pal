require 'open-uri'
class PillFillApiCall < ActiveRecord::Base
  def request
   response = open("https://developer.pillfill.com/service/v1/concept/N0000146197",
    api_key: "7a9a6eec0bbbada9bb52ac3cff6e6a93")
   response
  end
end

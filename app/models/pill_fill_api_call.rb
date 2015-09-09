require 'open-uri'
class PillFillApiCall
  def request_by_name(med_name)
   response = open("https://developer.pillfill.com:443/service/v1/products?term=#{med_name}&type=name&page=0",
    "api_key" => "7a9a6eec0bbbada9bb52ac3cff6e6a93")
   string = ""
   response.map do |line|
    string << line
   end
   med_id = JSON.parse(string)[0]["splId"]
   med_id
  end

  def request_by_id(id)
     response = open("https://developer.pillfill.com:443/service/v1/products/#{id}",
    "api_key" => "7a9a6eec0bbbada9bb52ac3cff6e6a93")
   string = ""
   response.map do |line|
    string << line
   end
   info = JSON.parse(string)[0]["splEntry"]["patientInformation"]["section"][3]["html"] #information for patients
   info
  end

end

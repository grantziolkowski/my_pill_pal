module UsersHelper
   def format(field)
     (field + " " + content_tag(:small, 'Required')).html_safe
   end

end

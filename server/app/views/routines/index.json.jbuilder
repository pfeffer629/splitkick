json.array!(@routines) do |routine|
  json.extract! routine, :id, :name, :belongs_to
  json.url routine_url(routine, format: :json)
end

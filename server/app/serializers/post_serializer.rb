class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :content
end

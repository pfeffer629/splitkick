class Routine < ActiveRecord::Base
  belongs_to :user
  has_many :exercises, dependent: :destroy

  accepts_nested_attributes_for :exercises
end

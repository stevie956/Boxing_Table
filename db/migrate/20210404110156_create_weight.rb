class CreateWeight < ActiveRecord::Migration[6.1]
  def change
    create_table :weights do |t|
      t.string :name
    end
  end
end

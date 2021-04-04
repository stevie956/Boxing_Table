class CreateBoxing < ActiveRecord::Migration[6.1]
  def change
    create_table :boxings do |t|
      t.string :name 
      t.integer :weight_id
      t.string :country
      t.timestamps
    end
  end
end

class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.text :name
      t.text :link
      t.text :description
      t.timestamps
    end
  end
end

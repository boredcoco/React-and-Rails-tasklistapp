class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :category
      t.integer :due_day
      t.integer :due_month
      t.integer :due_year
      t.string :comments

      t.timestamps
    end
  end
end

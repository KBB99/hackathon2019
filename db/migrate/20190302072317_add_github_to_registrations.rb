class AddGithubToRegistrations < ActiveRecord::Migration[5.1]
  def change
    add_column :registrations, :github, :string
  end
end

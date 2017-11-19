defmodule Microblog.Repo.Migrations.CreateFollows do
  use Ecto.Migration

  def change do
    create table(:follows) do
      add :code, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:follows, [:user_id])
  end
end
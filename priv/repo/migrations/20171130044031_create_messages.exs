defmodule Cryptiris.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :text, :string
      add :topic, :string

      timestamps()
    end
  end
end

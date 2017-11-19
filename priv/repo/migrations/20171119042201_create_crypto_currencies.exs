defmodule Cryptiris.Repo.Migrations.CreateCryptoCurrencies do
  use Ecto.Migration

  def change do
    create table(:crypto_currencies) do
      add :name, :string
      add :desc, :string
      add :price, :decimal

      timestamps()
    end

  end
end

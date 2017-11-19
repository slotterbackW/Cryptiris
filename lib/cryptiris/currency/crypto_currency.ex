defmodule Cryptiris.Currency.CryptoCurrency do
  use Ecto.Schema
  import Ecto.Changeset
  alias Cryptiris.Currency.CryptoCurrency


  schema "crypto_currencies" do
    field :desc, :string
    field :name, :string
    field :price, :decimal

    timestamps()
  end

  @doc false
  def changeset(%CryptoCurrency{} = crypto_currency, attrs) do
    crypto_currency
    |> cast(attrs, [:name, :desc, :price])
    |> validate_required([:name, :desc, :price])
  end
end

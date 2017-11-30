defmodule Cryptiris.Currency do
  alias Cryptiris.Currency.Exchange
  alias Cryptiris.Currency.CryptoExchange
  alias Cryptiris.Currency.CryptoCurrency
  alias Cryptiris.Currency.Follow

  import Ecto.Query, warn: false
  alias Cryptiris.Repo

  def list_crypto_currencies() do
    {:ok, result} = CryptoCurrency.get("all/coinlist").body
    result["Data"]
  end

  def get_crypto_currency(base, name) do
    # TODO
    {:ok, result} = CryptoCurrency.get(base <> name)
    result
  end

  def list_exchanges(base) do
    {:ok, result} = Exchange.get("/latest?base=" <> base).body
    result["rates"]
    |> Enum.map(fn({k,v}) -> %{String.to_atom(k) => v} end)
  end

  def get_exchange(base, name) do
    {:ok, result} = Exchange.get("/latest?base=" <> base <> "&symbols=" <> String.upcase(name)).body
    result["rates"]
  end

  def prices(from, to) do
    {:ok, result} = CryptoExchange.get("price?fsym=" <> from <> "&tsyms=" <> to).body
    result
  end

  # dates is a list of iso strings
  def getHistoricalPrices(from, to, dates) do
    dates
    |> Enum.map(fn(t) -> CryptoExchange.get("pricehistorical?fsym=" <> from <> "&tsyms=" <> to <> "&ts=" <> t).body end)
    |> Enum.map(fn({:ok, result}) -> result["USD"] end)
  end

  #------------------------------------

  def list_follows_by_user(id) do
    query = from f in Follow, where: f.user_id == ^id, select: f.code
    Repo.all(query)
  end

  def list_follows do
    Repo.all(Follow)
  end

  def get_follow!(id), do: Repo.get!(Follow, id)

  def get_follow_by_code!(code, id) do
    Repo.get_by!(Follow, [code: code, user_id: id])
  end

  def create_follow(attrs \\ %{}) do
    %Follow{}
    |> Follow.changeset(attrs)
    |> Repo.insert()
  end

  def update_follow(%Follow{} = follow, attrs) do
    follow
    |> Follow.changeset(attrs)
    |> Repo.update()
  end

  def delete_follow(%Follow{} = follow) do
    Repo.delete(follow)
  end

  def change_follow(%Follow{} = follow) do
    Follow.changeset(follow, %{})
  end
end
defmodule Cryptiris.Currency do
  alias Cryptiris.Currency.Exchange
  alias Cryptiris.Currency.CryptoExchange
  alias Cryptiris.Currency.CryptoCurrency

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
    names = Enum.join(Enum.map(to, fn (e) -> String.upcase(e) end), ",")
    {:ok, result} = CryptoExchange.get("price?fsym=" <> from <> "&tsyms=" <> names).body
    result
  end

  def list_crypto_currencies do
    Repo.all(CryptoCurrency)
  end

  def get_crypto_currency!(id), do: Repo.get!(CryptoCurrency, id)

  def create_crypto_currency(attrs \\ %{}) do
    %CryptoCurrency{}
    |> CryptoCurrency.changeset(attrs)
    |> Repo.insert()
  end

  def update_crypto_currency(%CryptoCurrency{} = crypto_currency, attrs) do
    crypto_currency
    |> CryptoCurrency.changeset(attrs)
    |> Repo.update()
  end

  def delete_crypto_currency(%CryptoCurrency{} = crypto_currency) do
    Repo.delete(crypto_currency)
  end

  def change_crypto_currency(%CryptoCurrency{} = crypto_currency) do
    CryptoCurrency.changeset(crypto_currency, %{})
  end
end
defmodule CryptirisWeb.CryptoCurrencyController do
  use CryptirisWeb, :controller

  alias Cryptiris.Currency
  alias Cryptiris.Currency.CryptoCurrency

  action_fallback CryptirisWeb.FallbackController

  def index(conn, _params) do
    crypto_currencies = Currency.list_crypto_currencies()
    render(conn, "index.json", crypto_currencies: crypto_currencies)
  end

  def show(conn, %{"id" => id}) do
    cryptocurrency = Currency.get_crypto_currency("BTC", id)
    render(conn, "show.json", cryptocurrency: cryptocurrency)
  end

  def crypto_currencies(conn, %{}) do
    crypto_currencies = Currency.list_crypto_currencies()
    render(conn, "crypto_currencies.json", crypto_currencies: crypto_currencies)
  end
end

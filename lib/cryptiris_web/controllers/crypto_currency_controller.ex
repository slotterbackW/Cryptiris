defmodule CryptirisWeb.CryptoCurrencyController do
  use CryptirisWeb, :controller

  alias Cryptiris.Currency
  alias Cryptiris.Currency.CryptoCurrency

  action_fallback CryptirisWeb.FallbackController

  def index(conn, _params) do
    crypto_currencies = Currency.list_crypto_currencies()
    render(conn, "index.json", crypto_currencies: crypto_currencies)
  end

  def create(conn, %{"crypto_currency" => crypto_currency_params}) do
    with {:ok, %CryptoCurrency{} = crypto_currency} <- Currency.create_crypto_currency(crypto_currency_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", crypto_currency_path(conn, :show, crypto_currency))
      |> render("show.json", crypto_currency: crypto_currency)
    end
  end

  def show(conn, %{"id" => id}) do
    crypto_currency = Currency.get_crypto_currency!(id)
    render(conn, "show.json", crypto_currency: crypto_currency)
  end

  def update(conn, %{"id" => id, "crypto_currency" => crypto_currency_params}) do
    crypto_currency = Currency.get_crypto_currency!(id)

    with {:ok, %CryptoCurrency{} = crypto_currency} <- Currency.update_crypto_currency(crypto_currency, crypto_currency_params) do
      render(conn, "show.json", crypto_currency: crypto_currency)
    end
  end

  def delete(conn, %{"id" => id}) do
    crypto_currency = Currency.get_crypto_currency!(id)
    with {:ok, %CryptoCurrency{}} <- Currency.delete_crypto_currency(crypto_currency) do
      send_resp(conn, :no_content, "")
    end
  end
end

defmodule CryptirisWeb.ExchangeController do
  use CryptirisWeb, :controller

  alias Cryptiris.Currency

  action_fallback CryptirisWeb.FallbackController

  def index(conn, _params) do
    exchanges = Currency.list_exchanges("USD")
    render(conn, "index.json", exchanges: exchanges)
  end

  def show(conn, %{"id" => name}) do
    exchange = Currency.get_exchange("USD", name)
    render(conn, "show.json", exchange: exchange)
  end

  def prices(conn, %{"crypto_currencies" => to}) do
    prices = Currency.prices("USD", to)
    render(conn, "prices.json", prices: prices)
  end
end
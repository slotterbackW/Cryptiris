defmodule CryptirisWeb.CryptoExchangeController do
  use CryptirisWeb, :controller
  alias Cryptiris.Currency

  action_fallback CryptirisWeb.FallbackController

  def index(conn, %{"from": from}) do
    rates = Currency.prices("USD", from)
    render(conn, "index.json", rates: rates)
  end
end
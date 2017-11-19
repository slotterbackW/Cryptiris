defmodule CryptirisWeb.ExchangeView do
  use CryptirisWeb, :view
  alias CryptirisWeb.ExchangeView

  def render("index.json", %{exchanges: exchanges}) do
    %{data: render_many(exchanges, ExchangeView, "exchange.json")}
  end

  def render("show.json", %{exchange: exchange}) do
    %{data: render_one(exchange, ExchangeView, "exchange.json")}
  end

  def render("exchange.json", %{exchange: exchange}) do
    exchange
  end

  def render("prices.json", %{prices: prices}) do
    %{data: prices}
  end
end

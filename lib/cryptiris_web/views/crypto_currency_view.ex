defmodule CryptirisWeb.CryptoCurrencyView do
  use CryptirisWeb, :view
  alias CryptirisWeb.CryptoCurrencyView

  def render("index.json", %{crypto_currencies: crypto_currencies}) do
    %{data: render_many(crypto_currencies, CryptoCurrencyView, "crypto_currency.json")}
  end

  def render("show.json", %{crypto_currency: crypto_currency}) do
    %{data: render_one(crypto_currency, CryptoCurrencyView, "crypto_currency.json")}
  end

  def render("crypto_currency.json", %{crypto_currency: crypto_currency}) do
    %{id: crypto_currency.id,
      name: crypto_currency.name,
      desc: crypto_currency.desc,
      price: crypto_currency.price}
  end
end

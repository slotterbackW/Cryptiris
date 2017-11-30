defmodule Cryptiris.Currency.CryptoCurrency do
  use HTTPotion.Base
  
  def process_url(url) do
    "https://min-api.cryptocompare.com/data/" <> url
  end

  def process_response_body(body) do
    Poison.decode body
  end
end

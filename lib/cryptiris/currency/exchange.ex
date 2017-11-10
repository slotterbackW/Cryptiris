defmodule Cryptiris.Currency.Exchange do
  use HTTPotion.Base

  def process_url(url) do
    "https://api.fixer.io/" <> url
  end

  def process_response_body(body) do
     Poison.decode body
  end
end

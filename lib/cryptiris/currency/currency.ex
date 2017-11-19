defmodule Cryptiris.Currency do
  alias Cryptiris.Currency.Exchange
  alias Cryptiris.Currency.CryptoExchange

  def list_exchanges(base) do
    {:ok, result} = Exchange.get("/latest?base=" <> base).body
    result["rates"]
    |> Enum.map(fn({k,v}) -> %{String.to_atom(k) => v} end)
  end

  def get_exchange(base, name) do
    {:ok, result} = Exchange.get("/latest?base=" <> base <> "&symbols=" <> String.upcase(name)).body
    result["rates"]
  end

  def prices(from, to)
    names = Enum.join(Enum.map(to, fn e -> String.upcase(e) end), ",")
    {:ok, result} = CryptoExchange.get("price?fsym=" <> from <> "&tsyms=" <> names).body
    result
  end
end

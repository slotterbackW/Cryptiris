defmodule Cryptiris.Currency do
  @moduledoc """
  The Currency context.
  """
  alias Cryptiris.Currency.Exchange

  def list_exchanges(base) do
    {:ok, result} = Exchange.get("/latest?base=" <> base).body
    IO.inspect(result["rates"])
    result["rates"]
    |> Enum.map(fn({k,v}) -> %{String.to_atom(k) => v} end)
  end

  def get_exchange(base, name) do
    {:ok, result} = Exchange.get("/latest?base=" <> base <> "&symbols=" <> String.upcase(name)).body
    result["rates"]
  end
end

defmodule Cryptiris.Social do
  import Ecto.Query, warn: false
  alias Cryptiris.Repo
  alias Cryptiris.Social.Message 

  def create_message(attrs \\ %{}) do
    %Message{}
    |> Message.changeset(attrs)
    |> Repo.insert()
  end
end
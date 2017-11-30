defmodule Cryptiris.Social.Message do
  use Ecto.Schema
  import Ecto.Changeset
  alias Cryptiris.Social.Message

  schema "messages" do
    field :text, :string
    field :topic, :string

    timestamps()
  end

  @doc false
  def changeset(%Message{} = message, attrs) do
    message
    |> cast(attrs, [:text, :topic])
    |> validate_required([:text, :topic])
  end
end

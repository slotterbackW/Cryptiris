defmodule Cryptiris.Currency.Follow do
  use Ecto.Schema
  import Ecto.Changeset
  alias Cryptiris.Currency.Follow

  schema "follows" do
    field :code, :string
    belongs_to :user, Cryptiris.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(%Follow{} = message, attrs) do
    message
    |> cast(attrs, [:code, :user_id])
    |> validate_required([:code, :user_id])
  end
end
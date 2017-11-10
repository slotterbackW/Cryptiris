defmodule CryptirisWeb.UserController do
  use CryptirisWeb, :controller
  alias Cryptiris.Accounts
  
  action_fallback CryptirisWeb.FallbackController

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def create(conn, %{"user" => user_params}) do
    case Accounts.create_user(user_params) do
      {:ok, user} ->
      	conn
      	|> put_status(:created)
      	|> render("show.json", user: user)
      {:error, %Ecto.Changeset{} = changeset} ->
      	conn
      	|> put_status(:unprocessable_entity)
        |> render(CryptirisWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)
    case Accounts.update_user(user, user_params) do
      {:ok, user} ->
        conn
      	|> put_status(:created)
      	|> render("show.json", user: user)
      {:error, %Ecto.Changeset{} = changeset} ->
        conn
      	|> put_status(:unprocessable_entity)
        |> render(CryptirisWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    {:ok, _user} = Accounts.delete_user(user)
    render(conn, "success.json", message: "User deleted successfully.")
  end
end

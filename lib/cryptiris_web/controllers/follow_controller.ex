defmodule CryptirisWeb.FollowController do
  use CryptirisWeb, :controller

  alias Cryptiris.Currency
  alias Cryptiris.Currency.Follow

  action_fallback CryptirisWeb.FallbackController

  def index(conn, _params) do
    codes = Currency.list_follows_by_user(conn.user.id)
    render(conn, "codes.json", codes: codes)
  end

  def create(conn, %{"code" => code}) do
    with {:ok, %Follow{} = follow} <- Currency.create_follow(%{ "code" => code, "user_id" => conn.user.id}) do
      conn
      |> put_status(:created)
      |> render("show.json", follow: follow)
    end
  end

  def show(conn, %{"id" => id}) do
    follow = Currency.get_follow!(id)
    render(conn, "show.json", follow: follow)
  end

  def update(conn, %{"id" => id, "follow" => follow_params}) do
    follow = Currency.get_follow!(id)

    with {:ok, %Follow{} = follow} <- Currency.update_follow(follow, follow_params) do
      render(conn, "show.json", follow: follow)
    end
  end

  def delete(conn, %{"code" => code}) do
    follow = Currency.get_follow_by_code!(code, conn.user.id)
    with {:ok, %Follow{}} <- Currency.delete_follow(follow) do
      send_resp(conn, :no_content, "")
    end
  end
end

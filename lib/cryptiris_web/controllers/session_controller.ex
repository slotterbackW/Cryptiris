defmodule CryptirisWeb.SessionController do
	use CryptirisWeb, :controller
  alias Cryptiris.Accounts

  action_fallback CryptirisWeb.FallbackController

  def login(conn, %{"email" => email, "password" => password}) do
    user = Accounts.get_and_auth_user(email, password)

    if user do
      conn
      |> put_session(:user_id, user.id)
      |> render("show.json", user: user)
    else
      conn
      |> put_session(:user_id, nil)
      |> put_status(:unprocessable_entity)
      |> render("error.json", message: "Bad email or password!")
    end
  end

  def logout(conn, _params) do 
  	conn
    |> put_session(:user_id, nil)
    |> render("success.json", message: "Successfully logged out!")
  end

end
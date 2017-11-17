defmodule CryptirisWeb.UserView do
  use CryptirisWeb, :view
  alias CryptirisWeb.UserView

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email
    }
  end

  def render("success.json", %{message: message}) do
    %{data: message}
  end
end

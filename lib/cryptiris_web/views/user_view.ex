defmodule CryptirisWeb.UserView do
  use CryptirisWeb, :view

  def render("show.json", %{user: user}) do
    %{data: render_one(user, ExchangeView, "user.json")}
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

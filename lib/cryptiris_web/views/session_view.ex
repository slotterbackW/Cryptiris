defmodule CryptirisWeb.SessionView do
  use CryptirisWeb, :view
  alias CryptirisWeb.UserView

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("success.json", %{message: message}) do
    %{data: message}
  end

  def render("error.json", %{message: message}) do
    %{data: message}
  end
end
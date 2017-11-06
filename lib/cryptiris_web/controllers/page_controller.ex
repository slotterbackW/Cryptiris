defmodule CryptirisWeb.PageController do
  use CryptirisWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

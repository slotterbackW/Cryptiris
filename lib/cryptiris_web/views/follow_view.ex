defmodule CryptirisWeb.FollowView do
  use CryptirisWeb, :view
  alias CryptirisWeb.FollowView

  def render("index.json", %{follows: follows}) do
    %{data: render_many(follows, FollowView, "follow.json")}
  end

  def render("codes.json", %{codes: codes}) do
    %{data: codes}
  end

  def render("show.json", %{follow: follow}) do
    %{data: render_one(follow, FollowView, "follow.json")}
  end

  def render("follow.json", %{follow: follow}) do
    %{id: follow.id,
      code: follow.code}
  end
end

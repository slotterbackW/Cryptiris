defmodule CryptirisWeb.ChatChannel do
  use CryptirisWeb, :channel
  alias Phoenix.Socket
  Cryptiris.Social

  def join("chat:" <> topic, payload, socket) do
    if authorized?(payload) do
      Socket.assign(socket, :topic, topic)
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("new", %{"message" => message}, socket) do
    # case Social.create_message(message_params) do
    #   {:ok, message} ->
    #     broadcast socket, "new", message
    #   {:error, %Ecto.Changeset{} = changeset} ->
    #     broadcast socket, "error"
    # end
    broadcast socket, "new", %{"message" => message}
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end

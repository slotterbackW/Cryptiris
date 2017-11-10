defmodule CryptirisWeb.Router do
  use CryptirisWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", CryptirisWeb do
    pipe_through :browser # Use the default browser stack
  end

  scope "/api", CryptirisWeb do
    pipe_through :api
    resources "/exchanges", ExchangeController, only: [:show, :index]
    resources "/users", UserController, except: [:index, :new, :edit]
  end
end

defmodule CryptirisWeb.Router do
  use CryptirisWeb, :router
  import CryptirisWeb.Plugs

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_user
  end

  scope "/", CryptirisWeb do
    pipe_through :browser # Use the default browser stack
  end

  scope "/api", CryptirisWeb do
    pipe_through :api

    resources "/users", UserController, except: [:index, :new, :edit]
    resources "/follows", UserController, except: [:new, :edit]
    resources "/exchanges", ExchangeController, only: [:show, :index]
    resources "/crypto_currencies", CryptoCurrencyController, only: [:show, :index]

    get "/prices", ExchangeController, :prices
    get "/historical_prices", ExchangeController, :fiveDayPrices
    post "/login", SessionController, :login
    delete "/logout", SessionController, :logout
  end
end

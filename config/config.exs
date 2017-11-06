# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :cryptiris,
  ecto_repos: [Cryptiris.Repo]

# Configures the endpoint
config :cryptiris, CryptirisWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "E4QrLsyfDOVQYDT4iwxIFuzgkjzjCKlUpaJ1OCEMcPvYYHvFG5j61Zb5FLiM20IK",
  render_errors: [view: CryptirisWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Cryptiris.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

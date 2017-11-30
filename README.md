# Cryptiris

To start your Phoenix server:

On windows use the run command with:
`cmd /K "C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat" amd64`
to open a shell with all the proper config to compile this project
Source: https://github.com/riverrun/comeonin/wiki/Requirements 


  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Then navigate to `priv/frontend`, run `yarn` then `yarn build`
then `yarn start`

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

defmodule Preact.Repo do
  use Ecto.Repo,
    otp_app: :preact,
    adapter: Ecto.Adapters.Postgres
end

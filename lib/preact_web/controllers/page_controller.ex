defmodule PreactWeb.PageController do
  use PreactWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

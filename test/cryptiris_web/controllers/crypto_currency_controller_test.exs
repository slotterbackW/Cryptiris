defmodule CryptirisWeb.CryptoCurrencyControllerTest do
  use CryptirisWeb.ConnCase

  alias Cryptiris.Currency
  alias Cryptiris.Currency.CryptoCurrency

  @create_attrs %{desc: "some desc", name: "some name", price: "120.5"}
  @update_attrs %{desc: "some updated desc", name: "some updated name", price: "456.7"}
  @invalid_attrs %{desc: nil, name: nil, price: nil}

  def fixture(:crypto_currency) do
    {:ok, crypto_currency} = Currency.create_crypto_currency(@create_attrs)
    crypto_currency
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all crypto_currencies", %{conn: conn} do
      conn = get conn, crypto_currency_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create crypto_currency" do
    test "renders crypto_currency when data is valid", %{conn: conn} do
      conn = post conn, crypto_currency_path(conn, :create), crypto_currency: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, crypto_currency_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "desc" => "some desc",
        "name" => "some name",
        "price" => "120.5"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, crypto_currency_path(conn, :create), crypto_currency: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update crypto_currency" do
    setup [:create_crypto_currency]

    test "renders crypto_currency when data is valid", %{conn: conn, crypto_currency: %CryptoCurrency{id: id} = crypto_currency} do
      conn = put conn, crypto_currency_path(conn, :update, crypto_currency), crypto_currency: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, crypto_currency_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "desc" => "some updated desc",
        "name" => "some updated name",
        "price" => "456.7"}
    end

    test "renders errors when data is invalid", %{conn: conn, crypto_currency: crypto_currency} do
      conn = put conn, crypto_currency_path(conn, :update, crypto_currency), crypto_currency: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete crypto_currency" do
    setup [:create_crypto_currency]

    test "deletes chosen crypto_currency", %{conn: conn, crypto_currency: crypto_currency} do
      conn = delete conn, crypto_currency_path(conn, :delete, crypto_currency)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, crypto_currency_path(conn, :show, crypto_currency)
      end
    end
  end

  defp create_crypto_currency(_) do
    crypto_currency = fixture(:crypto_currency)
    {:ok, crypto_currency: crypto_currency}
  end
end

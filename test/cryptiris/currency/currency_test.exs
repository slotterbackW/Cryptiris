defmodule Cryptiris.CurrencyTest do
  use Cryptiris.DataCase

  alias Cryptiris.Currency

  describe "crypto_currencies" do
    alias Cryptiris.Currency.CryptoCurrency

    @valid_attrs %{desc: "some desc", name: "some name", price: "120.5"}
    @update_attrs %{desc: "some updated desc", name: "some updated name", price: "456.7"}
    @invalid_attrs %{desc: nil, name: nil, price: nil}

    def crypto_currency_fixture(attrs \\ %{}) do
      {:ok, crypto_currency} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Currency.create_crypto_currency()

      crypto_currency
    end

    test "list_crypto_currencies/0 returns all crypto_currencies" do
      crypto_currency = crypto_currency_fixture()
      assert Currency.list_crypto_currencies() == [crypto_currency]
    end

    test "get_crypto_currency!/1 returns the crypto_currency with given id" do
      crypto_currency = crypto_currency_fixture()
      assert Currency.get_crypto_currency!(crypto_currency.id) == crypto_currency
    end

    test "create_crypto_currency/1 with valid data creates a crypto_currency" do
      assert {:ok, %CryptoCurrency{} = crypto_currency} = Currency.create_crypto_currency(@valid_attrs)
      assert crypto_currency.desc == "some desc"
      assert crypto_currency.name == "some name"
      assert crypto_currency.price == Decimal.new("120.5")
    end

    test "create_crypto_currency/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Currency.create_crypto_currency(@invalid_attrs)
    end

    test "update_crypto_currency/2 with valid data updates the crypto_currency" do
      crypto_currency = crypto_currency_fixture()
      assert {:ok, crypto_currency} = Currency.update_crypto_currency(crypto_currency, @update_attrs)
      assert %CryptoCurrency{} = crypto_currency
      assert crypto_currency.desc == "some updated desc"
      assert crypto_currency.name == "some updated name"
      assert crypto_currency.price == Decimal.new("456.7")
    end

    test "update_crypto_currency/2 with invalid data returns error changeset" do
      crypto_currency = crypto_currency_fixture()
      assert {:error, %Ecto.Changeset{}} = Currency.update_crypto_currency(crypto_currency, @invalid_attrs)
      assert crypto_currency == Currency.get_crypto_currency!(crypto_currency.id)
    end

    test "delete_crypto_currency/1 deletes the crypto_currency" do
      crypto_currency = crypto_currency_fixture()
      assert {:ok, %CryptoCurrency{}} = Currency.delete_crypto_currency(crypto_currency)
      assert_raise Ecto.NoResultsError, fn -> Currency.get_crypto_currency!(crypto_currency.id) end
    end

    test "change_crypto_currency/1 returns a crypto_currency changeset" do
      crypto_currency = crypto_currency_fixture()
      assert %Ecto.Changeset{} = Currency.change_crypto_currency(crypto_currency)
    end
  end
end

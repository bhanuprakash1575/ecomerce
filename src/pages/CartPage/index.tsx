import AppInput from "../../components/AppInput";
import FancyButton from "../../components/FancyButton";
import BillingSummary from "../../components/BillingSummary";

export default function CartPage() {
  return (
    <main className="container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-cell">
              <button className="remove-btn">✖</button>
              <img src="/console.png" alt="LCD Monitor" />
              <span>LCD Monitor</span>
            </td>
            <td>$650</td>
            <td className="">
              <Counter />
            </td>
            <td>$650</td>
          </tr>
          <tr>
            <td className="product-cell">
              <button className="remove-btn">✖</button>
              <img src="/console.png" alt="H1 Gamepad" />
              <span>H1 Gamepad</span>
            </td>
            <td>$550</td>
            <td>
              <Counter />
            </td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <FancyButton btnType="secondary">Return To Shop</FancyButton>
        <FancyButton btnType="secondary">Update Cart</FancyButton>
      </div>

      <div className="flex justify-between mt-16">
        <div className="flex items-center h-fit  gap-4 w-1/3">
            <AppInput type="text" placeholder="Coupon Code" background="secondary"/>
            <FancyButton>Apply Coupon</FancyButton>
        </div>
        <div className="border flex flex-col gap-4 p-4 w-1/3 rounded">
            <p>Cart Total</p>
            <BillingSummary/>
            <FancyButton className="mx-auto">Proceed to Checkout</FancyButton>
        </div>
      </div>
    </main>
  );
}

const Counter = () => {
  return (
    <div className="border flex w-fit rounded overflow-hidden">
      <p className="px-1 cursor-pointer  hover:bg-[var(--myred)]">-</p>
      <p className="px-1">{100}</p>
      <p className="px-1 cursor-pointer hover:bg-[var(--myred)]">+</p>
    </div>
  );
};

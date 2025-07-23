import AppInput from "../../components/AppInput";
import AppCheckbox from "../../components/AppCheckbox";
import FancyButton from "../../components/FancyButton";

export default function CheckoutPage() {
  return (
    <div className="container">
      <h1 className="text-4xl py-14">Billing Details</h1>

      <div className="flex gap-16 items-center">
        <form className="w-1/3 flex flex-col gap-3">
          <AppInput type="text" label="First Name" isRequired />
          <AppInput type="text" label="Company Name" isRequired />
          <AppInput type="text" label="Street Address" isRequired />
          <AppInput type="text" label="Appartment, floor, etc (optional)" />
          <AppInput type="text" label="Town/City" isRequired />
          <AppInput type="phone" label="Phone Number" isRequired />
          <AppInput type="email" label="Email Address" isRequired />
          <AppCheckbox />
        </form>
        <div className="w-2/3 flex flex-col gap-4">
          <ul className="orderitems-list overflow-scroll h-50">
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
            <li>
              <div>
                <img src="/console.png" alt="console" />
                <p>H1 Gamepad</p>
              </div>
              <p>${1290}</p>
            </li>
          </ul>

          <ul className="total-billing-section">
            <li className="border-b">
              <p>Subtotal:</p>
              <p>${120}</p>
            </li>
            <li className="border-b">
              <p>Shipping:</p>
              <p>Free</p>
            </li>
            <li>
              <p>Total:</p>
              <p>${1750}</p>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <input type="radio" name="payment-mode" id="payment-mode-bank" />
            <label htmlFor="payment-mode-bank">Bank</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment-mode" id="payment-mode-cod" />
            <label htmlFor="payment-mode-cod">Cash On Delivery</label>
          </div>

          <div className="flex gap-2">
            <AppInput
              type="text"
              placeholder="Coupon Code"
              className="h-full"
              background="secondary"
            />
            <FancyButton>Apply Coupon</FancyButton>
          </div>

          <FancyButton>Place Order</FancyButton>
        </div>
      </div>
    </div>
  );
}

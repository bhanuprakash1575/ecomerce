
export default function BillingSummary() {
  return (
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
  );
}

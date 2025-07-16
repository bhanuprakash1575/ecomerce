import AppInput from "../../components/AppInput";
import FancyButton from "../../components/FancyButton";
import Searchbar from "../../components/Searchbar";

export default function MyAccount() {
  return (
    <div className="container">
      <p className="text-end py-8">Hello User!</p>
      <div className="flex gap-8">
        <div className="account-nav-sidebar flex flex-col gap-2 w-1/4">
          <p>Manage My Account</p>
          <ul>
            <li>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Option</li>
          </ul>
          <p>My Orders</p>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <p>My Wishlist</p>
        </div>
        <form className="px-16 py-8 flex-1 flex flex-col gap-4 fancy-shadow">
          <p className="text-xl text-[var(--myred)]">Edit Your Profile</p>

          <div className="flex gap-4">
            <AppInput
              type="text"
              label="First Name"
              placeholder="Enter First Name"
            />
            <AppInput
              type="text"
              label="Last Name"
              placeholder="Enter last Name"
            />
          </div>
          <div className="flex gap-4">
            <AppInput
              type="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <AppInput
              type="text"
              label="Address"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="flex flex-col gap-3">
            <AppInput
              type="password"
              label="Password Changes"
              placeholder="Current Password"
            />
            <AppInput type="password" placeholder="New Password" />
            <AppInput type="password" placeholder="Confrim New Password" />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <p>Cancel</p>
            <FancyButton>Save Changes</FancyButton>
          </div>
        </form>
      </div>
    </div>
  );
}

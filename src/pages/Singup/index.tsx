import FancyButton from "../../components/FancyButton";
import { FaGoogle } from "react-icons/fa";
import FancyInput from "../../components/FancyInput";
import { useState, type ReactNode } from "react";

export default function SignUp() {
  const [form, setForm] = useState("signup");

  const toggleForm = () => {
    setForm(prev => prev=="signup" ? "login" : "signup")
  }

  return (
    <div className="flex items-center mt-8 mx-auto">
      <img className="w-3/5" src="/SignUp.jpg" alt="signup" />
      {form != "login" ? (
        <FormComp
          title="Create an account"
          description="Enter your details below"
          Form={<SingupForm toggleForm={toggleForm}/>}
        />
      ) : (
        <FormComp
          title="Log in to Exclusive"
          description="Enter your details below"
          Form={<LoginForm toggleForm={toggleForm} />}
        />
      )}
    </div>
  );
}

interface FormProps {
  title: string;
  description: string;
  Form: ReactNode;
}

const FormComp = ({ title, description, Form }: FormProps) => {
  return (
    <div className="flex flex-col mx-auto">
      <div>
        <h1 className="text-4xl mb-2">{title}</h1>
        <p>{description}</p>
      </div>
      {Form}
    </div>
  );
};


interface singupFormProps {
    toggleForm : () => void
}

const SingupForm = ({toggleForm} : singupFormProps) => {
  return (
    <>
      <form className="signup-form">
        <FancyInput label="Name" />
        <FancyInput label="Email or Phone Number" />
        <FancyInput label="Password" />
      </form>
      <div className=" mt-6 flex flex-col gap-4">
        <FancyButton className="w-full py-0">Create Account</FancyButton>
        <FancyButton isPrimary={false} className="py-0 w-full">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <FaGoogle /> Sign Up with Google
          </div>
        </FancyButton>
      </div>
      <div className="text-center mt-4">
        <span>Already have account?</span>
        <span className="ml-2 border-b cursor-pointer" onClick={toggleForm}>Log in</span>
      </div>
    </>
  );
};

interface loginFormProps {
  toggleForm: () => void;
}

const LoginForm = ({toggleForm} : loginFormProps) => {
  return (
    <>
      <form className="signup-form">
        <FancyInput label="Email or Phone Number" />
        <FancyInput label="Password" />
      </form>
      <div className="flex items-center justify-between mt-8">
        <FancyButton className="!mt-0 ml-0">Log In</FancyButton>
        <p className="text-[var(--myred)]">Forget Password?</p>
      </div>
      <p className="mx-auto mt-8 text-[var(--myred)] cursor-pointer" onClick={toggleForm}>Create New Account</p>
    </>
  );
};

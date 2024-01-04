import { BACK_IMAGE, LOGO } from "../utils/constants";
import AuthForm from "./form/AuthForm"

const Auth = () => {
  return (
    <div>
      <img
        src={BACK_IMAGE}
        alt="bgImage"
      />
      <AuthContent className="absolute inset-0" />
    </div>
  );
};

export default Auth;

const AuthContent = ({ className }) => {
  return (
    <div className={className}>
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div className="pl-8 w-full bg-gradient-to-b from-black">
          <img
            className="w-56"
            src={LOGO}
            alt="netflix-logo"
          />
        </div>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

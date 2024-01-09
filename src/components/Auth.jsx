import AuthForm from "./form/AuthForm"

const Auth = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh]">
      <img
        className="size-full object-cover"
        src={import.meta.env.VITE_BACK_IMAGE}
        alt="bgImage"
      />
      </div>
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
            src={import.meta.env.VITE_LOGO}
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

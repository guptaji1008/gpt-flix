import { useState } from "react";
import Form from "./form/Form";
import Input from "./form/Input";

const Auth = () => {
    return (
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bgImage"
          />
          <AuthContent className="absolute inset-0" />
        </div>
      );
}

export default Auth

const AuthContent = ({ className }) => {
    return (
      <div className={className}>
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="pl-8 w-full bg-gradient-to-b from-black">
            <img
              className="w-56"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
  
  const AuthForm = () => {
  
    const [login, setLogin] = useState(true)
  
    return (
      <div className="bg-black bg-opacity-80 w-fit p-10 rounded">
        <Form authType={login ? "Sign In" : "Sign Up"}>
          {!login && <Input placeholder="Name" type="text"/>}
          <Input placeholder="Email" type="text"/>
          <Input placeholder="Password" type="password"/>
          {!login && <Input placeholder="Confirm Password" type="text"/>}
        </Form>
        <div className="flex text-gray-200 w-80 items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
              <input type="checkbox" id="rememberme" />
              <label htmlFor="rememberme">Remember me</label>
          </div>
          <a className="text-gray-200 hover:underline" href="#">Need help</a>
        </div>
        <p className="text-slate-300 mt-7">{login ? "New to Netflix?" : "Already have an account?"} <button className="text-gray-200 hover:underline" onClick={() => setLogin(!login)}>{login ? "Sign Up Now" : "Sign In Now"}</button> </p>
      </div>
    );
  };

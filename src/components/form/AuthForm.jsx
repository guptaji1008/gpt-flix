import { useState } from "react";
import { validateLogin, validateSignUp } from "../../utils/validation";
import Form from "./Form";
import Input from "./Input";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firbase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/slices/userSlice";

const AuthForm = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, setIsPending] = useState(false);

  const dispatch = useDispatch()

  const handleToggleButton = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConPassword("");
    setLogin(!login);
    setErrorMsg("");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "conPassword") {
      setConPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    if (login) {
      const errorMessage = validateLogin(email, password);
      if (errorMessage) {
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
        setIsPending(false)
        return setErrorMsg(errorMessage);
      }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setIsPending(false);
          // const user = userCredential.user;
        })
        .catch((error) => {
          setIsPending(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setTimeout(() => {
            setErrorMsg("");
          }, 5000);
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      const errorMessage = validateSignUp(name, email, password, conPassword);
      if (errorMessage) {
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
        setIsPending(false)
        return setErrorMsg(errorMessage);
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up
          setIsPending(false);
          // const user = userCredential.user;
          await updateProfile(auth.currentUser, {
            displayName: name
          })
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, name: displayName }));
        })
        .catch((error) => {
          setIsPending(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setTimeout(() => {
            setErrorMsg("");
          }, 5000);
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black bg-opacity-70 w-fit p-10 rounded">
      <Form
        authType={login ? "Sign In" : "Sign Up"}
        onSubmit={handleSubmit}
        errorMsg={errorMsg}
        isPending={isPending}
      >
        {!login && (
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        )}
        <Input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {!login && (
          <Input
            placeholder="Confirm Password"
            name="conPassword"
            type="text"
            value={conPassword}
            onChange={handleChange}
          />
        )}
      </Form>
      <div className="flex text-gray-200 w-80 items-center justify-between mt-2">
        <div className="flex items-center space-x-1">
          <input type="checkbox" id="rememberme" />
          <label htmlFor="rememberme">Remember me</label>
        </div>
        <a className="text-gray-200 hover:underline" href="#">
          Need help
        </a>
      </div>
      <p className="text-slate-300 mt-7">
        {login ? "New to Netflix?" : "Already have an account?"}{" "}
        <button
          className="text-gray-200 hover:underline"
          onClick={handleToggleButton}
          disabled={isPending}
        >
          {login ? "Sign Up Now" : "Sign In Now"}
        </button>{" "}
      </p>
    </div>
  );
};

export default AuthForm;

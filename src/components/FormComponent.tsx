import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthDataModel } from "../models/AuthDataModel";
import { authService } from "../services/api.service";

const FormComponent = () => {
  const { handleSubmit, register } = useForm<AuthDataModel>({
    defaultValues: { username: "userSZ1", password: "P@$$word1" },
  });

  const [isAuthState, setIsAuthState] = useState<boolean>(
    !!localStorage.getItem("tokenPair")
  );

  const authenticate = async (formData: AuthDataModel) => {
    const isAuth = await authService.authentication(formData);
    setIsAuthState(isAuth);
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthState(false);
  };

  return (
    <div>
      {isAuthState ? (
        <div>
          <p>Hello!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Login Form</h3>
          <form onSubmit={handleSubmit(authenticate)}>
            <input {...register("username")} />
            <input {...register("password")} />
            <button>Auth</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;

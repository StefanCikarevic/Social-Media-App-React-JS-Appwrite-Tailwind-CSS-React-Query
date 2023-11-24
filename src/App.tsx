import "./globals.css";
import { Route, Routes } from "react-router-dom";

import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout.tsx";
import SignInForm from "./_auth/forms/SigninForm.tsx";
import SignupForm from "./_auth/forms/SignupForm.tsx";
import RootLayout from "./_root/RootLayout.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          {/*  public routes */}
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          {/*  private routes */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;

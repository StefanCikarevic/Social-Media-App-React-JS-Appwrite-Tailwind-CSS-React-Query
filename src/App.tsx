import "./globals.css";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  Explore,
  Saved,
  AllUsers,
  CreatePost,
  EditPost,
  PostDetails,
  Profile,
  UpdateProfile,
} from "./_root/pages";
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;

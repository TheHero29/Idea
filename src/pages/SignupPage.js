import React from "react";
import { useState } from "react";
import { RegisterUser } from "../calls/users";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create the data object to send to the backend
    const formData = {
      "user_name":username,
      "email":email,
      "password":password,
    };

    const formDataJson = JSON.stringify(formData);
    try {
      // Send a POST request to your backend API
      const response = await RegisterUser(formDataJson);

      // Check if the response is ok
      if (!response) {
        throw new Error("Network response was not ok");
      }

      // check success status
      if(!response.data.success){
        throw new Error(response.data.message);
      }

      // Handle successful Signup, redirect, etc.
      alert("Signup successful");
      navigate("/feed");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-repeat bg-[length:50px] bg-muted px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign up{" "}
          </h1>
          <p className="mt-2 text-muted-foreground">Welcome to idea-dump</p>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <form className="p-6 space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="text"
              >
                Username
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="username"
                placeholder="john_79"
                required=""
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="johndoe@example.com"
                required=""
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="flex items-center p-6">
            <button 
            onClick={handleSubmit}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

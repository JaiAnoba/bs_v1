import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the extracted form components
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import ForgotPasswordForm from "./auth/ForgotPasswordForm";
import GuestLoginForm from "./auth/GuestLoginForm";

const AuthForms = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // Form submission handlers
  const onLoginSubmit = (data: any) => {
    setFormError(null);
    // Simulate login - replace with actual authentication logic
    console.log("Login data:", data);
    // Simulate error for demonstration
    // setFormError('Invalid username or password');
    setFormSuccess("Login successful! Redirecting...");
    setIsRedirecting(true);

    // Simulate redirect to home page after successful login
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const onRegisterSubmit = (data: any) => {
    setFormError(null);
    // Simulate registration - replace with actual registration logic
    console.log("Registration data:", data);
    setFormSuccess(
      "Registration successful! Please check your email for confirmation.",
    );

    // Automatically switch to login tab after successful registration
    setTimeout(() => {
      setActiveTab("login");
      setFormSuccess(null);
    }, 2000);
  };

  const onForgotPasswordSubmit = (data: any) => {
    setFormError(null);
    // Simulate password reset - replace with actual password reset logic
    console.log("Forgot password data:", data);
    setFormSuccess("Password reset link sent to your email!");
  };

  const onGuestSubmit = (data: any) => {
    setFormError(null);
    // Simulate guest login - replace with actual guest login logic
    console.log("Guest login data:", data);
    setFormSuccess("Guest access granted! Redirecting...");
    setIsRedirecting(true);

    // Simulate redirect to home page after successful guest login
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Bill Splitting System
            </CardTitle>
            <CardDescription className="text-center">
              Manage and split expenses with friends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList
                className="grid grid-cols-4 mb-6"
                data-state={isRedirecting ? "disabled" : "active"}
              >
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="forgot">Reset</TabsTrigger>
                <TabsTrigger value="guest">Guest</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <LoginForm
                  onSuccess={onLoginSubmit}
                  error={formError}
                  success={formSuccess}
                />
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <RegisterForm
                  onSuccess={onRegisterSubmit}
                  error={formError}
                  success={formSuccess}
                />
              </TabsContent>

              {/* Forgot Password Form */}
              <TabsContent value="forgot">
                <ForgotPasswordForm
                  onSuccess={onForgotPasswordSubmit}
                  error={formError}
                  success={formSuccess}
                />
              </TabsContent>

              {/* Guest Login Form */}
              <TabsContent value="guest">
                <GuestLoginForm
                  onSuccess={onGuestSubmit}
                  error={formError}
                  success={formSuccess}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {activeTab === "login" && (
              <div className="text-center w-full">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("register");
                      setFormError(null);
                      setFormSuccess(null);
                    }}
                    className="text-primary hover:underline font-medium inline-flex items-center"
                    disabled={isRedirecting}
                  >
                    Register now <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </p>
              </div>
            )}
            {activeTab === "register" && (
              <div className="text-center w-full">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("login");
                      setFormError(null);
                      setFormSuccess(null);
                    }}
                    className="text-primary hover:underline font-medium inline-flex items-center"
                    disabled={isRedirecting}
                  >
                    Login <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </p>
              </div>
            )}
            {activeTab === "guest" && (
              <div className="text-center w-full">
                <p className="text-sm text-muted-foreground">
                  Want to create an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("register");
                      setFormError(null);
                      setFormSuccess(null);
                    }}
                    className="text-primary hover:underline font-medium inline-flex items-center"
                    disabled={isRedirecting}
                  >
                    Register <UserPlus className="ml-1 h-4 w-4" />
                  </button>
                </p>
              </div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthForms;

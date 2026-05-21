"use client";
import { PersonPlus, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  InputGroup,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [value, setValue] = React.useState();
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.image,
      password: userData.password,
    });

    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }

    toast.success("Account created successfully. 🎉");
    router.push("/auth/login");
  };

  //   hendel google auth

  const handelgoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[28px] sm:rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-5 sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Create Account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Join our healthcare platform today
          </p>
        </div>

        <Surface className="bg-transparent shadow-none">
          <Form onSubmit={onSubmit} className="space-y-6">
            <Fieldset>
              <Fieldset.Group className="space-y-5">
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </Label>

                  <Input
                    placeholder="John Doe"
                    variant="secondary"
                    className="h-12 rounded-sm w-full"
                  />

                  <FieldError />
                </TextField>

                <TextField isRequired name="email" type="email">
                  <Label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </Label>

                  <Input
                    placeholder="john@example.com"
                    variant="secondary"
                    className="h-12 rounded-sm w-full"
                  />

                  <FieldError />
                </TextField>

                <TextField isRequired name="image">
                  <Label className="mb-2 block text-sm font-semibold text-slate-700">
                    Image URL
                  </Label>

                  <Input
                    aria-label="Image URL"
                    placeholder="https://example.com/photo.png"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="h-12 rounded-sm w-full"
                  />

                  <FieldError />
                </TextField>

                <TextField
                  className="rounded-sm"
                  name="password"
                  isRequired
                  validate={(value) => {
                    if (value.length < 6) {
                      return "Password must be at least 6 characters";
                    }

                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }

                    if (!/[a-z]/.test(value)) {
                      return "Password must contain at least one lowercase letter";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </Label>

                  <InputGroup className="w-full">
                    <InputGroup.Input
                      type={isVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 rounded-sm w-full pr-12"
                    />

                    <InputGroup.Suffix>
                      <Button
                        type="button"
                        isIconOnly
                        aria-label={
                          isVisible ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        className="rounded-sm"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>

                  <Description className="mt-2 text-xs sm:text-sm text-slate-500 ">
                    Must contain at least 6 characters, 1 uppercase, 1 lowercase
                    and 1 number
                  </Description>

                  <FieldError />
                </TextField>
              </Fieldset.Group>

              <Fieldset.Actions className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-sm"
                >
                  <PersonPlus className="size-5" />
                  Sign Up
                </Button>

                <Button
                  type="reset"
                  variant="tertiary"
                  className="h-12 w-full rounded-sm"
                >
                  Cancel
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-slate-400">OR</span>
            </div>
          </div>

          <Button
            onClick={handelgoogle}
            className="w-full h-12 rounded-sm border border-slate-200 bg-white hover:bg-slate-50"
            variant="tertiary"
          >
            <Icon icon="devicon:google" className="text-xl" />
            Continue with Google
          </Button>

          <div className="pt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              className="font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
              href="/auth/login"
            >
              Login
            </Link>
          </div>
        </Surface>
      </div>
    </div>
  );
};

export default SignUp;

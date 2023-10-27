import React from "react";
import { ROUTES } from "@/shared/constants/routes";
import Button from "@/shared/ui/button";
import LinkUI from "@/shared/ui/link";
import TextField from "@/shared/ui/text-field";
import { UseSignUpForm } from "../model/use-sign-up-form";

export const SignUpForm = () => {
  const { register, errorMsg, handleSubmit, isLoading } = UseSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <TextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <Button disabled={isLoading} variant="primary">
        Sign Up
      </Button>
      <LinkUI className="text-center" href={ROUTES.SIGNIN}>
        Sign In
      </LinkUI>
      {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
    </form>
  );
};

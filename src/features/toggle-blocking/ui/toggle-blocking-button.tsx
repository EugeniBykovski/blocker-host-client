import Button from "@/shared/ui/button";
import React from "react";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();
  if (!isReady) return null;

  return (
    <Button
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable" : "Enable"}
    </Button>
  );
};

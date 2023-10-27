import Button from "@/shared/ui/button";
import { useSignOut } from "../model/use-sign-out";

export const SignOutButton = () => {
  const { isLoading, signOut } = useSignOut();

  return (
    <Button variant="outline" disabled={isLoading} onClick={() => signOut({})}>
      Sign Out
    </Button>
  );
};

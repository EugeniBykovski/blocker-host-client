import Header from "@/shared/ui/header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";

export default function Home() {
  const { data } = useSessionQuery();

  return (
    <main className={`min-h-screen`}>
      <Header
        right={
          <div>
            {data?.email}
            <SignOutButton />{" "}
          </div>
        }
      />
    </main>
  );
}

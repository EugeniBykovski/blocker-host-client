import Header from "@/shared/ui/header";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/widgets/profile";

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <Header right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5">
          <ToggleBlockingButton />
        </aside>

        <main>block list</main>
      </div>
    </div>
  );
}

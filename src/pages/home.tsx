import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import Button from "@/shared/ui/button";
import TextField from "@/shared/ui/text-field";
import SelectField from "@/shared/ui/select-field";
import LinkUI from "@/shared/ui/link";
import Spinner from "@/shared/ui/spinner";
import PageSpinner from "@/shared/ui/page-spinner";
import Header from "@/shared/ui/header";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className={`min-h-screen`}>
      {data?.email}

      <Header right={<div>{data?.email}</div>} />

      <Button variant="primary">primary</Button>
      <Button disabled variant="primary">
        primary disabled
      </Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="outline">outline</Button>
      <TextField
        label="Text field"
        inputProps={{ placeholder: "Enter name..." }}
      />
      <TextField
        label="Text field"
        error="Error message"
        inputProps={{ placeholder: "Enter email" }}
      />
      <TextField inputProps={{ placeholder: "Enter password" }} />

      <SelectField
        selectProps={{ placeholder: "Enter exail" }}
        options={[{ value: "1", label: "options" }]}
      />

      <LinkUI href={"/"}>Some link</LinkUI>

      <Spinner className="text-teal-600 w-10 h-10" />
      {/* <PageSpinner /> */}
    </main>
  );
}

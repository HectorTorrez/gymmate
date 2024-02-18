import { Button, Input } from "@nextui-org/react";

export default function app() {
  return (
    <section className="flex items-center justify-center m-auto gap-2 max-w-[500px]  px-6">
      <Input label="Send invitation" size="sm" variant="bordered" />
      <Button size="lg" className="bg-blue-500 text-white font-semibold">
        Send
      </Button>
    </section>
  );
}

"use client";
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
import { useFieldArray, useForm } from "react-hook-form";

export default function App() {
  const { control, register } = useForm({
    defaultValues: {
      routine: [{ exercise: "", sets: 0, reps: "", weight: 0 }],
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: "routine",
  });

  return (
    <section>
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => {
            append({ exercise: "", sets: 0, reps: "", weight: 0 });
          }}
        >
          Add new Exercise
        </Button>
      </div>
      <form action="#">
        <Accordion variant="bordered" keepContentMounted>
          {fields.map((item, index) => {
            // const uniqueKey = `accordion-${index}`;
            return (
              <AccordionItem
                key={item.id}
                aria-label={item.id}
                title={`${index + 1} Exercise `}
              >
                <section className="flex flex-col gap-3">
                  <Input
                    placeholder="Squat"
                    {...register(`routine.${index}.exercise`)}
                    type="text"
                    label="Exercise name"
                    variant="bordered"
                  />
                  <section className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="3"
                      {...register(`routine.${index}.sets`)}
                      type="text"
                      label="Sets"
                      variant="bordered"
                    />
                    <Input
                      placeholder="10-12"
                      {...register(`routine.${index}.reps`)}
                      type="Reps"
                      label={`Exercise `}
                      variant="bordered"
                    />
                  </section>
                  <Input
                    placeholder="100"
                    {...register(`routine.${index}.weight`)}
                    type="number"
                    label="Weight"
                    variant="bordered"
                  />
                </section>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="mt-10">
          <Button
            variant="solid"
            size="lg"
            className="bg-blue-700 text-white w-full"
          >
            Send routine
          </Button>
        </div>
      </form>
    </section>
  );
}

"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useFieldArray, useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";

export default function App() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: errors,
  } = useForm({
    defaultValues: {
      routine: [{ exercise: "", sets: 0, reps: "", weight: 0, unit: "" }],
      date: "",
      note: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "routine",
  });

  const inputNote = watch("note");

  const onSubmit = (data) => {
    console.log(data);
    console.log("here");
  };

  console.log(fields);

  return (
    <section>
      <div className="max-w-[200px] flex flex-col gap-2 justify-center m-auto my-10">
        <p>Select a date </p>
        <Input
          isRequired
          {...register("date", { required: true })}
          type="date"
          variant="bordered"
        />
      </div>
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => {
            append({ exercise: "", sets: 0, reps: "", weight: 0, unit: "" });
          }}
        >
          Add new Exercise
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Textarea
            label="Note"
            placeholder="Enter your note"
            className="mb-2 "
            maxRows={5}
            maxLength={200}
            {...register("note")}
          />
          <span className="flex justify-end">
            {inputNote?.length || 0} / 200
          </span>
        </div>
        <Accordion
          variant="bordered"
          keepContentMounted
          defaultExpandedKeys={[`${fields[0].id}`]}
        >
          {fields.map((item, index) => {
            return (
              <AccordionItem
                key={item.id}
                aria-label={item.id}
                title={`${index + 1} Exercise `}
              >
                <section className="flex flex-col gap-3">
                  <Input
                    isRequired
                    placeholder="Squat"
                    {...register(`routine.${index}.exercise`, {
                      required: true,
                    })}
                    type="text"
                    label="Exercise name"
                    variant="bordered"
                  />

                  <section className="grid grid-cols-2 gap-2">
                    <Input
                      isRequired
                      placeholder="3"
                      {...register(`routine.${index}.sets`, { required: true })}
                      type="number"
                      label="Sets"
                      variant="bordered"
                    />
                    <Input
                      isRequired
                      placeholder="10-12"
                      {...register(`routine.${index}.reps`, { required: true })}
                      type="text"
                      label={`Reps `}
                      variant="bordered"
                    />
                  </section>
                  <Input
                    isRequired
                    placeholder="100"
                    {...register(`routine.${index}.weight`, { required: true })}
                    type="number"
                    label="Weight"
                    variant="bordered"
                  />
                  <Select
                    label="Select weight unit"
                    variant="bordered"
                    // ref={...register(`routine.${index}.unit`)}
                    {...register(`routine.${index}.unit`, { required: true })}
                  >
                    <SelectItem variant="shadow" key={"kg"} value={"kg"}>
                      Kg
                    </SelectItem>
                    <SelectItem key={"lb"} value={"lb"}>
                      Lb
                    </SelectItem>
                  </Select>
                </section>
                {index > 0 && (
                  <footer className="mt-3">
                    <Button
                      onClick={() => {
                        remove(index);
                      }}
                      variant="flat"
                      color="danger"
                    >
                      Delete exercise{" "}
                      <span>
                        <Trash2 color="#ff0000" />
                      </span>
                    </Button>
                  </footer>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="mt-10">
          <Button
            variant="solid"
            size="lg"
            className="bg-blue-700 text-white w-full"
            type="submit"
          >
            Send routine
          </Button>
        </div>
      </form>
    </section>
  );
}

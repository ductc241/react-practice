/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { useEffect, useState } from "react";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../../components/TextField";
import Select from "react-select";

export interface IFormData {
  fullname: string;
  age?: number;
  email?: string;
  showInput?: boolean;
  gender: string;
}

const schema: yup.ObjectSchema<IFormData> = yup.object({
  fullname: yup.string().trim().max(15).required("required field"),
  age: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(1),
  email: yup.string().email(),
  showInput: yup.boolean(),
  gender: yup.string().required("required field"),
});

export default function HookFormLib() {
  // const [initFormData, setInitFormData] = useState<IFormData>();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid },
    reset,
    control,
    getValues,
  } = useForm<IFormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    // values: initFormData,
    defaultValues: {
      fullname: "",
      age: undefined,
      email: undefined,
      showInput: false,
      gender: "",
    },
  });

  const genderOption = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log("submmit data: ", data);
  };

  // useEffect(() => {
  //   // fetch data or do something to get data. Then, set the data to form with reset method
  //   const data: IFormData = {
  //     fullname: "Ta Cong Duc",
  //     gender: "female",
  //   };

  //   reset(data);

  //   // setInitFormData(data);
  // }, [reset]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    if (isDirty) {
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isDirty]);

  console.log("state", {
    isDirty,
    isSubmitted,
    isValid,
    errors,
  });

  console.log(getValues());

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="fullname"
          id="fullname"
          placeholder="Your name..."
          containerCls="mb-5"
          {...register("fullname")}
          error={errors.fullname?.message}
          required
        />

        <TextField
          label="age"
          inputMode="numeric"
          pattern="[0-9]*"
          id="age"
          placeholder="Your age..."
          containerCls="mb-5"
          {...register("age")}
          error={errors.age?.message}
        />

        <TextField
          label="email"
          type="email"
          id="email"
          placeholder="Your email..."
          containerCls="mb-5"
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="mb-5">
          <p className="mb-1 text-gray-500 font-semibold capitalize">
            Gender <span className="text-red-500">(*)</span>{" "}
          </p>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Select gender"
                options={genderOption}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    height: "48px",
                  }),
                }}
                value={
                  genderOption.find((option) => option.value === field.value) ??
                  null
                }
                onChange={(option) => field.onChange(option?.value as string)}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.gender && (
            <span className="block mt-1 text-red-500">
              {errors.gender.message}
            </span>
          )}
        </div>

        <div className="flex gap-10">
          <label>
            <input type="checkbox" {...register("showInput")} />
            <span className="ml-1">Show</span>
          </label>
        </div>

        {/* default type of button in form = submit, add type to avoid submit form*/}
        <div className="flex gap-5">
          <button
            type="button"
            className="mt-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
            disabled={!isDirty}
            onClick={() => reset()}
          >
            Reset
          </button>

          <button
            type="submit"
            className="mt-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop	"
            disabled={!isDirty}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

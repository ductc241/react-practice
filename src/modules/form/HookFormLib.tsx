import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../../components/TextField";

interface IFormData {
  fullname: string;
  age: number | undefined;
  showInput: boolean | undefined;
}

const schema = yup.object({
  fullname: yup.string().trim().max(15).required("required field"),
  age: yup.number().typeError("number field").min(1).max(100),
  showInput: yup.boolean(),
});

export default function HookFormLib() {
  const navigate = useNavigate();

  const [initFormData, setInitFormData] = useState<IFormData>();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid },
    reset,
  } = useForm<IFormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    // values: initFormData,
  });

  const onSubmit: SubmitHandler<IFormData> = (data, e) => {
    console.log("submmit data: ", data);
    // navigate("/");
  };

  console.log("state", {
    isDirty,
    isSubmitted,
    isValid,
  });

  useEffect(() => {
    // fetch data or do something to get data. Then, set the data to form with reset method

    const data = {
      fullname: "Ta Cong Duc",
      age: 1,
      showInput: true,
    };

    reset(data);

    // setInitFormData(data);
  }, [reset]);

  useEffect(() => {
    // alert when you change form data and reload or close page

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="fullname"
          id="fullname"
          placeholder="Your name..."
          {...register("fullname")}
          error={errors.fullname?.message}
          required
        />

        <TextField
          inputMode="numeric"
          pattern="[0-9]*"
          label="age"
          id="age"
          placeholder="Your age..."
          {...register("age")}
          error={errors.age?.message}
        />

        {/* <input type="text" inputMode="numeric" pattern="[0-9]*" /> */}

        <div className="flex gap-10">
          <label>
            <input type="checkbox" {...register("showInput")} />
            <span className="ml-1">Show</span>
          </label>

          {/* {watch("showInput") && <p>fullname value: {watch("fullname")}</p>} */}
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

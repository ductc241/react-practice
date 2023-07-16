import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../components/TextField";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface IFormData {
  fullname: string;
  address: string;
  showInput: boolean | undefined;
}

const schema = yup.object({
  fullname: yup.string().required(),
  address: yup.string().required(),
  showInput: yup.boolean(),
});

export default function HookFormLib() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid },
    watch,
    reset,
    setValue,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    console.log("call api", data);
  };

  useEffect(() => {
    reset({
      fullname: "Ta Cong Duc",
      address: "Hanoi",
      showInput: true,
    });
  }, []);

  console.log("state", {
    isDirty,
    isSubmitted,
    isValid,
  });

  useEffect(() => {
    const handleConfirm = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    if (isDirty) {
      window.addEventListener("beforeunload", handleConfirm);

      return () => {
        window.removeEventListener("beforeunload", handleConfirm);
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
        />

        <TextField
          label="address"
          id="address"
          placeholder="Your address..."
          {...register("address")}
          error={errors.address?.message}
        />

        <div className="flex gap-10">
          <label>
            <input type="checkbox" {...register("showInput")} />
            <span className="ml-1">Show</span>
          </label>

          {/* {watch("showInput") && <p>fullname value: {watch("fullname")}</p>} */}
        </div>

        {/* yeu cau type button de khi reset form se tu goi submit */}
        <button
          type="button"
          className="block mt-5 text-white bg-black"
          onClick={() => reset()}
        >
          Reset
        </button>

        <button type="submit" className="mt-5 text-white bg-black">
          Submit
        </button>

        <Link to={"/home"}>Re-direct</Link>
      </form>
    </>
  );
}

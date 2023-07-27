import { IStepFormProps } from ".";
import TextField from "../../../../components/TextField";

const Step1 = ({ setFormData, setFormStep }: IStepFormProps) => {
  return (
    <form>
      <TextField label="Fullname" />

      <button
        type="button"
        className="mt-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
        onClick={() => setFormStep(1)}
        disabled
      >
        Next
      </button>
    </form>
  );
};

export default Step1;

import { IStepFormProps } from ".";
import TextField from "../../../../components/TextField";

const Step2 = ({ setFormData, setFormStep }: IStepFormProps) => {
  return (
    <form>
      <TextField label="Address" />

      <button
        type="button"
        className="mt-5 mr-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
        onClick={() => setFormStep(0)}
      >
        Back
      </button>

      <button
        type="button"
        className="mt-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
        onClick={() => setFormStep(2)}
        disabled
      >
        Next
      </button>
    </form>
  );
};

export default Step2;

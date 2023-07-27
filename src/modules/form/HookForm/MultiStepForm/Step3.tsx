import { IStepFormProps } from ".";
import TextField from "../../../../components/TextField";

const Step3 = ({ setFormData, setFormStep }: IStepFormProps) => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form>
      <TextField label="Description" />

      <button
        type="button"
        className="mt-5 mr-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
        onClick={() => setFormStep(1)}
      >
        Back
      </button>

      <button
        type="button"
        className="mt-5 p-1 text-white bg-black disabled:bg-gray-400 disabled:cursor-no-drop"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Step3;

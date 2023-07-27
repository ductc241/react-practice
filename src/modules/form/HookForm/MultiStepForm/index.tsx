import { Dispatch, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export interface IStepFormProps {
  formData?: IFormData;
  setFormData: Dispatch<React.SetStateAction<IFormData | undefined>>;
  setFormStep: Dispatch<React.SetStateAction<number>>;
  handleSubmit?: () => void;
}

interface IFormData {
  fullname: string;
  address: string;
  description: string;
}

const MultiStepForm = () => {
  const [formData, setFormData] = useState<IFormData>();
  const [formStep, setFormStep] = useState<number>(0);

  const formDisplay = [
    {
      title: "Title 1",
      form: <Step1 setFormData={setFormData} setFormStep={setFormStep} />,
    },
    {
      title: "Title 2",
      form: <Step2 setFormData={setFormData} setFormStep={setFormStep} />,
    },
    {
      title: "Title 3",
      form: <Step3 setFormData={setFormData} setFormStep={setFormStep} />,
    },
  ];

  return (
    <div>
      <p className="text-xl font-semibold">{formDisplay[formStep].title}</p>

      <div className="mt-5 mb-3">{formDisplay[formStep].form}</div>
    </div>
  );
};

export default MultiStepForm;

import UploadIcon from "../icons/UploadIcon";
import { ChangeEvent, useState } from "react";

interface IUploadProps {
  containerCls?: string;
  label?: string;
  value?: FileList | null;
  onChange?: (value: FileList | null) => void;
}

const Upload = ({
  containerCls,
  label = "Upload file",
  value = null,
  onChange: handleChangeValue,
}: IUploadProps) => {
  const [files, setFiles] = useState<FileList | null>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    if (handleChangeValue) handleChangeValue(e.target.files);
  };

  return (
    <div className={containerCls}>
      <div className="flex items-center justify-center mb-3">
        <label
          htmlFor="upload"
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 focus:border-red-500"
        >
          <div className="flex items-center gap-3">
            <UploadIcon width={20} fill="blue" />
            {label && <p className="text-blue-500">{label}</p>}
          </div>
          <input
            id="upload"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>

      {files &&
        files.length > 0 &&
        Array.from(files).map((file, index) => <p key={index}>{file.name}</p>)}
    </div>
  );
};

export default Upload;

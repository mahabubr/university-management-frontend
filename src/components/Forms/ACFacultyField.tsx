import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type ACFacultyFieldProps = {
  name: string;
  label: string;
};

const ACFacultyField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });

  const academicFaculties = data?.academicFaculties;
  const academicFacultyOptions = academicFaculties?.map((acFaculty) => {
    return {
      label: acFaculty?.title,
      value: acFaculty?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={academicFacultyOptions as SelectOptions[]}
    />
  );
};

export default ACFacultyField;

import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";

type ACDepartmentProps = {
  name: string;
  label: string;
};

const ACDepartmentField = ({ name, label }: ACDepartmentProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });

  const academicDepartments = data?.academicDepartments;
  const academicDepartmentOptions = academicDepartments?.map((acDepartment) => {
    return {
      label: acDepartment?.title,
      value: acDepartment?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={academicDepartmentOptions as SelectOptions[]}
    />
  );
};

export default ACDepartmentField;

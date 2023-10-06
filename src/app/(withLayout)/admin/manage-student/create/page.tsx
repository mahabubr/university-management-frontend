"use client";

import StepperFrom from "@/components/StepperFrom/StepperFrom";
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi";
import { message } from "antd";

const CreateStudentPage = () => {
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <BasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);

    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    message.loading("Creating");

    try {
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successful");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `admin`,
            link: `/admin`,
          },
          {
            label: `manage_student`,
            link: `/admin/manage-student`,
          },
        ]}
      />
      <h1>Create Student</h1>
      <StepperFrom
        persistKey="student-create-form"
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;

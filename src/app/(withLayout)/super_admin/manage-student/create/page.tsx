import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateStudentPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `manage_student`,
            link: `/super_admin/manage-student`,
          },
        ]}
      />
      CreateStudentPage
    </div>
  );
};

export default CreateStudentPage;

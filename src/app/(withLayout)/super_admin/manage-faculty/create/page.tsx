import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateFacultyPage = () => {
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
            link: `/super_admin/manage-faculty`,
          },
        ]}
      />
      CreateFacultyPage
    </div>
  );
};

export default CreateFacultyPage;

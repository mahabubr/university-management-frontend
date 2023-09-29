import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `super_admin`,
          },
        ]}
      />
      <ActionBar title="Student List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create Department</Button>
        </Link>
      </ActionBar>
    </>
  );
};

export default DepartmentPage;

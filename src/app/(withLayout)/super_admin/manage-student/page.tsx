"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentsPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `super_admin`,
          },
        ]}
      />
      <ActionBar title="Student List">
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudentsPage;

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
  const [role] = getUserInfo() as any;

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

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;

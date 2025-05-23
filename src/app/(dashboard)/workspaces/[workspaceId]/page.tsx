import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdPage = async ({ params }: { params: any }) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>{params.workspaceId}</div>;
};

export default WorkspaceIdPage;

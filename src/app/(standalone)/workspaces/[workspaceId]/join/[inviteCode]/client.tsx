"use client";

import PageError from "@/components/page-error";
import PageLoader from "@/components/page-loader";
import JoinWorkspaceForm from "@/features/auth/components/join-workspace-form";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

const WorkspaceIdJoinPageClient = () => {
  const workspaceId = useWorkspaceId();

  const { data, isLoading } = useGetWorkspaceInfo({ workspaceId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Workspace not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={data} />
    </div>
  );
};

export default WorkspaceIdJoinPageClient;

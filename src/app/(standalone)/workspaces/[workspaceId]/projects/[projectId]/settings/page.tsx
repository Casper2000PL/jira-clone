import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";
import React from "react";
import ProjectIdSettingsPageClient from "./client";

const ProjectIdSettingsPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdSettingsPageClient />;
};

export default ProjectIdSettingsPage;

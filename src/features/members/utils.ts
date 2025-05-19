import { Query, type Databases } from "node-appwrite";
import { DATABASE_ID, MEMBERS_ID } from "@/config";

interface GetMemberProps {
  databases: Databases;
  userId: string;
  workspaceId: string;
}

export const getMember = async ({
  databases,
  userId,
  workspaceId,
}: GetMemberProps) => {
  const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
    Query.equal("workspaceId", workspaceId),
    Query.equal("userId", userId),
  ]);

  if (!members.total) {
    return null;
  }

  return members.documents[0];
};

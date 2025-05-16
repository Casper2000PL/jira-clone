import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface WorkspaceAvatarProps {
  image?: string;
  name: string;
  className?: string;
}

export const WorkspaceAvatar = ({
  image,
  name,
  className,
}: WorkspaceAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("relative size-10 rounded-md overflow-hidden", className)}
      >
        <Image src={image} alt={name} fill className="object" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", className)}>
      <AvatarImage
        src={image}
        alt={name}
        className="object-cover"
        width={40}
        height={40}
      />
      <AvatarFallback className="text-white bg-blue-600 font-semibold text-lg uppercase rounded-md">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};

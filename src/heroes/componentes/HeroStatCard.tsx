import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Children, type PropsWithChildren } from "react";

/* export const iconType = Heart | Zap | Users | Trophy; */

export interface HeroStatProps extends PropsWithChildren {
  title: string;
  icon: React.ReactNode;
  body: string;
  description?: string;
  bodyClassName?: string;
}

export const HeroStatCard = ({
  title,
  icon,
  body,
  description,
  bodyClassName,
  children,
}: HeroStatProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <>{icon}</>
        {/* <Heart className="h-4 w-4 text-muted-foreground" /> */}
      </CardHeader>
      <CardContent>
        <div className={bodyClassName}>{body}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
      {children && <div className="flex gap-1 mt-2">{children}</div>}
    </Card>
  );
};

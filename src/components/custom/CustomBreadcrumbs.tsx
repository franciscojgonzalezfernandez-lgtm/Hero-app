import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { SlashIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

interface BreadCrumbItem {
  path: string;
  title: string;
}

interface BreadcrumbProps {
  items: BreadCrumbItem[];
}

export const CustomBreadcrumbs = ({ items = [] }: BreadcrumbProps) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        {items.map((value, index) => {
          return (
            <React.Fragment key={value.path}>
              <BreadcrumbItem>
                {index < items.length - 1 && (
                  <BreadcrumbLink asChild>
                    <Link to={value.path}>{value.title}</Link>
                  </BreadcrumbLink>
                )}
                {index == items.length - 1 && (
                  <BreadcrumbPage>{value.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && (
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

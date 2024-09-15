import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import React from "react";
import { breadCrumbs } from "../types";
interface BreadCrumbsProps {
  links: breadCrumbs[];
}
const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ links }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link) => (
          <React.Fragment key={link?.id}>
            <BreadcrumbItem>
              <BreadcrumbLink href={link?.href}>{link.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { dataItems } from "../types";
import moment from "moment";
interface DataTableProps {
  data: dataItems[];
}
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Genere</TableHead>
          <TableHead>Total Sales</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item?._id}>
            <TableCell className="hidden sm:table-cell cursor-pointer">
              <a href={item?.file} target="_blank">
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={item?.coverImage}
                  width="64"
                />
              </a>
            </TableCell>
            <TableCell className="font-medium">{item?.title}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  item.active === true ? "text-green-800" : "text-red-800"
                }
              >
                {item?.active === true ? "Active" : "Deactivated"}
              </Badge>
            </TableCell>
            <TableCell>{item?.genre}</TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden md:table-cell">
              {moment(item?.createdAt).format("MMM-Do-YYYY")}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;

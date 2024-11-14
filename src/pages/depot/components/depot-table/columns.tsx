import { Checkbox } from '@/components/ui/checkbox';
import { Student } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import helper from '@/helpers/index';
export const columns: ColumnDef<Student>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'Tên điểm thu gom',
    cell: (info) => info.getValue(),
    enableSorting: true
  },
  {
    accessorKey: 'address',
    header: 'Địa chỉ thu gom'
  },
  {
    accessorKey: 'completedTransactions',
    header: 'Số giao dịch'
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái hoạt động'
  },
  {
    accessorKey: 'time',
    header: 'Thời gian hoạt động'
  },
  {
    accessorKey: 'joinAt',
    header: 'Ngày tham gia',
    cell: (info) => helper.convertToDate(info.getValue())
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];

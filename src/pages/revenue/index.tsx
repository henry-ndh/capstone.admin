import { useGetStudents } from './queries/queries';
import StudentsTable from './checkin-table/index';
import { useSearchParams } from 'react-router-dom';
import { DataTableSkeleton } from '@/components/shared/data-table-skeleton';
import BasePages from '@/components/shared/base-pages';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.js';
import Student from './components/students/index';
import Teacher from './components/teachers/index';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DollarSign, TrendingUp, CreditCard } from 'lucide-react';

// Dữ liệu giả lập cho giao dịch
const transactions = [
  {
    id: 1,
    customer: 'Alice Johnson',
    amount: 125.5,
    date: '2023-05-01',
    status: 'hoàn thành'
  },
  {
    id: 2,
    customer: 'Bob Smith',
    amount: 75.2,
    date: '2023-05-02',
    status: 'đang chờ xử lý'
  },
  {
    id: 3,
    customer: 'Charlie Brown',
    amount: 250.0,
    date: '2023-05-03',
    status: 'hoàn thành'
  },
  {
    id: 4,
    customer: 'Diana Prince',
    amount: 180.75,
    date: '2023-05-04',
    status: 'thất bại'
  },
  {
    id: 5,
    customer: 'Ethan Hunt',
    amount: 95.0,
    date: '2023-05-05',
    status: 'hoàn thành'
  }
];

// Dữ liệu giả lập cho doanh thu hàng ngày
const dailyRevenue = [
  { date: '05/01', revenue: 1250 },
  { date: '05/02', revenue: 1100 },
  { date: '05/03', revenue: 1500 },
  { date: '05/04', revenue: 950 },
  { date: '05/05', revenue: 1300 },
  { date: '05/06', revenue: 1450 },
  { date: '05/07', revenue: 1200 }
];
export default function CheckInPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const pageLimit = Number(searchParams.get('limit') || 10);
  const country = searchParams.get('search') || null;
  const offset = (page - 1) * pageLimit;
  const { data, isLoading } = useGetStudents(offset, pageLimit, country);
  const users = data?.users;
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const [timeRange, setTimeRange] = useState('7d');

  const totalRevenue = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const averageTransaction = totalRevenue / transactions.length;
  if (isLoading) {
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={10}
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );
  }

  return (
    <BasePages
      breadcrumbs={[
        { title: 'Trang chủ', link: '/' },
        { title: 'Doanh thu', link: '/revenue' }
      ]}
      pageHead="Quản lý doanh thu | Happy Kids"
      className="h-[100vh] overflow-y-scroll p-4 md:px-8"
    >
      <div className="space-y-4 p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tổng Doanh Thu
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${totalRevenue.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Giao Dịch Trung Bình
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${averageTransaction.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tổng Số Giao Dịch
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{transactions.length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Doanh Thu Hàng Ngày</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Giao Dịch Gần Đây</CardTitle>
            <CardDescription>
              Bạn đã thực hiện {transactions.length} giao dịch trong tháng này.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Khách Hàng</TableHead>
                  <TableHead>Số Tiền</TableHead>
                  <TableHead>Ngày</TableHead>
                  <TableHead>Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${transaction.customer}`}
                          />
                          <AvatarFallback>
                            {transaction.customer
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        {transaction.customer}
                      </div>
                    </TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === 'hoàn thành'
                            ? 'default'
                            : transaction.status === 'đang chờ xử lý'
                              ? 'secondary'
                              : 'destructive'
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </BasePages>
  );
}

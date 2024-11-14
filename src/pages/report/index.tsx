import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpIcon, ArrowDownIcon, Users, Package, Star } from 'lucide-react';
import BasePages from '@/components/shared/base-pages';

export default function Report() {
  const collectionSummary = {
    totalCollections: 1250,
    activeUsers: 350,
    averagePointsPerUser: 2750
  };

  const userRewards = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      points: 3500,
      status: 'Hoạt động'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      points: 2800,
      status: 'Không hoạt động'
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      points: 4200,
      status: 'Hoạt động'
    },
    {
      id: 4,
      name: 'Diana Ross',
      email: 'diana@example.com',
      points: 3100,
      status: 'Hoạt động'
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan@example.com',
      points: 1900,
      status: 'Không hoạt động'
    }
  ];

  return (
    <BasePages
      breadcrumbs={[
        { title: 'Trang chủ', link: '/' },
        { title: 'Báo cáo', link: '/student' }
      ]}
      pageHead="Báo cáo RCA"
      className="p-4 md:px-8"
    >
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow bg-background p-6">
          <section className="mb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tổng số lượng giao dịch
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {collectionSummary.totalCollections}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Người Dùng Hoạt Động
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {collectionSummary.activeUsers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +10.5% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Điểm Trung Bình Mỗi Người Dùng
                  </CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {collectionSummary.averagePointsPerUser}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +5.2% so với tháng trước
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">
              Điểm Thưởng Người Dùng
            </h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Điểm</TableHead>
                    <TableHead>Trạng Thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userRewards.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {user.points}
                          {user.points > 3000 ? (
                            <ArrowUpIcon className="ml-2 h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownIcon className="ml-2 h-4 w-4 text-red-500" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === 'Hoạt động'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </section>
        </main>
      </div>
    </BasePages>
  );
}

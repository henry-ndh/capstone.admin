import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import RecentSales from './recent-sales.js';
import Overview from './overview.js';
import {
  Advisory,
  DoanhThu,
  Student,
  StudentAdd
} from '@/constants/SVGIcon.js';
export const ListOverViewDashBoard = [
  {
    id: 1,
    title: 'Số điểm thu gom hoạt động',
    value: '232 điểm thu gom',
    icon: <DoanhThu />
  },
  {
    id: 2,
    title: 'Số tài khoản hoạt động',
    value: '1.203 tài khoản',
    icon: <Student />
  },
  {
    id: 3,
    title: 'Số đối tác tái chế',
    value: '120 đối tác',
    icon: <StudentAdd />
  },
  {
    id: 4,
    title: 'Tổng số giao dịch thanh toán',
    value: '1.502 giao dịch',
    icon: <Advisory />
  }
];

export function OverViewTab() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ListOverViewDashBoard.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Số giao dịch hàng tháng</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Top người dùng có điểm thưởng cao nhất</CardTitle>
            <CardDescription>
              Top 3 người dùng có điểm thưởng cao nhất
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

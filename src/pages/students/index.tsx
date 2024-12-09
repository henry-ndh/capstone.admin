import StudentsTable from './components/students-table';
import { useSearchParams } from 'react-router-dom';
import BasePages from '@/components/shared/base-pages';
import { useGetStudentPaging } from '@/queries/student.query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CollectorTable from './components/collector-table/index';

export default function StudentPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const pageLimit = Number(searchParams.get('limit') || 10);
  const { data } = useGetStudentPaging();
  const users = [];
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  const studentData = [
    {
      id: 1,
      name: 'Nguyễn Thị A',
      address: 'Tòa 502A Vinhomes',
      gender: true, // Nam
      rewardPoint: 2012,
      completedTransactions: 150,
      status: 'Hoạt động',
      joinAt: '2023-01-15'
    },
    {
      id: 2,
      name: 'Trần Văn B',
      address: 'Tòa 15B Time City',
      gender: true, // Nam
      rewardPoint: 1850,
      completedTransactions: 120,
      status: 'Hoạt động',
      joinAt: '2022-12-01'
    },
    {
      id: 3,
      name: 'Lê Thị C',
      address: 'Số 20A Park Hill',
      gender: false, // Nữ
      rewardPoint: 1705,
      completedTransactions: 130,
      status: 'Ngưng hoạt động',
      joinAt: '2022-05-20'
    },
    {
      id: 4,
      name: 'Phạm Văn D',
      address: 'Chung cư Royal City',
      gender: true, // Nam
      rewardPoint: 1550,
      completedTransactions: 90,
      status: 'Hoạt động',
      joinAt: '2021-09-10'
    },
    {
      id: 5,
      name: 'Vũ Thị E',
      address: 'Tòa 7A Vincom Center',
      gender: false, // Nữ
      rewardPoint: 1400,
      completedTransactions: 80,
      status: 'Ngưng hoạt động',
      joinAt: '2020-11-23'
    }
  ];

  return (
    <BasePages
      breadcrumbs={[
        { title: 'Trang chủ', link: '/' },
        { title: 'Người dùng', link: '/student' }
      ]}
      pageHead="Quản lý người dùng RCA"
      className="p-4 md:px-8"
    >
      <Tabs defaultValue="user" className="space-y-4">
        <TabsList>
          <TabsTrigger value="user">Người dùng</TabsTrigger>
          <TabsTrigger value="collector">Đối tác</TabsTrigger>
        </TabsList>
        <TabsContent value="user" className="space-y-4">
          {users.length === 0 ? (
            <StudentsTable
              users={studentData}
              page={page}
              totalUsers={totalUsers}
              pageCount={pageCount}
            />
          ) : (
            <StudentsTable
              users={users}
              page={page}
              totalUsers={totalUsers}
              pageCount={pageCount}
            />
          )}
        </TabsContent>
        <TabsContent value="collector" className="space-y-4">
          {users.length === 0 ? (
            <CollectorTable
              users={studentData}
              page={page}
              totalUsers={totalUsers}
              pageCount={pageCount}
            />
          ) : (
            <CollectorTable
              users={users}
              page={page}
              totalUsers={totalUsers}
              pageCount={pageCount}
            />
          )}
        </TabsContent>
      </Tabs>
    </BasePages>
  );
}

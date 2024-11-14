import StudentsTable from './components/depot-table';
import { useSearchParams } from 'react-router-dom';
import BasePages from '@/components/shared/base-pages';
import { useGetStudentPaging } from '@/queries/student.query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DepotPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const pageLimit = Number(searchParams.get('limit') || 10);
  const country = searchParams.get('search') || null;
  const offset = (page - 1) * pageLimit;
  const { data, isLoading } = useGetStudentPaging();
  const users = [];
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  const studentData = [
    {
      id: 1,
      name: 'Điểm thu gom A',
      address: 'Tòa 502A Vinhomes',
      gender: true, // Nam
      rewardPoint: 2012,
      completedTransactions: 150,
      status: 'Hoạt động',
      time: '7:00 - 21:00',

      joinAt: '2023-01-15'
    },
    {
      id: 2,
      name: 'Điểm thu gom B',
      address: 'Tòa 15B Time City',
      gender: true, // Nam
      rewardPoint: 1850,
      completedTransactions: 120,
      status: 'Hoạt động',

      time: '7:00 - 21:00',
      joinAt: '2022-12-01'
    },
    {
      id: 3,
      name: 'Điểm thu gom C',
      address: 'Số 20A Park Hill',
      gender: false, // Nữ
      rewardPoint: 1705,
      completedTransactions: 130,
      status: 'Ngưng hoạt động',
      time: '7:00 - 21:00',

      joinAt: '2022-05-20'
    },
    {
      id: 4,
      name: 'Điểm thu gom D',
      address: 'Chung cư Royal City',
      gender: true, // Nam
      rewardPoint: 1550,
      completedTransactions: 90,
      status: 'Hoạt động',
      time: '7:00 - 21:00',

      joinAt: '2021-09-10'
    },
    {
      id: 5,
      name: 'Điểm thu gom E',
      address: 'Tòa 7A Vincom Center',
      gender: false, // Nữ
      rewardPoint: 1400,
      completedTransactions: 80,
      status: 'Ngưng hoạt động',
      time: '7:00 - 21:00',

      joinAt: '2020-11-23'
    }
  ];

  return (
    <BasePages
      breadcrumbs={[
        { title: 'Trang chủ', link: '/' },
        { title: 'Điểm thu gom', link: '/student' }
      ]}
      pageHead="Quản lý điểm thu gom RCA"
      className="p-4 md:px-8"
    >
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
    </BasePages>
  );
}

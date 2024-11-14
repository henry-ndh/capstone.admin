const recentSalesData = [
  {
    id: 1,
    name: 'Nguyễn Thị A',
    address: 'Tòa 502A Vinhomes',
    points: 2012,
    rank: 'Top 1 điểm thưởng',
    avatarSrc: '/avatars/01.png',
    avatarFallback: 'OM'
  },
  {
    id: 2,
    name: 'Nguyễn Văn B',
    address: 'Tòa 502A Vinhomes',

    points: 1850,
    rank: 'Top 2 điểm thưởng',
    avatarSrc: '/avatars/02.png',
    avatarFallback: 'NV'
  },
  {
    id: 3,
    name: 'Trần Thị C',
    address: 'Tòa 502A Vinhomes',

    points: 1705,
    rank: 'Top 3 điểm thưởng',
    avatarSrc: '/avatars/03.png',
    avatarFallback: 'TC'
  },
  {
    id: 4,
    name: 'Lê Văn D',
    address: 'Tòa 701A Vinhomes',

    points: 1550,
    rank: 'Top 4 điểm thưởng',
    avatarSrc: '/avatars/04.png',
    avatarFallback: 'LD'
  },
  {
    id: 5,
    name: 'Phạm Thị E',
    address: 'Tòa 302A Vinhomes',

    points: 1400,
    rank: 'Top 5 điểm thưởng',
    avatarSrc: '/avatars/05.png',
    avatarFallback: 'PE'
  }
];

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function RecentSales() {
  return (
    <div className="space-y-8 overflow-auto">
      {recentSalesData.map((user) => (
        <div key={user.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatarSrc} alt="Avatar" />
            <AvatarFallback>{user.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">
              Địa chỉ: {user.address}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <p>Số điểm: {user.points}</p>
            <p className="text-green-400">{user.rank}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

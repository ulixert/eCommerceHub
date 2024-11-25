import { Outlet, useNavigation } from 'react-router-dom';

import { Loading } from '@/components/Loading.tsx';

export function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <Loading />}
      <Outlet />
    </>
  );
}

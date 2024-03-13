import { Main, RightSidebar } from 'client/admin';

import UserTable from '@admin/overview/table';

function Admin() {
  return (
    <div>
      <div className='mb-10 grid grid-cols-[1fr_auto] gap-5'>
        <main>
          <Main />
        </main>

        <aside>
          <RightSidebar />
        </aside>
      </div>

      <UserTable />
    </div>
  );
}

export default Admin;

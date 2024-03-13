'use client';

import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import {
  ChevronDown,
  MoreVertical,
  Plus,
  Search,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { columns, statusOptions, users } from './data';
import { capitalize } from './utils';

type StatusColorMapProps = 'success' | 'danger' | 'warning';

const statusColorMap: Record<string, StatusColorMapProps> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS = ['name', 'role', 'status', 'actions'];

export default function MyCourses() {
  const router = useRouter();
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<any>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = React.useState<any>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'age',
    direction: 'ascending',
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns.size === columns.length) return columns;

    return columns.filter((column) => visibleColumns.has(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== 'all') {
      filteredUsers = filteredUsers.filter((user) =>
        statusFilter.includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    const sorted = [...items].sort((a, b) => {
      let first: any;
      let second: any;

      if (typeof a === 'object') {
        first = a[sortDescriptor.column as keyof typeof a];
      }

      if (typeof b === 'object') {
        second = b[sortDescriptor.column as keyof typeof b];
      }

      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });

    return sorted;
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (user: any, columnKey: string) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case 'name': {
          return (
            <User
              avatarProps={{ radius: 'lg', src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          );
        }
        case 'role': {
          return (
            <div className='flex flex-col'>
              <p className='text-small font-bold capitalize'>
                {cellValue}
              </p>
              <p className='text-tiny font-bold capitalize text-default-400'>
                {user.team}
              </p>
            </div>
          );
        }
        case 'status': {
          return (
            <Chip
              className='capitalize'
              color={statusColorMap[user.status]}
              size='sm'
              variant='flat'
            >
              {cellValue}
            </Chip>
          );
        }
        case 'actions': {
          return (
            <div className='relative flex items-center justify-end gap-2'>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size='sm' variant='light'>
                    <MoreVertical className='text-default-300' />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        }
        default: {
          return cellValue;
        }
      }
    },
    [],
  );

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [],
  );

  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = React.useMemo(
    () => (
      <div className='flex flex-col gap-4'>
        <div className='flex items-end justify-between gap-3'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            startContent={<Search />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  endContent={<ChevronDown className='text-small' />}
                  variant='flat'
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode='multiple'
                onSelectionChange={(keys) =>
                  setStatusFilter(new Set(keys) as any)
                }
              >
                {statusOptions.map((status) => (
                  <DropdownItem
                    key={status.uid}
                    className='capitalize'
                  >
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  endContent={<ChevronDown className='text-small' />}
                  variant='flat'
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode='multiple'
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem
                    key={column.uid}
                    className='capitalize'
                  >
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              color='primary'
              endContent={<Plus />}
              onClick={() =>
                router.push('/admin/courses/create-course')
              }
            >
              Add New
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-small text-default-400'>
            Total {users.length} users
          </span>
          <label
            className='flex items-center text-small text-default-400'
            htmlFor='rowsPerPageSelect'
          >
            Rows per page:
            <select
              className='bg-transparent text-small text-default-400 outline-none'
              id='rowsPerPageSelect'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label>
        </div>
      </div>
    ),
    [
      filterValue,
      statusFilter,
      visibleColumns,
      onRowsPerPageChange,
      users.length,
      onSearchChange,
      hasSearchFilter,
    ],
  );

  const bottomContent = React.useMemo(
    () => (
      <div className='flex items-center justify-between p-2'>
        <span className='w-[30%] text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className='hidden w-[30%] justify-end gap-2 sm:flex'>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    ),
    [selectedKeys, items.length, page, pages, hasSearchFilter],
  );

  return (
    <Table
      isHeaderSticky
      aria-label='Example table with custom cells, pagination and sorting'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      classNames={{
        wrapper: 'max-h-[382px]',
      }}
      selectedKeys={selectedKeys}
      selectionMode='multiple'
      sortDescriptor={sortDescriptor as any}
      topContent={topContent}
      topContentPlacement='outside'
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor as any}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent='No users found' items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey: any) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

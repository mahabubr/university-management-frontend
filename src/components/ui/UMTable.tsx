"use client";

import { Table } from "antd";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  columns,
  dataSource,
  loading = false,
  onPaginationChange,
  onTableChange,
  pageSize,
  totalPages,
  showSizeChanger = true,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={paginationConfig}
        onChange={onTableChange}
      />
    </div>
  );
};

export default UMTable;
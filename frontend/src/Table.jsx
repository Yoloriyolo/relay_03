import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const columns = [
  { id: "post_id", label: "No.", minWidth: 10 },
  { id: "title", label: "Title", minWidth: 200 },
  {
    id: "author",
    label: "Author",
    minWidth: 20,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 30,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const response = {
  data:{
    "board_id":1, // 게시판 id(tab 번호)
    "post":[{
      "post_id": 1,
      "title": "Boostcamp에 오신 것을 환영합니다",
      "author": "김계란",
      "date": "2020-08-27-15-32" // 2020년 8월 27일 15시 32분"
    },{
      "post_id": 2,
      "title": "Boostcamp에 오신 것을 환영하지 않습니다",
      "author": "김지옥",
      "date": "2020-08-27-15-32" // 2020년 8월 27일 15시 30분
    },{
      "post_id": 10,
      "title": "Boostcamp에 오실까요?",
      "author": "김계란",
      "date": "2020-08-27-15-32" // 2020년 8월 27일 15시 25분
    }]
  } 
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {response["data"]["post"].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id === 'title' ? <Link to={`/board/${row.post_id}`}>{value}</Link> : value}
                        </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={response["data"]["post"].length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
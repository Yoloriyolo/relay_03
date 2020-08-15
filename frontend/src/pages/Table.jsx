import React, {useEffect, useState} from 'react';
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
import { getPosts } from '../utils/API.js';

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

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [posts, setPosts] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const getData = async () => {
      const postResponse = await getPosts();
      setPosts(postResponse)
    }
    getData()
  }, [])

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
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column, i) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={row.post_id+i} align={column.align}>
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
        count={posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
)}

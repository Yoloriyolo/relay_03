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

// !fixme: api call here!!
const response = {
  data:{
    "board_id":1, // 게시판 id(tab 번호)
    "post":[{
      "post_id": 1,
      "title": "Boostcamp에 오신 것을 환영합니다",
      "author": "김계란",
      "content": "가짜 사나이 ep1. ",
      "date": "2020-08-27-15-32" // 2020년 8월 27일 15시 32분"
    }]
  } 
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable(props) {
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


  // !fixme: api call here!!
  // const componentDidUpdate = () => { }

  const { title, author, content, date } = response.data.post[0]
  console.log(title)
  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead />
          
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>
                  <div key={title}>{title}</div>
                  <div key={author}>{author}</div>
                  <div>{content}</div>
                  <div key={date}>{date}</div>
              </TableCell>
            </TableRow>
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

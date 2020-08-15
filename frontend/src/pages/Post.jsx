import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { getPostById } from "../utils/API"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function StickyHeadTable(props) {
  let { postId } = useParams();
  const classes = useStyles();
  const [postResponse, setPost] = useState({})

  useEffect(() => {
    const getData = async () => {
    //   const postResponse = {
    //     "post_id": "1",
    //     "title": "테스트",
    //     "author": "ddd",
    //     "date": "2020-08-14T09:43:33.990Z",
    //     "body": "되면 대박",
    //     "comments": []
    // }
     
      const postResponse = await getPostById(postId);
      console.log(postResponse)
      setPost(postResponse)
    }
    getData()
  }, [])

  // const { title, author, content, date } = response.data.post[0]

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead />
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>
                  <div>{postResponse.title}</div>
                  <div>{postResponse.author}</div>
                  <div>{postResponse.body}</div>
                  <div>{postResponse.date}</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

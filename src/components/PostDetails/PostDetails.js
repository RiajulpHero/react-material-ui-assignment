import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
import './PostDetails.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect( () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data))
    }, []);

    const [comments, setComments] = useState([]);
    useEffect( () => {
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(commentUrl)
    .then(res => res.json())
    .then(data => setComments(data))
    }, []);

    const classes = useStyles();
    const {body, title} = post;
    return (
        <div className="detail-container">
            <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
        </Card>
        {
            comments.map( comment => <Comments comment={comment}></Comments>)
        }
        </div>
    );
};

export default PostDetails;
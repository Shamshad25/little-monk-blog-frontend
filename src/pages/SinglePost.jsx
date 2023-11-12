import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const SinglePost = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src="https://via.placeholder.com/600/f66b97" alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.usename === post.username && (
            <div className="edit">
              <div className="edit-btn">
                <Link to={`/write?edit=2`}>
                  <FaRegPenToSquare color="white" />
                </Link>
              </div>
              <div className="delete-btn">
                <Link>
                  <FaRegTrashCan color="white" />
                </Link>
              </div>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;

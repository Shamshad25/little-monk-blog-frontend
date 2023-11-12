import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     albumId: 1,
  //     id: 1,
  //     title: "accusamus beatae ad facilis cum similique qui sunt",
  //     url: "https://via.placeholder.com/600/92c952",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     albumId: 1,
  //     id: 2,
  //     title: "reprehenderit est deserunt velit ipsam",
  //     url: "https://via.placeholder.com/600/771796",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     albumId: 1,
  //     id: 3,
  //     title: "officia porro iure quia iusto qui ipsa ut modi",
  //     url: "https://via.placeholder.com/600/24f355",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     albumId: 1,
  //     id: 4,
  //     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  //     url: "https://via.placeholder.com/600/d32776",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     albumId: 1,
  //     id: 5,
  //     title: "natus nisi omnis corporis facere molestiae rerum in",
  //     url: "https://via.placeholder.com/600/f66b97",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  // ];

  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

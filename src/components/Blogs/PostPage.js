import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/features/auth/authSlice";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_RENDER_URL}/blog/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        return response.json();
      })
      .then(postInfo => {
        setPostInfo(postInfo);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) {
      return;
    }

    fetch(`${process.env.REACT_APP_RENDER_URL}/blog/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        return response.json();
      })
      .then(() => {
        navigate('/blogs'); // Redirect to home after deletion
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  if (!postInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 overflow-hidden shadow-lg my-10 rounded-xl "> {/* Added shadow-lg */}
      <h1 className="text-3xl font-bold mb-4">{postInfo.title}</h1>
      <div className="mb-4">
        <img
          src={postInfo.cover}
          alt=""
          className="w-full h-96 object-contain rounded-md"
        />
      </div>
      <div className="flex justify-between">
        {role === "admin" && (
          <div className="text-center mb-4">
            <Link
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded-md text-sm"
              to={`/edit-blog/${postInfo._id}`}
            >
              Edit this post
            </Link>
            <button
              className="inline-block bg-red-600 text-white py-2 px-4 mx-2 rounded-md text-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
        <time className="block text-sm text-gray-500 mb-4">
          {formatISO9075(new Date(postInfo.createdAt))}
        </time>
      </div>
      <div
        className="text-lg leading-relaxed mx-auto"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}

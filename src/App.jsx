import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./slice/contentSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isloading = useSelector((state) => state.content.isloading);
  const error = useSelector((state) => state.content.error);

  if (isloading) {
    return "loading...";
  }

  if (error) {
    return "error";
  }
  return (
    <div>
      {contents?.map((content) => (
        <div key={content.id}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
          />
          <br/>
          {content.title}
        </div>
      ))}
    </div>
  );
}

export default App;

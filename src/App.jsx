import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./slice/contentSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
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
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address(city)</th>
          <th>Phoneno</th>
          <th>Company Name</th>
        </tr>
        {contents?.map((content) => (
          <tr key={content.id}>
            <td>{content.name}</td>
            <td>{content.email}</td>
            <td>{content.address.city}</td>
            <td>{content.phone}</td>
            <td>{content.company.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

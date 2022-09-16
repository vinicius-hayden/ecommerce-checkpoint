// import {useParams} from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

export default function Products() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  // const {idProduct} = useParams();

  return (
    <>
      <h1>Products</h1>
      {/*<h2> {idProduct}</h2>*/}

      <div>
      <Pagination>{items}</Pagination>
      </div>
    </>
  );
}


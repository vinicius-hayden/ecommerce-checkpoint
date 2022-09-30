import { Button } from "react-bootstrap";

export default function Admin() {

  if (localStorage.getItem('allowed') != 'yes') {
    window.location = "/login"
  }

  return (
    <>
      <h3>Please choose one of the above to CRUD</h3>
      <div className="d-grid gap-2">
        <Button variant="outline-primary" size="lg" onClick={() => window.location = "/admin/category"}>
          Category
        </Button>
        <Button variant="outline-primary" size="lg" onClick={() => window.location = "/admin/product"}>
          Product
        </Button>
      </div>
    </>
  );

}
import Category from "../components/Category";

export default function Categories() {
  /* const [categories, setCategories] = useState([]);

  let requestConfigurationGet = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("http://localhost:9000/categories", requestConfigurationGet)
      .then((response) => response.json())
      .then((categoriesJSON) => setCategories(categoriesJSON));
  }, []); */

  return (
    <>
      <h1 className="title" style={{ color: "#F55D15" }}>
        All categories:
      </h1>

    {/*<Container className="d-flex flex-column justify-content-center">
        <Container className="col-lg-10">
          <Row md={3}>
            {categories.map((category, index) => (
              <Container className="my-3" key={index}>
                <Card className="p-2">
                  <Card.Img src={category.image} />
                  <Link className="nav-link" to={`/categories/${category.id}`}>
                    <div className="text-center m-2">
                      <Button variant="outline-dark">{category.name}</Button>
                    </div>
                  </Link>
                </Card>
              </Container>
            ))}
          </Row>
        </Container>
        </Container>*/}

        <Category/>
    </>
  );
}

// Trocar <Category/> pelo código comentado?
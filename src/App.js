import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddingProduct from "./components/AddingProduct/AddingProduct";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import UpdateProduct from "./components/updateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/addProducts">
            <AddingProduct />
          </Route>
          <Route path="/updateProducts/:id">
            <UpdateProduct />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

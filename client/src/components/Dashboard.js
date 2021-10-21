import { Container, Grow, Grid } from "@mui/material";
import Form from "./Form.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Top from "./Top.js";
import Recipes from "./Recipes.js";

export default function App() {


  return (
    <div>
      <Nav />
      <Top/>
      <Recipes />
      <Container>
        <Grow in>
          <Container align="center">
              <Grid item xs={12} sm={6}>
              <Form />
              </Grid>
          </Container>
        </Grow>
      </Container>
      
      <Footer />
    </div>
  );
}

import Routes from "./routes";
import { Header, Grid, Footer, App as AppLayout } from "./components/layouts";
import { ErrorBoundry } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundry>
        <AppLayout>
          <Header />
          <Grid>
            <Routes />
          </Grid>
          <Footer />
        </AppLayout>
      </ErrorBoundry>
    </BrowserRouter>
  );
}

export default App;

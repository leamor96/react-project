import { Container } from "react-bootstrap";
import { Routes,Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import TopNav from "./components/top-nav/TopNav"
import CostumeList from "./routes/CostumeList";
import Chores from "./routes/Chores";
import Footer from "./components/footer/Footer";
import CardList from "./pages/card-list/CardList";
import EditCard from "./pages/edit-card/EditCard";
import CardDetails from "./pages/card-details/CardDetails";
import GoToTop from "./components/buttons/GoToTop";


function App() {
  return (
    <>
      <TopNav />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chores" element={<Chores />} />
          <Route path="/chores/*" element={<CardList />} />
          <Route path="/chores/cards" element={<CardList />} />
          <Route path="/chores/cards/edit/:id" element={<EditCard />} />
          <Route path="/chores/cards/details/:id" element={<CardDetails />} />
          <Route path="/costumelist" element={<CostumeList />} />
        </Routes>
        <GoToTop />
      </Container>
      <Footer />
    </>
  );
}

export default App;

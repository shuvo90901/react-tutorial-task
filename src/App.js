import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./Component/ToggleButton";
import SimpleCounter from "./Component/Counter";
import ColorPicker from "./Component/ColorPicker";
import FetchApi from "./Component/FetchApi";
import TimerWithControls from "./Component/TimeWithControls";
import DatePicker from "./Component/DatePicker";
import Navbar from "./Component/Navbar";
import Modal from "./Component/Modal";
import Accordion from "./Component/Accordion";
import Form from "./Component/Form";
import Table from "./Assignment/Table";
import Carousel from "./Assignment/Carousel";
import ProductList from "./Assignment/ProductList";
import Pagination from "./Assignment/PaginationMain";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h3 className="text-2xl font-bold mb-5  mt-20"> Build a Toggle Button</h3>
      <ToggleButton />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        Implement a Simple Counter
      </h3>
      <SimpleCounter />
      <h3 className="text-2xl font-bold mb-5  mt-20">Build a Color Picker</h3>
      <ColorPicker />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        {" "}
        Build a Timer with Start and Stop Buttons
      </h3>
      <TimerWithControls />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        Implement a Date Picker
      </h3>
      <DatePicker />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        Build a Modal Component{" "}
      </h3>
      <Modal />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        Create an Accordion ComponentI
      </h3>
      <Accordion />
      <h3 className="text-2xl font-bold mb-5  mt-20">
        Display Data from an API
      </h3>
      <Form />
      <h3 className="text-2xl font-bold mb-5   mt-20">
        Display Data from an API
      </h3>
      <FetchApi />
      <h1 className="text-4xl my-20">Assignment</h1>
      <h3 className="text-2xl font-bold mb-5   mt-20">
        Create a Dynamic Table Component
      </h3>

      <Table />
      <Carousel />
      <ProductList />
      <Pagination />
    </div>
  );
}

export default App;

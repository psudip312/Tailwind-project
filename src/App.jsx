import "./App.css";
import logo from "../img/logo.svg"
function App() {
      // suru ma hidden huncha ra jada md or medium or more then medium ma hit garyo vane 
        // hidden hata
  return (
    <>
      <h1>hello</h1>
      <h1 className="text-6xl">fjdfjdf</h1>
      <nav class="relative container mx-auto p-6 ">
        <div class="flex items-center justify-between">
          
        <div class="pt-2">
          <img src={logo}/>
        </div>
    
        <div class="hidden md:flex space-x-6">
          <a href="#">Pricing</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Carrers</a>
          <a href="#">Community</a>

        </div>
        </div>
      </nav>
    </>
  );
}

export default App;

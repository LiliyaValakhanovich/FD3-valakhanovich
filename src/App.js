//@ts-nocheck
import './App.css';

 const product_list = [
  {
    name: "kitten",
    price: "100",
    url: "https://placekitten.com/640/360",
    ostatok: "2",
  },

  {
    name: "bacon",
    price: "220",
    url: "https://baconmockup.com/640/360",
    ostatok: "10", 
  },

  {
    name: "bear",
    price: "500",
    url: "https://placebear.com/640/360",
    ostatok: "1", 
  },

  {
    name: "cat",
    price: "300",
    url: "https://loremflickr.com/640/360",
    ostatok: "2", 
  },
 ]

 const shopName = "My product shop";

function App() {
  console.log()
  return (
    <div className="App">
      <span>{shopName}</span>
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Photo</th>
          <th>Price</th>
          <th>Remains</th>
        </tr>
        </thead>
        <tbody>
          <Shop product_list={product_list}/>
        </tbody>
      </table>
    </div>
  );
}
const Shop = (product_list) => {


  return product_list.product_list.map((el,i)=>{
    return (
      <tr key={i}>
        <td>{el.name}</td>
        <td><img src={el.photo} alt="product"/></td>
        <td>{el.price}</td>
        <td>{el.ostatok}</td>
      </tr>
  )})
  
 }

export default App;

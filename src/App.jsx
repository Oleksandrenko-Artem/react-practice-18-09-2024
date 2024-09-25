import UserProfile from "./components/UserProfile/UserProfile"
import Image from './components/UserProfile/Image/Image';
import Product from './components/UserProfile/Product/Product';

function App() {

  return <>
    <UserProfile name="Artem" age="16" email="artem2008.zp@gmail.com" />
    <UserProfile name="Tom" age="23" email="tom@gmail.com" />
    <UserProfile name="Alex" age="35" email="alex@gmail.com" />
    <Image url="https://particle.scitech.org.au/wp-content/uploads/2020/06/west-end-rotto-dec-2019-scaled.jpg" alt="sunset" />
    <table>
      <tr>
        <th>name</th>
        <th>quantity</th>
        <th>price</th>
      </tr>
      <Product name="Bread" quantity={1} price={80} />
      <Product name="Milk" quantity={5} price={60} />
      <Product name="Apple" quantity={3} price={50}/>
    </table>
  </>
}

export default App

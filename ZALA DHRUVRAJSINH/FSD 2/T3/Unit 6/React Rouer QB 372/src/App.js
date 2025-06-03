// 372 Create a React app to perform tasks as asked using functional component:
// 1)Create a react Router that includes three routes: Home, Product, and Contact
// and implement navigation between these routes. 2)Create a route that
// displays a Home page, Product details page and Contact details page. 3)
// When a user clicks on Home page it should navigate to home page and display
// “Welcome to LJU” in bold in h1 heading. When a user clicks on a Product
// page, it should navigate to the product detail page and display three products
// information with price and description using props. And when user clicks on
// Contact page it should navigate to contact details page and display contact
// information with blue color font.
import Navbar from './navbar.js'
function App(){
  return(
    <Navbar/>
  );
}
export default App
import React from 'react';
import {
  BrowserRouter,
  Routes, Route,
  Link
} from 'react-router-dom';

import Button from '@mui/material/Button';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';

function App() {

  function Home() {
    return (
      <>
        <h3>Our Services</h3>

        <div>
        We are India’s largest online renting portal, launching products for rent. <br /><br />
        
        Where people are bored of using the outdated tech products and stuffs, we are here to help you rent vast varity of new and latest technology products 
        you can order anywhere from India!!! <br /><br />
        
        "Rent is the new Trend". This tag line defines everything. 
        </div><br />
        
        Our products and services on rent with high quality.
        <br /><br />      
        </>
    )
  }

  function Categories() {
    return (
      <>
        <h3>Electronics & Appliances</h3>
        <h3>Vehicles (Two and Four Wheelers)</h3>
        <h3>Clothes</h3>
        <h3>Jewellery</h3>
      </>
    )
  }

  function Products() {
    return (
      <main className = "col-1">
        <h3>Products</h3>
      </main>
    )
  }

  function ContactUs() {
    return (
      <div style={{border: "solid 2px chocolate", paddingLeft: "30px"}}>
        <h2>Contact Information</h2>
        <h3>Address</h3>
        <p>300, Vivek street, <br/>
        Chennai-600028.</p><br/>

        <h3>Phone:</h3>
        <p>97xxx300xx</p><br/>

        <h3>Email:</h3>
        <p>info@rental.com</p>

        <h3>Website:</h3>
        <p>www.rental.com</p>
      </div>
    )
  }

  function Login() {
    return (
      <>
        <h2>Login</h2>
        <form>

          <label for="email">Email Id:</label>
          <input type="email" name="email"></input>
          <br /><br />

          <label for="password">Password:</label>
          <input type="password" name="password"></input>
          <br/><br />

          <button>Submit</button>

        </form>
      </>
    )
  }

  function SignUp() {
    return (
      <>
        <h3>Sign Up</h3>
        <form>

          <label for="fname">First Name:</label>
          <input type="text" name="fname"></input>
          <br /><br />

          <label for="lname">Last Name:</label>
          <input type="text" name="lname"></input>
          <br /><br />

          <label for="age">Age:</label>
          <input type="text" name="age"></input>
          <br /><br />

          <label for="email">Email Id:</label>
          <input type="email" name="email"></input>
          <br /><br />

          <label for="phone">Phone:</label>
          <input type="text" name="phone"></input>
          <br/><br />

          <button>Submit</button>

        </form>
      </>
    )
  }

  function AddToCart() {
    return (
      <>
        <h3>Home</h3>
      </>
    )
  }

  return (

    <div style={{ backgroundColor: "beige", padding:"15px 30px" }}>

    <h2 style={{ textAlign: "center",
                  backgroundColor: "chocolate",
                  borderRadius: "5px",
                  padding: "15px",
                  margin: "15px 0px"}}>Welcome Shoppers!!!</h2> 
      <div>            
      <BrowserRouter>
        <Link to="/">
          <Button style= {{backgroundColor: "ButtonFace"}}>Home</Button>
        </Link> &nbsp;
        <Link to="/categories">
          <Button style= {{backgroundColor: "ButtonFace"}}>Categories</Button>
        </Link> &nbsp;
        <Link to="/products">
          <Button style= {{backgroundColor: "ButtonFace"}}>Products</Button>
        </Link> &nbsp;
        <Link to="/contactus">
          <Button style= {{backgroundColor: "ButtonFace"}}>Contact Us</Button>
        </Link> &nbsp;
        <Link to="/login">
          <Button style= {{backgroundColor: "ButtonFace"}}>Login</Button>
        </Link> &nbsp;
        <Link to="/signup">
          <Button style= {{backgroundColor: "ButtonFace"}}>Sign Up</Button>
          </Link> &nbsp;
        <Link to="/addToCart">Add to Cart</Link> &nbsp;

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addToCart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App;

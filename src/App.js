import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { useState } from 'react';

function App() {
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(false)
  const [switch3, setSwitch3] = useState(false)
  const [milk1, setMilk1] = useState(true)
  const [milk2, setMilk2] = useState(true)
  const [milk3, setMilk3] = useState(true)
  const [cream1, setCream1] = useState(true)
  const [cream2, setCream2] = useState(true)
  const [cream3, setCream3] = useState(true)
  const [latte1, setLatte1] = useState(true)
  const [latte2, setLatte2] = useState(true)
  const [latte3, setLatte3] = useState(true)

  const [ev1, setEv1] = useState(0)
  const [ev2, setEv2] = useState(0)
  const [ev3, setEv3] = useState(0)
  const [cv1, setCv1] = useState(0)
  const [cv2, setCv2] = useState(0)
  const [cv3, setCv3] = useState(0)
  const [lv1, setLv1] = useState(0)
  const [lv2, setLv2] = useState(0)
  const [lv3, setLv3] = useState(0)
  const [total, setTotal] = useState(0)

  const obj = [
    {
      name: 'Espresso',
      val1: ev1,
      val2: ev2,
      val3: ev3,
    },
    {
      name: 'Cappuccino',
      val1: cv1,
      val2: cv2,
      val3: cv3,
    },
    {
      name: 'Latte',
      val1: lv1,
      val2: lv2,
      val3: lv3,
    }
  ]

  const handleE = () => {
    setSwitch1(true);
    setSwitch2(false);
    setSwitch3(false);
  }
  const handleC = () => {
    setSwitch1(false);
    setSwitch2(true);
    setSwitch3(false);
  }
  const handleL = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(true);
  }
  const handleCancel = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  }

  const handleMilk1 = () => {
    // obj[0].val1 = 60;
    setEv1(60);
    // total = total + 60;
    setTotal(total + 60);
    setMilk1(false);
  }

  const handleCream1 = () => {
    // obj[0].val2 = 75;
    setEv2(75);
    // total = total + 75;
    setTotal(total + 75);
    setCream1(false);
  }

  const handleLatte1 = () => {
    // obj[0].val3 = 100;
    setEv3(100);
    // total = total + 100;
    setTotal(total + 100);
    setLatte1(false);
  }

  const handleMilk2 = () => {
    // obj[1].val1 = 80;
    setCv1(80);
    // total = total + 80;
    setTotal(total + 80);
    setMilk2(false);
  }

  const handleCream2 = () => {
    // obj[1].val2 = 75;
    setCv2(75);
    // total = total + 75;
    setTotal(total + 75);
    setCream2(false);
  }

  const handleLatte2 = () => {
    // obj[1].val3 = 125;
    setCv3(125);
    // total = total + 125;
    setTotal(total + 125);
    setLatte2(false);
  }

  const handleMilk3 = () => {
    // obj[2].val1 = 100;
    setLv1(100);
    // total = total + 100
    setTotal(total + 100);
    setMilk3(false);
  }

  const handleCream3 = () => {
    // obj[2].val2 = 125;
    setLv2(125);
    // total = total + 125;
    setTotal(total + 125);
    setCream3(false);
  }

  const handleLatte3 = () => {
    // obj[2].val3 = 150;
    setLv3(150);
    // total = total + 150;
    setTotal(total + 150);
    setLatte3(false);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      {/* <button onClick={handleE}>Espresso</button>
      <button onClick={handleC}>Cappuccino</button>
      <button onClick={handleL}>Latte</button> */}

      <h1 className="h1-h1">Welocome to our coffee shop...</h1>

      <div className="container">

        <div className="Esp">
          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Espresso</Card.Title>
              <Card.Text>
              Pure coffee. Pure community. Pure experience.
              </Card.Text>
              <Button variant="success" onClick={handleE}>Buy</Button>
            </Card.Body>


            {
              switch1 ? (
                <>
                  {
                    milk1 ? (
                      <><button variant="primary" onClick={handleMilk1}>With milk for Rs.60</button></>
                    ) : (
                      <><button variant="primary" disabled>With milk for Rs.60</button></>
                    )
                  }
                  {
                    cream1 ? (
                      <><button variant="primary" onClick={handleCream1}>With cream for Rs.75</button></>
                    ) : (
                      <><button variant="primary" disabled>With cream for Rs.75</button></>
                    )
                  }
                  {
                    latte1 ? (
                      <><button variant="primary" onClick={handleLatte1}>Withe latte for Rs.100</button></>
                    ) : (
                      <><button variant="primary" disabled>Withe latte for Rs.100</button></>
                    )
                  }
                  {/* <button variant="primary" onClick={handleMilk1}>With milk for Rs.60</button>
                  <button variant="primary" onClick={handleCream1}>With cream for Rs.75</button>
                  <button variant="primary" onClick={handleLatte1}>Withe latte for Rs.100</button> */}
                  <button variant="primary" onClick={handleCancel}>Cancel</button>
                </>
              ) :
                (
                  <>
                    <button variant="primary" disabled>Espresso for Rs.60</button>
                    <button variant="primary" disabled>Cappuccino for Rs.75</button>
                    <button variant="primary" disabled>Latte for Rs.100</button>
                    <button variant="primary" disabled>Cancel</button>
                  </>
                )
            }

          </Card>

        </div>

        <div className="Cap">

          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Cappuccino</Card.Title>
              <Card.Text>
              Because you can never have too much coffee in your life.
              </Card.Text>
              <Button variant="success" onClick={handleC}>Buy</Button>
            </Card.Body>


            {
              switch2 ? (
                <>
                  {
                    milk2 ? (
                      <><button variant="primary" onClick={handleMilk2}>With milk for Rs.60</button></>
                    ) : (
                      <><button variant="primary" disabled>With milk for Rs.60</button></>
                    )
                  }
                  {
                    cream2 ? (
                      <><button variant="primary" onClick={handleCream2}>With cream for Rs.75</button></>
                    ) : (
                      <><button variant="primary" disabled>With cream for Rs.75</button></>
                    )
                  }
                  {
                    latte2 ? (
                      <><button variant="primary" onClick={handleLatte2}>Withe latte for Rs.100</button></>
                    ) : (
                      <><button variant="primary" disabled>Withe latte for Rs.100</button></>
                    )
                  }
                  {/* <button variant="primary" onClick={handleMilk2}>With milk for Rs.80</button>
                  <button variant="primary" onClick={handleCream2}>With cream for Rs.90</button>
                  <button variant="primary" onClick={handleLatte2}>With latte for Rs.125</button> */}
                  <button variant="primary" onClick={handleCancel}>Cancel</button>
                </>
              ) :
                (
                  <>
                    <button variant="primary" disabled>With milk for Rs.80</button>
                    <button variant="primary" disabled>With cream for Rs.90</button>
                    <button variant="primary" disabled>With latte for Rs.125</button>
                    <button variant="primary" disabled>Cancel</button>
                  </>
                )
            }

          </Card>

        </div>

        <div className="Lat">

          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Latte</Card.Title>
              <Card.Text>
              It’s not just coffee, it’s an experience.
              </Card.Text>
              <Button variant="success" onClick={handleL}>Buy</Button>
            </Card.Body>


            {
              switch3 ? (
                <>
                  {
                    milk3 ? (
                      <><button variant="primary" onClick={handleMilk3}>With milk for Rs.60</button></>
                    ) : (
                      <><button variant="primary" disabled>With milk for Rs.60</button></>
                    )
                  }
                  {
                    cream3 ? (
                      <><button variant="primary" onClick={handleCream3}>With cream for Rs.75</button></>
                    ) : (
                      <><button variant="primary" disabled>With cream for Rs.75</button></>
                    )
                  }
                  {
                    latte3 ? (
                      <><button variant="primary" onClick={handleLatte3}>Withe latte for Rs.100</button></>
                    ) : (
                      <><button variant="primary" disabled>Withe latte for Rs.100</button></>
                    )
                  }
                  {/* <button variant="primary" onClick={handleMilk3}>With milk for Rs.100</button>
                  <button variant="primary" onClick={handleCream3}>With cream for Rs.125</button>
                  <button variant="primary" onClick={handleLatte3}>With latte for Rs.150</button> */}
                  <button variant="primary" onClick={handleCancel}>Cancel</button>
                </>
              ) :
                (
                  <>
                    <button variant="primary" disabled>With milk for Rs.100</button>
                    <button variant="primary" disabled>With cream for Rs.125</button>
                    <button variant="primary" disabled>With latte for Rs.150</button>
                    <button variant="primary" disabled>Cancel</button>
                  </>
                )
            }

          </Card>

        </div>

      </div>

      <h1 className="h1-h1">Recipt</h1>

      <div className="App1">
        <table>
        <h3>Total = Rs. {total}</h3>
          <tr>
            <th>Products</th>
            <th>Milk</th>
            <th>Cream</th>
            <th>Latte</th>
          </tr>
          {obj.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>Rs. {val.val1}</td>
                <td>Rs. {val.val2}</td>
                <td>Rs. {val.val3}</td>
              </tr>
            )
          })}
        </table>
      </div>






    </div>
  );
}

export default App;

import logos from './components/images/logo.svg'
import backimg from './components/images/back-imgsvg.svg'
// import materCard from './components/images/mastercard_symbol.svg.svg'
import './App.css';
import { Input } from 'antd';
const handeClickMyCard = () => {

}

function App() {
  return (
    <>
      <div className='container'>
        <div className='header-card'>
          <div className='header'>
            <img src={logos} alt='logo' />

            <div className='btns'>
              <div className='nwbtn'></div>
              <button className='btn-new'>
                {/* <img src={cardImg} alt='cardImg' className='' /> */}

                New Credit Card </button>

              <button className='btn-my'>My Cards</button>
            </div>
            <div className='card-title'>
              <h1 className='title-c'>Add New Card</h1>
              <p className='subs_ctitle'>Do more with unlimited blocks, files, automations & integrations.</p>
            </div>

            <div className='card-inputs'>
              <p className='inp-title'>Who is</p>
              <Input placeholder="name" className='name-inp' />
              <p className='inp-title'>Payment Details</p>
              <Input placeholder="Card number" className='name-inp' />
              <p className='inp-title'>Payment Details</p>

              <Input size="large" placeholder="large size"/>
              <div className="buttons">
                <button className='can-btn'>cancel</button>
                <button className='my-btn' onClick={handeClickMyCard}>Add</button>
              </div>

              <p className='footer-title'>By providing your card information, you allow us to charge your card for future payment in accordance with their terms.</p>


            </div>

          </div>
          <div className="back-img">
            <img src={backimg} alt="backimg" />
          </div>


        </div>

      </div>

    </>
  );
}

export default App;

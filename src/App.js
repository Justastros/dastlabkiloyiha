import logo from './logo.svg';
import monitor from './monitor.avif'
import telefon from './telefon.webp'
import woman from './woman.webp'
import book from './book.webp'
import Quoetea11 from './Quoetea11.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header>
          <span>WIX</span>
          <div className='box'>
            <img src={monitor} alt='' />
            <img src={telefon} alt='' />
          </div>
          <span>Нажмите "Редактиповать"б чтобы создать свой сайт</span>
          <a href='#'>Падробнее</a>
          <button>Редактировать</button>
        </header>
        <section>
          <div className='top'>
            <div>
              <span> K.Griffith </span>
            </div>
            <div>
              <ul>
                <li> APPEARANCES </li>
                <li> BOOKS </li>
                <li> NEWS </li>
                <li> ABOUT </li>
                <li> CONTACT </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className='woman'>
            <img src={woman} alt="" />
            <div>
              <h1>Kayla Griffith</h1>
              <p>Award Winning Authior</p>
            </div>
          </div>
        </section>
        <section className='middle'>
          <div className='boxcha'>
            <div className='chap'>
              <button className='topButton'>New Release</button>
              <h2>The Swan Isle (2035)</h2>
              <p>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et alias consequatur nostrum.
                Explicabo quas magnam molestias qui reprehenderit minus temporibus ipsa,
                odio quasi quidem labore doloribus pariatur, dignissimos consequatur dolores!</p>
              <h3>Order Now</h3>
              <div className='bottom'>
                <button className='knopka'> Amazon </button>
                <button className='knopka'> Google </button>
                <button className='knopka'> ibooks </button>
              </div>
            </div>
            <img className='book' src={book} alt="" />
          </div>
        </section>
        <section className='tekstUchta'>
          <h1 className='orta'>Praise & Reviev</h1>
          <div className='tekstUchta1'>

            <div className='tekst1'>
              <img src={Quoetea11} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et alias consequatur nostrum.
                Explicabo quas magnam molestias qui reprehenderit minus temporibus ipsa,
                odio quasi quidem labore doloribus pariatur, dignissimos consequatur dolores!</p>
              <h5>'Swan Isle' is Griffith's best writing yet"The Times Boook Review</h5>
              <hr></hr>
            </div>
            <div className='tekst1'>
              <img src={Quoetea11} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et alias consequatur nostrum.
                Explicabo quas magnam molestias qui reprehenderit minus temporibus ipsa,
                odio quasi quidem labore doloribus pariatur, dignissimos consequatur dolores!</p>
              <h5>'Swan Isle' is Griffith's best writing yet"The Times Boook Review</h5>
              <hr></hr>
            </div>
            <div className='tekst1'>
              <img src={Quoetea11} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et alias consequatur nostrum.
                Explicabo quas magnam molestias qui reprehenderit minus temporibus ipsa,
                odio quasi quidem labore doloribus pariatur, dignissimos consequatur dolores!</p>
              <h5>'Swan Isle' is Griffith's best writing yet"The Times Boook Review</h5>
              <hr></hr>
            </div>

          </div>

        </section>
        <section className='blokchalar'>
          <h1 className='rang1'>See Upcoming Appearances</h1>
          <p>
            See Upcoming Appearances
          </p>
          <div className='blok'>
            <div>
              <h3>January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3><br />
              <button className='knopka1'>Join</button>
            </div>
          </div>
          <div className='blok'>
            <div>
              <h3>January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</h3><br />
              <button className='knopka1'>Join</button>
            </div>
          </div>
          <div className='blok'>
            <div>
              <h3>March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</h3><br />
              <button className='knopka1'>Join</button>
            </div>
          </div>
        </section>
        <section className='oxirgiSection'>
          <div className='oxirgi'>
            <img src={woman} alt="" className='oxirgi1' />
            <div className='oxirgi2'>
              <h1 className='rangh1'>About Kayla Griffith</h1>
              <p className='oxirgi3'>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et alias consequatur nostrum.
                Explicabo quas magnam molestias qui reprehenderit minus temporibus ipsa,
                odio quasi quidem labore doloribus pariatur, dignissimos consequatur dolores!</p>
              <button className='knopka1 boyi'>Read more</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

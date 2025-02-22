import { useState } from 'react'
import './App.css'
import FreeRoomsLogo from './assets/freeRoomsLogo.png';
import FreeRoomsLogoClosed from './assets/freeroomsDoorClosed.png';
import agsm from './assets/agsm.webp';
import ainsworth from './assets/ainsworth.webp';
import anitab from './assets/anitab.webp';
import biologicalScience from './assets/biologicalScience.webp';
import biologicalScienceWest from './assets/biologicalScienceWest.webp';
import blockhouse from './assets/blockhouse.webp';
import businessSchool from './assets/businessSchool.webp';
import civilBuilding from './assets/civilBuilding.webp';
import colombo from './assets/colombo.webp';
import cseBuilding from './assets/cseBuilding.webp';


function App() {
  const [isOpen, setLogo] = useState(true);

  const handleLogo = () => {
    setLogo(!isOpen);
  }

  return (
    <>
      <div className='page-container'>
        <div className='header'>
          <img
              className='logo'
              src={isOpen ? FreeRoomsLogo : FreeRoomsLogoClosed}
              onClick={handleLogo}
              alt="freerooms logo"
            />
          <h1>
            Freerooms
          </h1>
          <div className='icons-container'>
            <div className='icon-box'>
              <span class="material-icons icon-orange">search</span>
            </div>
            <div className='icon-box-fill'>
              <span class="material-icons-round icon-white">grid_view</span>
            </div>
            <div className='icon-box'>
              <span class="material-icons icon-orange">map</span>
            </div>
            <div className='icon-box'>
              <span class="material-icons-round icon-orange">dark_mode</span>
            </div>
          </div>
        </div>

        <div id='input-small'> <span class="material-icons">search</span>
            <input type="text" name="" id="" placeholder='Search for a building...'/>
          </div>
        <div className='filter-container'>
          <button className='button'><span class="material-icons">filter_alt</span>Filters</button>
          <div id='input'> <span class="material-icons">search</span>
            <input type="text" name="" id="" placeholder='Search for a building...'/>
          </div>
          <button className='button'><span class="material-icons">filter_list</span>Sort</button>
        </div>

        <div className='grid-container'>
          <div 
            className='building'
            style={{ 
              backgroundImage: `url(${agsm})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 9 rooms available</div>
            <div className='availability-small'>🟢 9/9</div>
            <div className='building-name'>AGSM</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${ainsworth})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 16 rooms available</div>
            <div className='availability-small'>🟢 16/16</div>
            <div className='building-name'>Ainsworth Building</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${anitab})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 44 rooms available</div>
            <div className='availability-small'>🟢 44/44</div>
            <div className='building-name'>Anita B Lawrence Centre</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${biologicalScience})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 6 rooms available</div>
            <div className='availability-small'>🟢 6/6</div>
            <div className='building-name'>Biological Sciences</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${biologicalScienceWest})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 8 rooms available</div>
            <div className='availability-small'>🟢 8/8</div>
            <div className='building-name'>Biological Sciences (West)</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${blockhouse})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 42 rooms available</div>
            <div className='availability-small'>🟢 42/42</div>
            <div className='building-name'>Blockhouse</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${businessSchool})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 18 rooms available</div>
            <div className='availability-small'>🟢 18/18</div>
            <div className='building-name'>Business School</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${civilBuilding})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 8 rooms available</div>
            <div className='availability-small'>🟢 8/8</div>
            <div className='building-name'>Civil Engineering Building</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${colombo})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 5 rooms available</div>
            <div className='availability-small'>🟢 5/5</div>
            <div className='building-name'>Colombo Building</div>
          </div>
          <div className='building'
            style={{ 
              backgroundImage: `url(${cseBuilding})`,
              backgroundSize: "cover"
            }}
          >
            <div className='availability'>🟢 7 rooms available</div>
            <div className='availability-small'>🟢 7/7</div>
            <div className='building-name'>Computer Science & Eng (K17)</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

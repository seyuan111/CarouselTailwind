import './App.css';
import {data} from './mockData'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

function App() {

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div className="App">
      <img className="w-full h-[260px]" src="https://sportsbetting.legal/wp-content/uploads/2023/03/NBA-PLAYOFF-BRACKET-based-on-the-standings-for-3-6-23.jpg"></img>
      <div className="relative flex items-center">
      <AiOutlineArrowLeft className="cursor-pointer" size={30} onClick={slideLeft}/>
      <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {data.map((item) => (
        <img className="w-[130px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img}></img>
      ))}
      </div>
      <AiOutlineArrowRight className="cursor-pointer" size={30} onClick={slideRight}/>
      </div>
    </div>
  );
}

export default App;

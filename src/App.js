import 'styles/styles.css';
import Academic from 'components/Academic/Academic';
import Experience from 'components/Experience/Experience';
import Header from 'components/Header/Header';
import Information from 'components/Information/Information';
import Profile from 'components/Profile/Profile';

function App() {
  return (
    <div className='lg:text-2xl md:text-xl text-gray-900'>
      <Header />
      <div className='lg:grid lg:grid-cols-4 lg:border-t-[3px] lg:border-t-[#83EFF7]'>
        <div>
          <Information />
        </div>
        <div className='md:grid md:grid-cols-2 lg:col-start-2 lg:col-end-6'>
          <div className='md:border-r-[3px] md:border-r-[#83EFF7] lg:border-l-[3px] lg:border-l-[#83EFF7]'>
            <Profile />
            <Experience />
          </div>
          <div>
            <Academic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

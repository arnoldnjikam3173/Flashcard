
import './App.css';
import Flashcard from './components/Flashcard';
import { useState, useEffect } from 'react';

import wcc from 'world-countries-capitals';

const App = () => {

  const [stateQuestion, setStateQuestion] = useState({
    numCurrent: 1,
    total: 4,
    isEnd: false,
    countries: {}
  });


  const getCountries = (num) => {
    return wcc.getNRandomCountriesData(num);
  }

  useEffect(() => {
    const data = getCountries(4);

    setStateQuestion({
      numCurrent: 1,
      total: 4,
      isEnd: false,
      countries: data
    });
  }, []);

  const handleClickNext = () => {
    if (stateQuestion.numCurrent < stateQuestion.total) {
      const nextNum= stateQuestion.numCurrent + 1;

      setStateQuestion({
        ...stateQuestion,
        numCurrent: nextNum
      });
    }

  }


  return (
    <Flashcard
      handleClickNext={e => handleClickNext()}
      numCurrent={stateQuestion.numCurrent}
      total={stateQuestion.total}
      data={stateQuestion.countries.length>0 ? stateQuestion.countries[stateQuestion.numCurrent-1]:{}}
    />
  );
}

export default App;

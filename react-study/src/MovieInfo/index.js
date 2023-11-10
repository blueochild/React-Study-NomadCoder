import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function Index() {
  return (
    <>
      {/* react-router-dom V6 */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* path에 '/:xxx' 를 넣으면 <Link to='/movie/123'>test</Link> 처럼 사용 가능  */}
          <Route path='/movie/:id' element={<Detail />} />
          <Route path='/hello' element={<h1>Hello</h1>}/>
        </Routes>
      </Router>
    </>
  );
}

export default Index;

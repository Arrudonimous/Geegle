import { Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' element={<Home />} />
    </Switch>
  );
}

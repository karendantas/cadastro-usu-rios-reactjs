import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import { UsersList } from '../pages/UsersList';

export default function AppRoutes (){
    return (
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/users' element = {<UsersList />} />
        </Routes>
    )
}
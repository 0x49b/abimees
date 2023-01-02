import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import {history} from '_helpers';
import {TopNav, PrivateRoute} from '_components';
import {Home} from 'home';
import {Login} from 'login';
import ClientList from "./client/ClientList";
import ClientEdit from "./client/ClientEdit";

export {App};

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <TopNav color={"dark"} light={true} dark={true} full={false} expand={"xl"} container={"fluid"}/>
            <div className="container pt-4 pb-4">
                <Routes>
                    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
                    <Route path="/clients" element={<PrivateRoute><ClientList/></PrivateRoute>}/>
                    <Route path="/clients/new" element={<PrivateRoute><ClientEdit/></PrivateRoute>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </div>
    );
}

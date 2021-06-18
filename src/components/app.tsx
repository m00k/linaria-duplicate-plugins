import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { styled } from '@linaria/react';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';

// https://github.com/callstack/linaria/blob/master/docs/BASICS.md#styling-custom-components
function CoolComponent({ className, style }: any): any {
    return (
        <div className={className} style={style}>
            catch up ketchup
        </div>
    );
}

const StyledCoolComponent = styled(CoolComponent)`
    background-color: tomato;
`;

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <StyledCoolComponent />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/profile/" component={Profile} user="me" />
                <Route path="/profile/:user" component={Profile} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;

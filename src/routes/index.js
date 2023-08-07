import HomePage from '../pages/Home';
import Football from '../pages/FootBall';
import Basketball from '../pages/Basketball';
import Volleyball from '../pages/Voleyball';
import Tennis from '../pages/Tennis';
import { Germany } from '../pages/FootBall/Nation/Germany';

import FootballPortugal from '../pages/FootBall/Nation/Portugal';
import FootballEngLand from '../pages/FootBall/Nation/England';
import FootballSpain from '../pages/FootBall/Nation/Spain';
import FootballItaly from '../pages/FootBall/Nation/Italy';
import FootballFrance from '../pages/FootBall/Nation/France';
import FootballNertherlands from '../pages/FootBall/Nation/Nertherlands';
import FootballTurkey from '../pages/FootBall/Nation/Turkey';
import FootballBelgium from '../pages/FootBall/Nation/Belgium';
import FootballAlgeria from '../pages/FootBall/Nation/Algeria';
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/football', component: Football },
    { path: '/basketball', component: Basketball },
    { path: '/volleyball', component: Volleyball },
    { path: '/tennis', component: Tennis },
    { path: '/football/germany', component: Germany },
    { path: '/football/portugal', component: FootballPortugal },
    { path: '/football/england', component: FootballEngLand },
    { path: '/football/italy', component: FootballItaly },
    { path: '/football/france', component: FootballFrance },
    { path: '/football/turkey', component: FootballTurkey },
    { path: '/football/belgium', component: FootballBelgium },
    { path: '/football/nertherlands', component: FootballNertherlands },
    { path: '/football/spain', component: FootballSpain },
    { path: '/football/spain', component: FootballAlgeria },
];
export const privateRoutes = [];

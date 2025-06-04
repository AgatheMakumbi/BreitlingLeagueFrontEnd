import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/pages/HomePage.vue";
import BreitlingSpecialist from "./components/pages/BreitlingSpecialist.vue";
import TrainingResources from "./components/pages/TrainingResources.vue";
import CollectionTool from "./components/pages/CollectionTool.vue";
import Scrolllytelling from "./components/pages/Scrolllytelling.vue";
import BreitlingCup from "./components/pages/BreitlingCup.vue";
import BreitlingLeague from "./components/pages/BreitlingLeague.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import Page1vs1Friend from './components/LeagueSubPages/Page1vs1Friend.vue';
import Page1vs1Random from './components/LeagueSubPages/Page1vs1Random.vue';
import OnBoarding from './components/LeagueSubPages/OnBoarding.vue';
import Profile1vs1 from './components/LeagueSubPages/Profile1vs1.vue';
import FinishedQuiz from './components/LeagueSubPages/FinishedQuiz.vue';
import Novelties from './components/LeagueSubPages/Novelties.vue';
import NoveltiesEndMiniGame from './components/LeagueSubPages/NoveltiesEndMiniGame.vue';
import NoveltiesTheory from './components/LeagueSubPages/NoveltiesTheory.vue';


const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/specialist-training', name: 'specialist', component: BreitlingSpecialist },
    { path: '/training-resources', name: 'training', component: TrainingResources },
    { path: '/collection-tool', name: 'collection', component: CollectionTool },
    { path: '/140-years', name: 'years', component: Scrolllytelling },
    { path: '/cup', name: 'cup', component: BreitlingCup },
    { path: '/league', name: 'league', component: BreitlingLeague },
    { path: '/user-profile', name: 'profile', component: UserProfile },
    {
        path: '/league/friends-duels', name: 'friend', component: Page1vs1Friend
    },
    {
        path: '/league/random-duels', name: 'random', component: Page1vs1Random
    },
    {
        path: '/league/onboarding', name: 'onboarding', component: OnBoarding
    },
    {
        path: '/league/profile1vs1', name: 'profile1vs1', component: Profile1vs1
    },
    {
        path: '/league/finishedquiz', name: 'finishedquiz', component: FinishedQuiz
    },
    {
        path: '/league/novelties', name: 'novelties', component: Novelties
    },
    {
        path: '/league/noveltiesEndMiniGame', name: 'noveltiesEndMiniGame', component: NoveltiesEndMiniGame
    },
    {
        path: '/league/noveltiesTheory', name: 'noveltiesTheory', component: NoveltiesTheory
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
}); 


export default router
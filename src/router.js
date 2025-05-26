
import HomePage from "./components/pages/HomePage.vue";
import BreitlingSpecialist from "./components/pages/BreitlingSpecialist.vue";
import TrainingResources from "./components/pages/TrainingResources.vue";
import CollectionTool from "./components/pages/CollectionTool.vue";
import Scrolllytelling from "./components/pages/Scrolllytelling.vue";
import BreitlingCup from "./components/pages/BreitlingCup.vue";
import BreitlingLeague from "./components/pages/BreitlingLeague.vue";
import UserProfile from "./components/pages/UserProfile.vue";

export const routes = [
    {path: "/", Component: HomePage},
    {path: "/specialist-training", Component: BreitlingSpecialist},
    {path: "/training-resources", Component: TrainingResources},
    {path: "/collection-tool", Component: CollectionTool},
    {path: "/140-years", Component: Scrolllytelling},
    {path: "/cup", Component: BreitlingCup},
    {path: "/league", Component: BreitlingLeague},
    {path: "/user-profile:my-pos", Component: UserProfile},




];
import { createWebHistory, createRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import TaxiComponent from "@/components/Taxi/TaxiComponent.vue";
import DriverComponent from "@/components/Driver/DriverComponent.vue";
import ClientComponent from "@/components/Client/ClientComponent.vue";
import RideComponent from "@/components/Ride/RideComponent.vue";
import CarModelComponent from "@/components/carModel/CarModelComponent.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: MainComponent,
    },
    {
        path: "/taxi",
        name: "taxi",
        component: TaxiComponent,
    },
    {
        path: "/driver",
        name: "driver",
        component: DriverComponent,
    },
    {
        path: "/client",
        name: "client",
        component: ClientComponent,
    },
    {
        path: "/ride",
        name: "ride",
        component: RideComponent,
    },
    {
        path: "/carmodel",
        name: "carModel",
        component: CarModelComponent,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
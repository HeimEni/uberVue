import { createWebHistory, createRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import TaxiComponent from "@/components/Taxi/TaxiComponent.vue";
import DriverComponent from "@/components/Driver/DriverComponent.vue";
import ClientComponent from "@/components/Client/ClientComponent.vue";
import RideComponent from "@/components/Ride/RideComponent.vue";
import CarModelComponent from "@/components/carModel/CarModelComponent.vue";
import newCarModelComponent from "@/components/carModel/NewCarModelComponent.vue";
import NewRideComponent from "@/components/Ride/NewRideComponent.vue";
import NewClientComponent from "@/components/Client/NewClientComponent.vue";
import NewDriverComponent from "@/components/Driver/NewDriverComponent.vue";
import NewTaxiComponent from "@/components/Taxi/NewTaxiComponent.vue";
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
        path: "/taxi/new",
        name: "taxiNew",
        component: NewTaxiComponent,
    },
    {
        path: "/driver",
        name: "driver",
        component: DriverComponent,
    },
    {
        path: "/driver/new",
        name: "driverNew",
        component: NewDriverComponent,
    },
    {
        path: "/client",
        name: "client",
        component: ClientComponent,
    },
    {
        path: "/client/new",
        name: "clientnew",
        component: NewClientComponent,
    },
    {
        path: "/ride",
        name: "ride",
        component: RideComponent,
    },
    {
        path: "/ride/new",
        name: "rideNew",
        component: NewRideComponent,
    },
    {
        path: "/carmodel",
        name: "carModel",
        component: CarModelComponent,
    },
    {
        path: "/carmodel/new",
        name: "carModelNew",
        component: newCarModelComponent,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
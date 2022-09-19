// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import PublicRoute from "./PublicRoute/PublicRoute";

// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// // const MyPhonePage = lazy(() => import('../pages/MyPhonePage/MyPhonesPage'));

// function UserRoutes() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Routes>                
//                 <Route element={<PublicRoute />}>
//                     {/* <Route path="/" element={<MyPhonePage />} /> */}
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                 </Route>
//                 <Route element={<PrivateRoute />}>
//                     <Route path="/contacts" element={<Contacts />} />
//                 </Route>
//             </Routes>
//         </Suspense>
//     );
// }

// export default UserRoutes;


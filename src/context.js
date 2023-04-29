// import React from "react";
// import Data from "./components/Card/Data";

// const CourseContext = createContext();
// const CourseProvider = ({ children }) => {
//   const [categories, setCategories] = useState()
//   const [singleCategory, setSingleCategory] = useState(category)
//   const filterCourses =() =>{
// Data.filter((course) => course.category ==category)
//   }
//   const [allParams, setAllParams] = useState({
//     courses: [],
//     sortedCourses: [],
//     loading: true,
//     category: "all",
//   });
//   useEffect(() => { 
//     setAllParams((prevState) => ({
//       ...prevState,
//       courses: Data
//     }));
//     console.log(allParams.courses);
//   }, []);
//   useEffect(() => {
//     console.log(allParams.courses);
//   }, [allParams.category]);
//   const filterCourses = () => {
//     courses.filter((course) => course.category == category);
//   };
//   return (
//     <CourseContext.Provider value={{ ...allParams }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// const CourseConsumer = CourseContext.Consumer;

// export function withCourseConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (
//       <CourseConsumer>
//         {(value) => <Component {...props} context={value} />}
//       </CourseConsumer>
//     );
//   };
// }

// export { CourseProvider, CourseConsumer, CourseContext };

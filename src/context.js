import React, { createContext, useEffect } from 'react'
import items from "./components/Card/Data"

const CourseContext = createContext();
const CourseProvider = ({children})=>{
    const [allParams, setAllParams] = useState({
        courses: [],
        sortedCourses: [],
        loading: true,
        type: "all"
    })
    useEffect(() => {
        setAllParams((prevState) => ({
          ...prevState,
          loading:false,
        }))
      }, [])
      
      const filterCourses = () => {
      let {type} = allParams
      let tempCourses = [...items]
      if(type!=="all"){
      tempCourses = tempCourses.filter((course) => course.type === type)
      }
      setAllParams((prevState) => ({
          ...prevState,
          sortedCourses: tempCourses
      }))
      }

      return (
        <CourseContext.Provider value ={{...allParams}}>
            {children}
        </CourseContext.Provider>
    )
}
const CourseConsumer = CourseContext.Consumer

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <CourseConsumer>
          {(value) => <Component {...props} context={value} />}
        </CourseConsumer>
      );
    };
  }
  
  export {CourseProvider,CourseConsumer,CourseContext };
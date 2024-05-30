import { create } from 'zustand'
import { currentData, aimData, courseData } from '../data/data'

const useCourseStore = create((set) => ({
    currentCourse: currentData,
    aimCourse: aimData,
    courseData: courseData,
  
}))

export default useCourseStore
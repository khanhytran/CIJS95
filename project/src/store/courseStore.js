import { create } from 'zustand'
import { currentData, aimData } from '../data/data'

const useCourseStore = create((set) => ({
    currentCourse: currentData,
    aimCourse: aimData,
  
}))

export default useCourseStore
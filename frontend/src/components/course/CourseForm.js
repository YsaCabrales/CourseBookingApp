import { useState } from "react"

const CourseForm = () => {
    const [courseDetails, setCourseDetails] = useState({
        title: '',
        description: '',
        instructor: '',
        duration: 0,
        availableSlots: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await localStorage.getItem('token');
            const response = await fetch('api/courses/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(courseDetails)
            })

            if (response) {
                const data = await response.json()
                console.log(data);
                setCourseDetails({
                    title: '',
                    description: '',
                    instructor: '',
                    duration: 0,
                    availableSlots: 0
                })
            } else {
                throw new Error("Failed to create course.")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Create a New Course</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value = {courseDetails.title} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    value = {courseDetails.description} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="instructor" 
                    placeholder="Instructor" 
                    value = {courseDetails.instructor} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="duration" 
                    placeholder="Duration" 
                    value = {courseDetails.duration} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="availableSlots" 
                    placeholder="Available Slots" 
                    value = {courseDetails.availableSlots} 
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CourseForm
import React from 'react'
import CourseCard from "@/app/(dashboard)/student/courses/ui/CourseCard";

const data = [
    {
        id: 1,
        thumbnail: "/1.jpg",
        title: "Data Science A-Z: Hands-On Exercises & ChatGPT Prize [2025]",
        description: "Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!",
        category: ["Data Science", "Artificial Intelligent"],
        instructor: "Kirill Eremenko",
        duration: "21",
        lectures: 217,
        difficulty: "All Levels",
        price: 1000000,
        rating: 4.6,
        status: "Published",
        reviews: 34693
    },
    {
        id: 2,
        thumbnail: "/2.jpg",
        title: "Machine Learning, Data Science & AI Engineering with Python",
        description: "Complete hands-on deep learning, AI engineering and Generative AI tutorial with data science, Tensorflow, GPT, OpenAI",
        category: ["Tensorflow", "Artificial Intelligent"],
        instructor: "Sundog Education by Frank Kane, Frank Kane, Sundog Education Team",
        duration: "21",
        lectures: 151,
        difficulty: "Beginner",
        price: 2189000,
        rating: 4.5,
        status: "Published",
        reviews: 35715
    }, {
        id: 3,
        thumbnail: "/3.jpg",
        title: "R Programming A-Z™: R For Data Science With Real Exercises!",
        description: "Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2",
        category: ["Data Science"],
        instructor: "Kirill Eremenko, SuperDataScience Team, Ligency ​",
        duration: "10.5",
        lectures: 79,
        difficulty: "All Levels",
        price: 2169000,
        rating: 4.5,
        status: "Published",
        reviews: 56344
    }, {
        id: 4,
        thumbnail: "/4.jpg",
        title: "Python for Data Science and Machine Learning Bootcamp",
        description: "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
        category: ["Data Science", "Machine Learning"],
        instructor: "Jose Portilla, Pierian Training",
        duration: "25",
        lectures: 165,
        difficulty: "All Levels",
        price: 1929000,
        rating: 4.6,
        status: "Published",
        reviews: 154155
    }, {
        id: 5,
        thumbnail: "/5.jpg",
        title: "Data Analysis with Pandas and Python",
        description: "Analyze data quickly and easily with Python's powerful pandas library! All datasets included. Beginners welcome!",
        category: ["Data Analyst", "Python"],
        instructor: "Boris Paskhaver",
        duration: "19.5",
        lectures: 141,
        difficulty: "All Levels",
        price: 2209000,
        rating: 4.7,
        status: "Published",
        reviews: 25218
    },
]

const CoursesBrowser = () => {
    return (
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data && (
                data.map((item) => (
                    <CourseCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title}
                                description={item.description} category={item.category} instructor={item.instructor}
                                duration={item.duration} difficulty={item.difficulty} price={item.price}
                                rating={item.rating} status={item.status} reviews={item.reviews}/>
                ))
            )}
        </div>
    )
}
export default CoursesBrowser

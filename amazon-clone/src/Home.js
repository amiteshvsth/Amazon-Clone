import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg" alt="" />
                <div className="home_row">
                    <Product id={1} title="Mother-Daughter Murder Night: A Reese Witherspoon Book Club Pick"
                        price={20.74} image='https://m.media-amazon.com/images/I/81HuBaEDAZL._SY466_.jpg'
                        rating={4} />
                    <Product id={2} title="Princeton Review Digital SAT Premium Prep, 2024: 4 Practice Tests + Online Flashcards + Review & Tools (2024) (College Test Preparation) "
                        price={23.70}
                        image='https://m.media-amazon.com/images/I/91zCNhR1amL._SY466_.jpg'
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product id={3} title="New York State Test Prep: 8th Grade Math Practice Workbook and Full-length Online Assessments: NYST Study Guide (NYST by Lumos Learning)"
                        price={21.95} image='https://m.media-amazon.com/images/I/4156KiN1cAL._SX342_SY445_.jpg'
                        rating={3} />
                    <Product id={4} title="Summer Bridge Activities 7th to 8th Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies, Fitness Summer Learning Activities, 8th Grade Workbooks All Subjects With Flash Cards "
                        price={8.89}
                        image='https://m.media-amazon.com/images/I/81Q2exWrZ3L._SY466_.jpg'
                        rating={5} />
                    <Product id={5} title="The Ultimate Kindergarten Math Workbook (IXL Workbooks) (IXL Ultimate Workbooks) "
                        price={24.49} image='https://m.media-amazon.com/images/I/51VvOMGGWhL._SX342_SY445_.jpg'
                        rating={5} />
                </div>
                <div className="home_row">
                    <Product id={6} title="The Ultimate Grade 2 Math Workbook (IXL Workbooks) (IXL Ultimate Workbooks) "
                        price={13.26} image='https://m.media-amazon.com/images/I/51v7sFRW9DL._SX342_SY445_.jpg'
                        rating={4} />
                </div>
            </div>

        </div>
    )
}

export default Home

import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from '../../assets/kenya.png'
import img2 from '../../assets/Wix-India.jpg'
import img3 from '../../assets/brazil.png'
import img4 from '../../assets/nigeria.png'

const NewsletterFAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is SeedSphere?",
            answer: "SeedSphere is a platform dedicated to empowering businesses, fostering innovation, and creating sustainable solutions.",
            isOpen: false,
        },
        {
            question: "How can I subscribe to the newsletter?",
            answer: "You can subscribe by entering your email in the form below and clicking the 'Subscribe' button.",
            isOpen: false,
        },
        {
            question: "How does the FAQ section work?",
            answer: "Click on any question to reveal the answer.",
            isOpen: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => (i === index ? { ...faq, isOpen: !faq.isOpen } : faq))
        );
    };

    const successStories = [
        { name: "Clean Water Initiative", place: "Kenya", image: img1 },
        { name: "Solar Energy for All", place: "India", image:  img2},
        { name: "Tech for Education", place: "Brazil", image: img3},
        { name: "Healthcare Access", place: "Nigeria", image: img4 },   
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-rose-300 via-rose-200 to-rose-100 text-white dark:from-rose-950 dark:via-rose-800 dark:to-rose-700">
            <div className="max-w-7xl mx-auto">
                {/* Success Stories Section */}
                <div className="mt-12 md:mt-24">
                    <h2 className="text-4xl font-extrabold text-center text-black dark:text-white">
                        Success Stories
                    </h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                                <img src={story.image} alt={story.name} className="w-full h-40 object-cover rounded-md" />
                                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">{story.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{story.place}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Newsletter Section */}
                <div className="text-center mt-10">
                    <SectionTitle
                        title="Stay Connected"
                        subtitle="Join our vibrant community by subscribing to our newsletter. Get the latest updates, exclusive content, and more directly in your inbox."
                    />
                    <div className="mt-10">
                        <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full sm:flex-1 px-6 py-3 text-gray-800 bg-white dark:bg-gray-900 rounded-lg focus:ring-4 focus:ring-white focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 text-lg font-semibold bg-rose-900 dark:bg-rose-400 hover:bg-rose-800 dark:hover:bg-rose-500 rounded-lg shadow-lg dark:text-black transition-transform transform focus:ring-4 focus:ring-rose-300 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                

            
            </div>
        </section>
    );
};

export default NewsletterFAQ;

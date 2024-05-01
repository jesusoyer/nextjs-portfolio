import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import profilePic from "./Profilepic.png";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    sendCopy: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkboxValue = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checkboxValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://gopnosc9w2.execute-api.us-east-2.amazonaws.com/prod/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // Optionally, reset the form or redirect the user.
      } else {
        console.error("Form submission failed.", await response.text());
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <section className="min-h-screen bg-palette5  dark:bg-gray-900 pt-20">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-palette2 capitalize dark:text-white lg:text-3xl">
              Contact me
            </h1>

            <p className="mt-4 text-palette2 dark:text-gray-400">
            Feel free to reach out to me either by sending a message or connecting through email and social media.
            </p>

            <form onSubmit={handleSubmit} className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-palette2 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="exampleInput90"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-palette2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-palette2  dark:focus:border-blue-400 focus:ring-palette2 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-palette2 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="exampleInput91"
                    placeholder="Your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-palette2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-palette2  dark:focus:border-blue-400 focus:ring-palette2 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-palette2 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full h-32 px-5 py-3 mt-2 text-palette2 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-palette2 dark:focus:border-blue-400 focus:ring-palette2 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-palette5 capitalize transition-colors duration-300 transform bg-palette1 rounded-md hover:bg-palette2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <Image
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src={profilePic}
              alt=""
            />
            <div className="mt-6 space-y-4 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-palette6 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-palette2 truncate w-72  dark:text-gray-400">
                  Jesus Oyervides Jr, Austin, TX
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-palette1 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-palette2 truncate w-72 dark:text-gray-400">
                    <Link href="mailto:jesusoyervidesinfo@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-palette1 ">
                  jesusoyervidesinfo@gmail.com
                  </Link>
                </span>
              </p>

              <p className="flex items-start -mx-2 ml-10">
              

                <span className="mx-2 text-palette2 truncate w-72 dark:text-gray-400">
                    <Link href="https://docs.google.com/document/d/16KS41bwDhJm7bEe7ch4Cvdoxu0OoOjYR-1LaPPzmO7w/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-palette1 underline underline-solid">
                  Developer Resume Link
                  </Link>
                </span>
               


              </p >
              <p className="flex items-start ml-10">

              <span className="mx-2 text-palette2 truncate w-72 dark:text-gray-400">
                    <Link href="https://docs.google.com/document/d/1-Z4cFljiCr8Ba5CvnpqjIZKTbNs65D55Jb0tk9jsAyk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-palette1 underline underline-solid">
                  Professional Resume Link
                  </Link>
                </span>

                </p>

            </div>

            <div className="mt-6 w-80 md:mt-8 ">
              <h3 className="text-palette2 dark:text-gray-300 ">Follow Me</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <Link
                  className=" dark:hover:text-blue-400 text-palette2 transition-colors duration-300 transform hover:text-blue-500"
                  href="https://github.com/jesusoyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="svg-snoweb svg-theme-light"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="50"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  className=" dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.linkedin.com/in/jesus-oyervides-jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="svg-snoweb svg-theme-light"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="50"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  className=" dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.facebook.com/profile.php?id=100093627480196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="svg-snoweb svg-theme-light"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="50"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M100,10.71V89.29A10.73,10.73,0,0,1,89.29,100H69.81V64.85H81.46L83.68,50.3H69.85V40.85c0-4,1.94-7.85,8.15-7.85h6.27V20.65a76.54,76.54,0,0,0-11.2-1c-11.42,0-18.88,7-18.88,19.57V50.3H41.49V64.85h12.7V100H10.71A10.73,10.73,0,0,1,0,89.29V10.71A10.73,10.73,0,0,1,10.71,0H89.29A10.73,10.73,0,0,1,100,10.71Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

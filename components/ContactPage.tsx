import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
  
}
// sendCopy: boolean;
export default function contactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
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
      const response = await fetch('https://3.82.151.217:5001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // Optionally, reset the form or redirect the user.
      } else {
        console.error('Form submission failed.', response.body);
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }
  };

    return (
        <div className="container my-52 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 ">
   
    <div className="container px-6 md:px-12">
      <div
        className="block bg-black rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <a href="https://www.linkedin.com/in/jesus-oyervides-jr/"
            target="_blank"
            className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="blue" className="mx-auto mb-6 h-8 w-8 text-white dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <h6 className="font-medium text-white">LinkedIn</h6>
            </a>
          </div>
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <a href="https://github.com/jesusoyer"
            target="_blank"
            className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="grey" className="mx-auto mb-6 h-8 w-8 text-white dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <h6 className="font-medium text-white ">GitHub</h6>
            </a>
          </div>
          
          <div className="mx-auto mb-6 text-center md:mb-0">
            <a  href="https://www.facebook.com/profile.php?id=100093627480196"
            target="_blank"
            className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="blue" className="mx-auto mb-6 h-8 w-8 text-white dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <h6 className="font-medium text-white">Facebook</h6>
            </a>
          </div>
          <div className="mx-auto text-center">
            <a  href="mailto:oyervidesjesus017@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="green" className="mx-auto mb-6 h-8 w-8 text-white dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
            </svg>
            <h6 className="font-medium text-white text-sm">oyervidesjesus017@gmail.com</h6>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <h1 className="text-white mb-2">Send Me a message</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input 
                className="`peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-[0.37rem] text-black focus:placeholder:opacity-100 data-[te-input-placeholder-active]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:placeholder-opacity-100 dark:peer-focus:text-primary`"
                type="text"
                id="exampleInput90"
                 placeholder="Name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange} />
              {/* <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                htmlFor="exampleInput90">Name
              </label> */}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input 
                className="`peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-[0.37rem] text-black focus:placeholder:opacity-100 data-[te-input-placeholder-active]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:placeholder-opacity-100 dark:peer-focus:text-primary`"
                type="email"
                id="exampleInput91"
                 placeholder="Your email address"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 
                  />
              {/* <label
                className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${
                  formData.email || !formData.email ? 'peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]' : ''
                } dark:text-neutral-200 dark:peer-focus:text-primary`}
                htmlFor="exampleInput91">Email address
              </label> */}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="`peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder-[0.37rem] text-black focus:placeholder:opacity-100 data-[te-input-placeholder-active]:placeholder:opacity-0 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:placeholder-opacity-100 dark:peer-focus:text-primary`"
                id="exampleFormControlTextarea1" rows={3} placeholder="Your message" name="message" value={formData.message} onChange={handleChange}></textarea>
              {/* <label htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label> */}
            </div>
            {/* <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                  value=""
                  id="exampleCheck96"
                  checked={formData.sendCopy}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, sendCopy: e.target.checked }))}
                 />
              <label className="text-white inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                Send me a copy of this message
              </label>
            </div> */}
            <button type="submit" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block w-full rounded bg-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
    );
  }
  
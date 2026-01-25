import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("An error occurred during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-neutral-800 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl font-light text-white mb-8">Connect With Me</h2>
              
              {/* Social Links */}
              <div className="space-y-6 mb-12">
                <Link
                  href="mailto:oyervidesjesus017@gmail.com"
                  className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="font-light">oyervidesjesus017@gmail.com</div>
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/jesus-oyervides-jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">LinkedIn</div>
                    <div className="font-light">Jesus Oyervides Jr.</div>
                  </div>
                </Link>

                <Link
                  href="https://github.com/jesusoyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">GitHub</div>
                    <div className="font-light">@jesusoyer</div>
                  </div>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="bg-neutral-900 border border-neutral-800 p-6">
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                  Location
                </h3>
                <p className="text-white font-light mb-4">Austin, Texas</p>
                
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4 mt-6">
                  Availability
                </h3>
                <p className="text-white font-light">
                  Open to new opportunities and freelance projects
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <div className="bg-neutral-900 border border-neutral-800 p-8">
                <h2 className="text-2xl font-light text-white mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-4 font-light uppercase tracking-wider text-sm hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-900/20 border border-green-700 text-green-400 px-4 py-3 text-sm">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/20 border border-red-700 text-red-400 px-4 py-3 text-sm">
                      ✗ Something went wrong. Please try emailing me directly.
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
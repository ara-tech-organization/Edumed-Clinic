import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const courses = [
    "Fellowship in Clinical Cosmetology",
    "Fellowship in Facial Aesthetics",
    "Fellowship in Clinical Trichology",
    "PG Diploma in Clinical Cosmetology",
    "PG Diploma in Facial Injectables",
    "Master in Facial Injectables",
    "Master in Hair Transplant",
    "Certificate Course in Medi Facial",
    "Certificate Course in Chemical Peel",
    "Certificate Course in Lasers",
    "Certificate Course in Semi-permanent Make up",
    "Certificate Course in Advanced Semi-Permanent Makeup",
    "Certificate Course in Injectables",
    "Workshop in Hydrafacial & Basic Chemical Peels",
    "Workshop in Semi-Permanent Makeup",
    "Diploma in Aesthetic Skin Technician",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qwzr0ek",        // ✅ Your EmailJS service ID
        "template_my3fj0o",       // ✅ Your EmailJS template ID
        formRef.current,
        "NfEcae-M2BEDXk3Po"       // ✅ Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
          onClose();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Title */}
              <Dialog.Title className="text-2xl font-bold text-[#032c40] mb-2">
                Get in touch
              </Dialog.Title>
              <p className="text-sm text-gray-600 mb-6">
                Fill out this form and await our response if you have an enquiry.
              </p>

              {/* FORM */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#032c40]">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">
                    Course
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {courses.map((course, idx) => (
                      <option key={idx} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    required
                    placeholder="Write your message here"
                    className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
                  />
                </div>

                {/* Hidden timestamp field */}
                <input type="hidden" name="time" value={formData.time} />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto bg-gray-100 text-[#032c40] font-semibold px-6 py-2 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#032c40] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#064b61]"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* FORM END */}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

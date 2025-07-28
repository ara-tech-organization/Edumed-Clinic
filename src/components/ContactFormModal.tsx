import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function ContactModal({ isOpen, setIsOpen }) {
  const courses = [
    'Fellowship in Clinical Cosmetology',
    'Fellowship in Facial Aesthetics',
    'Fellowship in Clinical Trichology',
    'PG Diploma in Clinical Cosmetology',
    'PG Diploma in Facial Injectables',
    'Master in Facial Injectables',
    'Master in Hair Transplant',
    'Certificate Course in Medi Facial',
    'Certificate Course in Chemical Peel',
    'Certificate Course in Lasers',
    'Certificate Course in Semi-permanent Make up',
    'Certificate Course in Advanced Semi-Permanent Makeup',
    'Certificate Course in Injectables',
    'Workshop in Hydrafacial & Basic Chemical Peels',
    'Workshop in Semi-Permanent Makeup',
    'Diploma in Aesthetic Skin Technician'
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                
              <Dialog.Title className="text-2xl font-bold text-[#032c40] mb-2">
                Get in touch
              </Dialog.Title>
              <p className="text-sm text-gray-600 mb-6">
                Fill out this form and await our response if you have an enquiry.
              </p>

              {/* FORM START */}
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#032c40]">Full name</label>
                  <input type="text" placeholder="Full Name" className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">Email address</label>
                  <input type="email" placeholder="Email address" className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">Phone number</label>
                  <input type="tel" placeholder="Phone number" className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">Course</label>
                  <select className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none">
                    <option disabled selected>Course</option>
                    {courses.map((course, idx) => (
                      <option key={idx}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#032c40]">Message</label>
                  <textarea rows="3" placeholder="Write your message here" className="mt-1 w-full rounded-md bg-gray-100 px-4 py-2 outline-none" />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
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

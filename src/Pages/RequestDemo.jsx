import React from 'react'

const RequestDemo = () => {
  return (
<div class="font-[sans-serif]">
      <div class="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="w-full h-full object-cover" />
      </div>

      <div class="-mt-28 mb-6 px-4">
        <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded">
          <h2 class="text-xl text-gray-800 font-bold">Product or Service Inquiry</h2>

          <form class="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Name</label>
              <input type='text' placeholder='Enter Name'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Email</label>
              <input type='email' placeholder='Email'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Number</label>
              <input type='email' placeholder='Phone No.'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Website</label>
              <input type='text' placeholder='Website'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Company</label>
              <input type='text' placeholder='Company'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Subject</label>
              <input type='text' placeholder='Subject'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div class="col-span-full">
              <label class="text-gray-800 text-sm block mb-2">Message</label>
              <textarea placeholder='Message' rows="6"
                class="w-full rounded px-4 border border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"></textarea>
            </div>
            <div class="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox"
                class="w-4 h-4 mr-3 shrink-0" />
              <label for="checkbox1" class="text-sm text-gray-500">I agree to the <a href="javascript:void(0);" class="underline">Terms and Conditions</a> and <a href="javascript:void(0);" class="underline">Privacy Policy</a></label>
            </div>

            <button type='button'
              class="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded text-sm px-4 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RequestDemo
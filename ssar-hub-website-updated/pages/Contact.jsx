
export default function Contact() {
  return (
    <div className='p-8 max-w-2xl mx-auto'>
      <h2 className='text-3xl font-semibold mb-4'>Contact Us</h2>
      <form name='contact' method='POST' data-netlify='true' className='space-y-4'>
        <input type='hidden' name='form-name' value='contact' />
        <div>
          <label className='block mb-1'>Name</label>
          <input type='text' name='name' required className='w-full border border-gray-300 p-2 rounded' />
        </div>
        <div>
          <label className='block mb-1'>Email</label>
          <input type='email' name='email' required className='w-full border border-gray-300 p-2 rounded' />
        </div>
        <div>
          <label className='block mb-1'>Message</label>
          <textarea name='message' rows='4' required className='w-full border border-gray-300 p-2 rounded'></textarea>
        </div>
        <button type='submit' className='px-4 py-2 bg-blue-700 text-white rounded'>Send Message</button>
      </form>
    </div>
  );
}

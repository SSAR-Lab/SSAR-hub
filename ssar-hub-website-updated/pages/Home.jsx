
export default function Home() {
  return (
    <div className='p-8 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Smart Systems and Applied Research Hub (SSAR-Hub)</h1>
      <p className='text-lg mb-6'>Driving innovation in Rwanda through advanced engineering, IoT, and smart mechanical systems.</p>
      <div className='space-x-4'>
        <a href='/about' className='px-4 py-2 bg-blue-600 text-white rounded'>Learn More</a>
        <a href='/projects' className='px-4 py-2 bg-green-600 text-white rounded'>Our Projects</a>
      </div>
    </div>
  );
}

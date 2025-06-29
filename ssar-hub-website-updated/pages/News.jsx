
export default function News() {
  return (
    <div className='p-8 max-w-3xl mx-auto'>
      <h2 className='text-3xl font-semibold mb-4'>News & Updates</h2>
      <ul className='list-disc pl-6 space-y-2'>
        <li>✅ SSAR-Hub launched MR Brake pilot testing in Kigali!</li>
        <li>✅ Partnership talks with local moto cooperatives underway</li>
        <li>✅ Looking for interns and researchers — <a href='/contact' className='text-blue-600 underline'>Contact us!</a></li>
      </ul>
    </div>
  );
}

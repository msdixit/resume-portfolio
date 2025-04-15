export default function Experience() {
    return (
      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">💼 Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold">Consultant - Deloitte</h3>
            <p className="text-sm text-gray-500">Mar 2021 - Present</p>
            <p className="mt-2">Worked on One Oregon Portal, Mobile App, Digital Wallet using .NET Core, React Native/JS, SQL Server. Led major CRs and cloud deployment.</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold">Senior Engineer - Tata Elxsi</h3>
            <p className="text-sm text-gray-500">Jul 2020 - Feb 2021</p>
            <p className="mt-2">Led team to develop Win CE software installer for GE. Specialized in C# and C++.</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-100">
            <h3 className="text-xl font-semibold">Software Developer - SPARC Pvt Ltd</h3>
            <p className="text-sm text-gray-500">Jan 2017 - Jun 2020</p>
            <p className="mt-2">Developed permit and forest geo-referencing apps for Odisha Government using .NET, Angular, Android.</p>
          </div>
        </div>
      </section>
    );
  }
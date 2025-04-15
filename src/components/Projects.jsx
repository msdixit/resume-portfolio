export default function Projects() {
    return (
      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2">🚀 Key Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold">One Oregon Portal</h4>
            <p>CRs, warning nudge framework, mobile app for applicants using React Native & .NET Core.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Digital Wallet</h4>
            <p>Developed web app using .NET Core and React JS for Oregon's digital wallet solution.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Permit Management System</h4>
            <p>Android + web app for Odisha Transport, supporting 35 RTAs and 8000+ operators.</p>
          </div>
        </div>
      </section>
    );
  }
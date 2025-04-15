export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-6 rounded-2xl shadow mb-6 flex flex-col md:flex-row items-center justify-between" data-aos="fade-down">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manisankar Dixit</h1>
          <p className="text-lg">Bangalore | 8455955050 | manisankardixit@gmail.com</p>
          <div className="mt-2 flex gap-4 text-sm">
            <a href="https://www.linkedin.com/in/manisankar-dixit-b2b849193" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/msdixit" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.hackerrank.com/manisankardixit" target="_blank" rel="noopener noreferrer" className="hover:underline">HackerRank</a>
            <a href="https://medium.com/@manisankardixit" target="_blank" rel="noopener noreferrer" className="hover:underline">Medium</a>
          </div>
        </div>
        <img src="https://undraw.co/api/illustrations/fc8225d5-c38a-4b7d-8256-4cc9d684b17f" alt="Developer Illustration" className="w-40 mt-4 md:mt-0" />
      </header>
    );
  }
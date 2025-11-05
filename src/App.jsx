import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Admissions from './components/Admissions'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <SectionDivider />
        <Internships />
        <Admissions />
        <Footer />
      </main>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  )
}

function Internships() {
  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Paid Practical Training (CPT)
          </h2>
          <p className="mt-4 text-gray-700">
            After several months of on-campus study, qualified students interview for paid practical training positions as software developers across the U.S. Typical starting salaries range from $80,000 to over $100,000 per year.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex gap-2"><span className="text-indigo-600">•</span> Dedicated career coaching in resume, interviewing, and communication skills</li>
            <li className="flex gap-2"><span className="text-indigo-600">•</span> Connections with hundreds of hiring partners and alumni</li>
            <li className="flex gap-2"><span className="text-indigo-600">•</span> Continue taking online courses while employed to complete your degree</li>
          </ul>
          <div className="mt-8">
            <a href="#apply" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500">Get Started</a>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] rounded-2xl border border-gray-100 p-1 shadow">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 grid grid-cols-6 gap-2 p-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="rounded-md bg-white/70 border border-white" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Hundreds of companies have hired our students for practical training roles</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-indigo-500" />
            <span className="font-semibold text-white">MIU ComPro</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            A unique Master’s in Computer Science with a paid practical training internship.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#program">Program</a></li>
            <li><a className="hover:text-white" href="#curriculum">Curriculum</a></li>
            <li><a className="hover:text-white" href="#internships">Internships</a></li>
            <li><a className="hover:text-white" href="#admissions">Admissions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Get Started</h4>
          <p className="mt-3 text-sm text-gray-400">Applications are reviewed year-round with multiple intakes.</p>
          <a href="#apply" className="mt-4 inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-white font-semibold hover:bg-indigo-400">Apply Now</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MIU ComPro — For demonstration purposes only.
      </div>
    </footer>
  )
}

export default App

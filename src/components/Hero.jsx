import { Rocket, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="py-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 rounded-full px-3 py-1">
                <Rocket className="h-3.5 w-3.5" /> Earn a Master’s + Paid Internship
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Computer Professionals Program (ComPro)
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Join one of the most unique Master’s in Computer Science programs in the United States — study advanced topics, gain real-world experience with a paid practical training internship, and graduate with in-demand skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
                >
                  Start Your Application
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-50"
                >
                  <Play className="h-4 w-4 mr-2" />
                  How It Works
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <Stat label="Placement Rate" value="98%" />
                <Stat label="Internship Salary" value="$80k-$100k" />
                <Stat label="Students" value="4,000+" />
                <Stat label="Countries" value="100+" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-2xl bg-white grid grid-cols-3 gap-2 p-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Beautiful campus, friendly community, and holistic education approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  )
}

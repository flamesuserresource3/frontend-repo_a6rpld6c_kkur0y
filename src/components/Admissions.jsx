import { CheckCircle2, Clock, MapPin, Briefcase, GraduationCap, FileText } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    desc: 'Submit your application with transcripts and test scores if available. No GRE required for most applicants.',
  },
  {
    icon: CheckCircle2,
    title: 'Get Accepted',
    desc: 'If you meet the requirements, receive an offer and guidance for the next steps, including visa support.',
  },
  {
    icon: MapPin,
    title: 'Arrive on Campus',
    desc: 'Begin with several months of on-campus, intensive study to build strong technical and soft skills.',
  },
  {
    icon: Briefcase,
    title: 'Paid Internship (CPT)',
    desc: 'Work as a software developer in a paid practical training position at a U.S. company.',
  },
  {
    icon: Clock,
    title: 'Continue Online Courses',
    desc: 'Take additional courses remotely while working to complete degree requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Graduate & Thrive',
    desc: 'Complete your MSCS degree and join a global alumni network at top tech companies.',
  },
]

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Admissions & Pathway
          </h2>
          <p className="mt-3 text-gray-600">
            A clear route from admission to graduation with paid practical training along the way.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-indigo-600">Step {idx + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
          >
            Apply Now
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-50"
          >
            View Curriculum
          </a>
        </div>
      </div>
    </section>
  )
}

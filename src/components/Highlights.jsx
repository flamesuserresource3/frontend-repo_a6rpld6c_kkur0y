import { Shield, DollarSign, BookOpen, Users, Globe } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Accredited & Respected',
    desc:
      'Earn a fully accredited U.S. Master’s degree from a university known for educating successful software engineers worldwide.',
  },
  {
    icon: DollarSign,
    title: 'Low Initial Payment',
    desc:
      'Begin the program with a low upfront cost. Pay the remainder from earnings during your paid internship.',
  },
  {
    icon: BookOpen,
    title: 'Modern Curriculum',
    desc:
      'Master Java, Web, Cloud, Data Science, and Software Engineering with deep focus on practical skills.',
  },
  {
    icon: Users,
    title: 'Strong Community',
    desc:
      'Learn with a diverse, supportive community focused on personal growth, leadership, and teamwork.',
  },
  {
    icon: Globe,
    title: 'International Friendly',
    desc:
      'Designed for international students with four intakes per year and visa support guidance.',
  },
]

export default function Highlights() {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Why ComPro at MIU?
          </h2>
          <p className="mt-3 text-gray-600">
            A unique blend of academic excellence, practical training, and personal development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Twitter, Linkedin, Youtube, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaVuejs, FaReact, FaNodeJs, FaJs, FaNpm } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import avatar from './img/alexgo.png'
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-mono">AleeeeexGoGoGogo</h1>
              <p className="text-gray-400">Frontend Engineer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed space-y-4">
              <span className="block">
                Hi, Im Alex. Im proficient in JavaScript, HTML, CSS, and
                TypeScript with an in-depth understanding of ES6.
              </span>

              <span className="block">
                In projects, I have:
                <ul className="list-disc list-inside">
                  <li>
                    Led the implementation of modular development and MVP
                    architecture
                  </li>
                  <li>
                    Introduced TypeScript to improve code reliability and
                    maintainability
                  </li>
                  <li>
                    Significantly reduced bug rates through systematic
                    improvements
                  </li>
                </ul>
              </span>

              <span className="block">
                With Less/Sass, I excel in:
                <ul className="list-disc list-inside">
                  <li>CSS modularization and engineering</li>
                  <li>Writing high-performance, reusable CSS</li>
                  <li>Implementing dynamic theme-switching functionality</li>
                </ul>
              </span>

              <span className="block">
                As a Vue and React expert, I:
                <ul className="list-disc list-inside">
                  <li>Master core principles for performance optimization</li>
                  <li>Expertly utilize hooks like useMemo and useCallback</li>
                  <li>Debug efficiently with deep framework understanding</li>
                  <li>Develop custom plugins and architecture solutions</li>
                </ul>
              </span>

              <span className="block">
                In front-end engineering with Webpack and Vite, I have:
                <ul className="list-disc list-inside">
                  <li>Optimized build processes through code splitting</li>
                  <li>Configured CDN usage and refined bundle loading</li>
                  <li>Led Vite adoption for improved HMR speed</li>
                  <li>Built custom team project scaffolding</li>
                  <li>Resolved cross-platform compatibility issues</li>
                </ul>
              </span>

              <span className="block">
                For performance optimization, I focus on:
                <ul className="list-disc list-inside">
                  <li>Improving overall code structure</li>
                  <li>Enforcing best practices</li>
                  <li>Refining build configurations</li>
                  <li>Implementing lazy loading</li>
                  <li>Optimizing component and asset loading</li>
                  <li>Adopting modern technologies like HTTP/2</li>
                </ul>
              </span>
            </p>
            <Button variant="outline" className="rounded-full">
              More about Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© by UIhub in Framer</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  Licensing
                </Link>
                <Link href="#" className="hover:text-white">
                  404
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Projects</h2>
              <Button variant="ghost" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'lolo-vscode',
                  description: 'a lowcode plugin',
                  image: '/placeholder.svg'
                },
                {
                  title: 'figmaToCode',
                  description:
                    'Mobile app design for tracking fitness and nutrition',
                  image: '/placeholder.svg'
                },
                {
                  title: 'Corporate Website',
                  description: 'Responsive website design for a tech startup',
                  image: '/placeholder.svg'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-4 flex items-start space-x-4"
                >
                  <div className="w-24 h-24 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {project.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-400 hover:text-blue-300"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* My Articles Section */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Articles</h2>
              <Button variant="ghost" size="icon">
                <span className="sr-only">View all articles</span>→
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'The Future of UI Design', date: 'May 15, 2023' },
                {
                  title: 'Maximizing User Experience in Mobile Apps',
                  date: 'April 22, 2023'
                },
                { title: 'Color Theory in Web Design', date: 'March 10, 2023' }
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.date}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <BookOpen className="w-5 h-5" />
                    <span className="sr-only">Read article</span>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Stack</h2>
              <Button variant="ghost" size="icon" className="text-white">
                <span className="sr-only">View all tools</span>→
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: FaVuejs, name: 'Vue' },
                { Icon: FaReact, name: 'React' },
                { Icon: FaNodeJs, name: 'Node.js' },
                { Icon: TbBrandNextjs, name: 'Next.js' },
                { Icon: FaJs, name: 'JavaScript' },
                { Icon: FaNpm, name: 'npm' }
              ].map(({ Icon, name }) => (
                <div
                  key={name}
                  className="w-16 h-16 bg-white rounded-xl flex items-center justify-center"
                  title={name}
                >
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
              ))}
            </div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact</h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
              >
                <span className="sr-only">Contact me</span>→
              </Button>
            </section>

            {/* Happy Clients Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 1.371 1.24.588 1.81l-2.8 2.034a1 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Happy Clients</p>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

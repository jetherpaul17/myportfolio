import React from 'react'

const Experiences = () => {
  const timeline = [
    {
      date: 'Oct 2020 – Dec 2025',
      title: 'Content Moderator',
      description:
        'I reviewed and evaluated user‑generated content to ensure alignment with platform policy guidelines, consistently maintaining a safe and compliant online environment. Throughout each shift, I flagged an average of more than 400 items for further review or removal, demonstrating strong attention to detail and efficiency. I also collaborated closely with team leads to enhance moderation accuracy and improve overall turnaround time, contributing to a more effective and responsive moderation workflow.',
      color: 'bg-orange-600',
    },
    {
      date: 'Sep 2025 – Nov 2025',
      title: 'Freelance Virtual Assistant (Short-term Project)',
      description:
        'I deliver comprehensive administrative support while also creating digital materials such as social media graphics to enhance brand communication. I conduct thorough research and gather relevant information as needed to support decision‑making, content development, and overall project execution.',
      color: 'bg-orange-600',
    },
    {
      date: 'Jun 2019 – Aug 2020',
      title: 'Customer Service Associate',
      description:
        'I handled more than 100 daily inquiries from UK‑based customers, addressing concerns related to billing, sales, and technical support with clarity and professionalism. I also utilized CRM systems for accurate documentation and workflow tracking, which helped improve overall team efficiency and service consistency.',
      color: 'bg-orange-600',
    },
    {
      date: 'Dec 2018 – Feb 2019',
      title: 'Internship: Office Staff',
      description:
        'I managed office supplies and maintained documentation to support daily operations, while also shadowing IT staff to learn basic troubleshooting procedures.',
      color: 'bg-orange-600',
    },
  ]

  return (
    <div id='experiences' className="bg-gray-100 py-20 px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold text-orange-600 mb-16 text-center">
        Experiences
      </h1>

      <div className="relative max-w-4xl mx-auto">
        {/* orange line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-orange-600"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              className={`mb-20 flex justify-between items-center w-full relative ${
                isLeft ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* content box */}
              <div className="bg-gray-900 p-4 md:p-6 rounded-md shadow-[0_4px_8px_rgba(234,88,12,0.7)] w-11/12 md:w-5/12">
                <p className="text-gray-200 font-medium text-xs md:text-sm mb-1">{item.date}</p>
                <h3 className="text-lg md:text-2xl font-bold text-gray-200 mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm md:text-base">{item.description}</p>
              </div>

              {/* orange dot */}
              <div
                className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full ${item.color}`}
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experiences
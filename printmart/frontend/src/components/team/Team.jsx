const people = [
    {
      name: 'Ayush Patel',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQFvENXvonhvyw/profile-displayphoto-shrink_100_100/0/1691085061614?e=1724889600&v=beta&t=fvW1BTftg8dATmHbIO19KggEu6U-e6sdJaLzfOOSepI',
    },
    {
        name: 'Neeraj ',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQEDl8xGbw0XcQ/profile-displayphoto-shrink_100_100/0/1689775356097?e=1724889600&v=beta&t=N2kAMfpKIVsnEWlm-y2KHCxngKjDzuxV65fzNNe2Q8Y',
      },
      {
        name: 'Akshat',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQEmVHJXlFvVCg/profile-displayphoto-shrink_100_100/0/1718252164507?e=1724889600&v=beta&t=8SAdtleT_nzrDO-Un-yepSHmOgU9FPsRcA2V5H_B0tc',
      },
      {
        name: 'Devansh ',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQF035mR-zM4Qw/profile-displayphoto-shrink_100_100/0/1665148390114?e=1724889600&v=beta&t=W8zZjMoWJgYkip3cacbgXrotJmZrVxQlhqH2lbs1NGc',
      },
      {
        name: 'Mukund ',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQHxsGwhcSywUg/profile-displayphoto-shrink_100_100/0/1690195533940?e=1724889600&v=beta&t=0GDNO_D93h8ONrKBwoBraDNTugOa7lyZuYzT5-u5LYs',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A team of students helping there friends
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
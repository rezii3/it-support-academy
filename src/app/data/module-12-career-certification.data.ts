import { Module } from '../core/models/academy.models';

export const MODULE_12_CAREER_CERTIFICATION: Module = {
  id: 'mod-12',
  order: 12,
  title: 'კარიერა და სერტიფიცირება (Career and Certification)',
  subtitle: 'CompTIA A+, Google IT Support, CV ქართული ბაზრისთვის და გასაუბრებისთვის მზადება',
  description: 'მოემზადეთ დასაქმებისთვის: საერთაშორისო სერტიფიკატების გეგმა, რეზიუმეს (CV) შედგენა საქართველოს ვაკანსიებისთვის, Home Lab პორტფოლიო და გასაუბრების კითხვები.',
  icon: '🎓',
  estimatedHours: 5,
  lessons: [
    {
      id: 'les-12-1',
      moduleId: 'mod-12',
      order: 1,
      title: 'CompTIA A+ და Google IT Support სერტიფიკატების სასწავლო გეგმა (Certification Study Plan)',
      durationMinutes: 25,
      summary: 'Core 1 და Core 2 გამოცდების სტრუქტურა, Google IT Support სერტიფიკატი და სწავლის სტრატეგია.',
      objectives: [
        'გაიგოთ CompTIA A+ (Core 1 & Core 2) გამოცდების თემატიკა და ფორმატი',
        'შეადგინოთ ეფექტური 8-კვირიანი სასწავლო გეგმა სერტიფიცირებისთვის'
      ],
      sections: [
        {
          heading: 'საერთაშორისო სერტიფიკატები: CompTIA A+ და Google IT Support',
          content: 'დამწყები IT Support სპეციალისტისთვის მსოფლიოში ორი ყველაზე აღიარებული სტანდარტია: 1. Google IT Support Professional Certificate (Coursera) — იდეალურია საბაზისო პრაქტიკული ცოდნისთვის (5 კურსი: ქსელები, OS, სისადმინობა, უსაფრთხოება). 2. CompTIA A+ — ინდუსტრიის ოქროს სტანდარტი, რომელიც შედგება 2 გამოცდისგან: Core 1 (220-1101: Mobile Devices, Networking, Hardware, Virtualization/Cloud, Troubleshooting) და Core 2 (220-1102: Operating Systems, Security, Software Troubleshooting, Operational Procedures). გამოცდა მოიცავს როგორც ტესტურ კითხვებს, ისე პრაქტიკულ სიმულაციებს (PBQs - Performance-Based Questions). საუკეთესო სასწავლო რესურსებია Professor Messer-ის უფასო ვიდეოკურსი და პრაქტიკული ტესტები.',
          codeOrCommand: 'Google IT Support -> CompTIA A+ (Core 1 + Core 2) -> CompTIA Network+',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to pass CompTIA A+ Core 1 and Core 2 study plan Professor Messer'
        }
      ],
      keyTerms: [
        {
          termKa: 'პრაქტიკული სიმულაციური კითხვები',
          termEn: 'PBQ (Performance-Based Questions)',
          definitionKa: 'CompTIA-ს გამოცდის ინტერაქტიული დავალებები, სადაც კანდიდატი სიმულაციურ გარემოში ასწორებს ხარვეზს.'
        },
        {
          termKa: 'კომპტია A+ სერტიფიკატი',
          termEn: 'CompTIA A+ Certification',
          definitionKa: 'საერთაშორისო Vendor-Neutral სერტიფიკატი, რომელიც ადასტურებს Junior IT Support სპეციალისტის კვალიფიკაციას.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): პირადი სერტიფიცირების გზამკვლევის შედგენა',
        ticketDescription: 'ჩამოწერეთ CompTIA A+ Core 1-ის 5 დომენი და შეაფასეთ თქვენი ცოდნა თითოეულში 1-დან 5 ქულამდე. დაგეგმეთ კვირაში 5 საათი სუსტი თემების (მაგ: პრინტერების დიაგნოსტიკა ან ქსელური პორტები) გასამყარებლად.',
        solutionSteps: [
          'ჩამოწერეთ: Hardware, Networking, Mobile, Cloud/Virtualization, Troubleshooting.',
          'გააკეთეთ ფლეშ-ბარათები ძირითადი პორტებისთვის (22, 53, 80, 443, 3389).'
        ]
      },
      quiz: {
        id: 'quiz-12-1',
        lessonId: 'les-12-1',
        moduleId: 'mod-12',
        title: 'ტესტი: CompTIA A+ და სერტიფიცირება',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-12-1-1',
            questionText: 'რამდენი ოფიციალური გამოცდის ჩაბარებაა საჭირო სრული CompTIA A+ სერტიფიკატის მისაღებად?',
            options: [
              { id: 'a', text: 'მხოლოდ 1 გამოცდის' },
              { id: 'b', text: '2 გამოცდის: Core 1 და Core 2' },
              { id: 'c', text: '5 გამოცდის' },
              { id: 'd', text: 'გამოცდის ჩაბარება არ არის საჭირო' }
            ],
            correctOptionId: 'b',
            explanation: 'CompTIA A+ სერტიფიკატის ასაღებად აუცილებელია ორივე ნაწილის — Core 1 (Hardware/Network) და Core 2 (OS/Security) ჩაბარება.'
          },
          {
            id: 'q-12-1-2',
            questionText: 'რას ნიშნავს CompTIA-ს გამოცდაზე ტერმინი PBQ (Performance-Based Question)?',
            options: [
              { id: 'a', text: 'შესვენების დროს' },
              { id: 'b', text: 'პრაქტიკულ სიმულაციურ დავალებას, სადაც ვირტუალურ ფანჯარაში უნდა შეასრულოთ კონფიგურაცია ან დიაგნოსტიკა' },
              { id: 'c', text: 'ზეპირ გასაუბრებას' },
              { id: 'd', text: 'რეზიუმეს ატვირთვას' }
            ],
            correctOptionId: 'b',
            explanation: 'PBQ ამოწმებს კანდიდატის პრაქტიკულ უნარს (მაგ: Wi-Fi როუტერის გამართვა ან CMD ბრძანების გაშვება).'
          },
          {
            id: 'q-12-1-3',
            questionText: 'რომელი თემები შედის ძირითადად CompTIA A+ Core 2 გამოცდაში?',
            options: [
              { id: 'a', text: 'მხოლოდ კვების ბლოკის დაშლა' },
              { id: 'b', text: 'ოპერაციული სისტემები (Windows/Linux/macOS), კიბერუსაფრთხოება, Software Troubleshooting და ოპერაციული პროცედურები' },
              { id: 'c', text: 'ვებ-დიზაინი და ფოტოშოპი' },
              { id: 'd', text: 'ბუღალტრული აღრიცხვა' }
            ],
            correctOptionId: 'b',
            explanation: 'Core 2 ფოკუსირებულია ოპერაციულ სისტემებზე, უსაფრთხოებასა და პროგრამულ მხარდაჭერაზე.'
          }
        ]
      }
    },
    {
      id: 'les-12-2',
      moduleId: 'mod-12',
      order: 2,
      title: 'IT Support-ის CV ქართული ბაზრისთვის და ვაკანსიების ძიება (CV & Georgian Job Portals)',
      durationMinutes: 25,
      summary: '1-გვერდიანი ტექნიკური CV-ის სტრუქტურა და სამუშაოს ძიება jobs.ge, hr.ge, cv.ge და LinkedIn-ზე.',
      objectives: [
        'შეადგინოთ ქართულ ბაზარზე მორგებული Junior IT Support-ის რეზიუმე (CV)',
        'ეფექტურად მოძებნოთ ვაკანსიები პლატფორმებზე: jobs.ge, hr.ge, cv.ge და LinkedIn'
      ],
      sections: [
        {
          heading: 'IT Support CV და ქართული დასაქმების პორტალები',
          content: 'Junior IT Support-ის რეზიუმე (CV) უნდა იყოს 1-გვერდიანი, PDF ფორმატში და მკაფიოდ დაყოფილი. აუცილებელი ბლოკებია: 1. საკონტაქტო ინფორმაცია (ქალაქი, ტელეფონი, პროფესიული Email, LinkedIn). 2. Technical Skills (დაყავით კატეგორიებად: OS: Windows 10/11, Windows Server; Directory & Cloud: Active Directory, GPO, Microsoft 365; Networking: TCP/IP, DNS, DHCP, VPN, RJ-45; Tools: Jira, AnyDesk, RDP, VirtualBox; Hardware: PC Assembly & Diagnostics). 3. Home Lab Projects & Courses (მაგ: CompTIA A+ კურსი, AD Home Lab). თუ გაქვთ B კატეგორიის მართვის მოწმობა, აუცილებლად მიუთითეთ — ქართულ კომპანიებში (ფილიალებისა და სერვის-ცენტრების მხარდაჭერისას) ეს დიდი უპირატესობაა. ვაკანსიები ეძებეთ ყოველდღიურად საიტებზე: jobs.ge, hr.ge, cv.ge და LinkedIn (საკვანძო სიტყვებით: IT Support, Help Desk, სისტემური ადმინისტრატორის ასისტენტი, ინჟინერ-ტექნიკოსი).',
          codeOrCommand: 'jobs.ge | hr.ge | cv.ge | linkedin.com',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to write an entry level IT Support Help Desk resume no experience'
        }
      ],
      keyTerms: [
        {
          termKa: 'ტექნიკური უნარების ბლოკი',
          termEn: 'Technical Skills Section',
          definitionKa: 'CV-ის უმთავრესი ნაწილი, სადაც კატეგორიების მიხედვით ჩამოთვლილია ტექნოლოგიები, პროტოკოლები და ხელსაწყოები.'
        },
        {
          termKa: 'კანდიდატების შერჩევის სისტემა',
          termEn: 'ATS (Applicant Tracking System)',
          definitionKa: 'პროგრამა, რომელიც CV-ში ეძებს საკვანძო სიტყვებს (მაგ: Active Directory, TCP/IP, Jira, CompTIA A+).'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): საკუთარი CV-ის Technical Skills ბლოკის აწყობა',
        ticketDescription: 'შექმენით თქვენი CV-ის "Technical Skills" სექცია 4 ქვეკატეგორიით (Networking, Systems & Directory, Ticketing & Remote Tools, Hardware) და შეინახეთ დოკუმენტი სახელით "Saxeli_Gvari_IT_Support_CV.pdf". შემდეგ შედით jobs.ge-სა და hr.ge-ზე და მოძებნეთ 3 აქტიური IT Support / ინჟინერ-ტექნიკოსის ვაკანსია.',
        solutionSteps: [
          'ჩამოწერეთ უნარები: AD, DNS, DHCP, M365, VirtualBox, Jira, AnyDesk, CompTIA A+.',
          'გადაიყვანეთ PDF ფორმატში და შეამოწმეთ მოთხოვნები jobs.ge / hr.ge / cv.ge-ზე.'
        ]
      },
      quiz: {
        id: 'quiz-12-2',
        lessonId: 'les-12-2',
        moduleId: 'mod-12',
        title: 'ტესტი: CV და სამუშაოს ძიება საქართველოში',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-12-2-1',
            questionText: 'რომელი ვებგვერდებია საქართველოში ყველაზე პოპულარული IT Support-ისა და ტექნიკური ვაკანსიების მოსაძებნად?',
            options: [
              { id: 'a', text: 'jobs.ge, hr.ge, cv.ge და LinkedIn' },
              { id: 'b', text: 'მხოლოდ კულინარიული ფორუმები' },
              { id: 'c', text: 'მხოლოდ უცხოური აუქციონის საიტები' },
              { id: 'd', text: 'ამინდის პროგნოზის საიტები' }
            ],
            correctOptionId: 'a',
            explanation: 'ქართული კომპანიების აბსოლუტური უმრავლესობა IT ვაკანსიებს აქვეყნებს jobs.ge, hr.ge, cv.ge და LinkedIn პლატფორმებზე.'
          },
          {
            id: 'q-12-2-2',
            questionText: 'როგორ უნდა წარმოადგინოს დამწყებმა კანდიდატმა პრაქტიკული ცოდნა CV-ში, თუ მას ჯერ არ აქვს ოფიციალური IT სამუშაო გამოცდილება?',
            options: [
              { id: 'a', text: 'დატოვოს CV სრულიად ცარიელი' },
              { id: 'b', text: 'გამოყოს "Home Lab Projects" და "Courses/Certifications" ბლოკი, სადაც აღწერს VirtualBox-ში აწყობილ Active Directory-ს, ქსელებსა და გავლილ კურსებს' },
              { id: 'c', text: 'მოიგონოს არარსებული დირექტორის პოზიცია' },
              { id: 'd', text: 'ჩაწეროს მხოლოდ სკოლის ნიშნები' }
            ],
            correctOptionId: 'b',
            explanation: 'Home Lab პროექტები დამსაქმებელს უჩვენებს, რომ კანდიდატს რეალურად აქვს ნამუშევარი სისტემებთან პრაქტიკაში.'
          },
          {
            id: 'q-12-2-3',
            questionText: 'რომელ ფორმატშია რეკომენდებული CV-ის გაგზავნა დამსაქმებელთან, რათა ფორმატირება და ქართული/ინგლისური შრიფტები არ აირიოს?',
            options: [
              { id: 'a', text: '.PDF ფორმატში' },
              { id: 'b', text: '.BAT სკრიპტის სახით' },
              { id: 'c', text: '.MP3 აუდიო ფაილით' },
              { id: 'd', text: '.TMP ფაილით' }
            ],
            correctOptionId: 'a',
            explanation: 'PDF ინარჩუნებს ზუსტ ვიზუალურ სტრუქტურას ნებისმიერ კომპიუტერსა და მობილურ მოწყობილობაზე.'
          }
        ]
      }
    },
    {
      id: 'les-12-3',
      moduleId: 'mod-12',
      order: 3,
      title: 'გასაუბრების კითხვები სანიმუშო პასუხებით და Home Lab პორტფოლიო (Interview Prep & Portfolio)',
      durationMinutes: 30,
      summary: 'ტექნიკურ გასაუბრებაზე ყველაზე ხშირად დასმული კითხვები, STAR მეთოდი და Home Lab-ის პრეზენტაცია.',
      objectives: [
        'თავდაჯერებულად უპასუხოთ Junior IT Support-ის გასაუბრების ტოპ ტექნიკურ კითხვებს',
        'გადმოსცეთ თქვენი Home Lab პროექტები STAR მეთოდის გამოყენებით'
      ],
      sections: [
        {
          heading: 'გასაუბრების კითხვები და Home Lab პორტფოლიო',
          content: 'IT Support-ის გასაუბრებაზე ყველაზე ხშირად სვამენ შემდეგ კითხვებს: 1. "რა განსხვავებაა DNS-სა და DHCP-ს შორის?" (პასუხი: DHCP ავტომატურად არიგებს IP მისამართებს ქსელში, ხოლო DNS თარგმნის დომენურ სახელებს IP მისამართებად). 2. "რას იზამთ, თუ მომხმარებელი ვერ ბეჭდავს?" (პასუხი: შევამოწმებ კვებას/ქსელს, გავასუფთავებ Print Queue-ს და გადავტვირთავ Print Spooler სერვისს). 3. "როგორ განბლოკავთ მომხმარებელს დომენში?" (პასუხი: გავხსნი dsa.msc-ს, მოვძებნი მომხმარებელს და მოვნიშნავ Unlock Account-ს). ქცევით კითხვებზე გამოიყენეთ STAR მეთოდი (Situation, Task, Action, Result). პორტფოლიოსთვის გადაუღეთ სქრინშოტები თქვენს VirtualBox ლაბორატორიას (AD Domain Controller, OU სტრუქტურა, GPO, გაშვებული PowerShell ბრძანებები) და აჩვენეთ გასაუბრებაზე.',
          codeOrCommand: 'STAR Method: Situation -> Task -> Action -> Result',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Top IT Support Help Desk interview questions and answers for beginners'
        }
      ],
      keyTerms: [
        {
          termKa: 'STAR პასუხის მეთოდი',
          termEn: 'STAR Method (Situation, Task, Action, Result)',
          definitionKa: 'გასაუბრებაზე პრაქტიკული მაგალითის მოყოლის სტრუქტურა: სიტუაცია, ამოცანა, მოქმედება და მიღწეული შედეგი.'
        },
        {
          termKa: 'საშინაო ლაბორატორიის პორტფოლიო',
          termEn: 'Home Lab Portfolio',
          definitionKa: 'ვირტუალურ გარემოში შესრულებული დავალებების (AD, DNS, Ticketing) დოკუმენტირებული კრებული დამსაქმებლისთვის საჩვენებლად.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): იმიტირებული გასაუბრება (Mock Interview)',
        ticketDescription: 'ხმამაღლა ან წერილობით უპასუხეთ გასაუბრების კითხვას: "თანამშრომელი გირეკავთ და გეუბნებათ, რომ ინტერნეტი არ აქვს — როგორ იმოქმედებთ?". დაალაგეთ პასუხი 4 ლოგიკურ ნაბიჯად (ფიზიკური კავშირი/Wi-Fi -> ipconfig/APIPA -> ping Gateway/8.8.8.8 -> DNS).',
        solutionSteps: [
          'ნაბიჯი 1-2: ვამოწმებ სხვა კომპიუტერებსაც ხომ არ გაეთიშათ (Impact) და ვამოწმებ კაბელს/Wi-Fi-ს და ipconfig-ს.',
          'ნაბიჯი 3-4: ვპინგავ Gateway-ს და 8.8.8.8-ს, ბოლოს ვამოწმებ DNS-ს (ipconfig /flushdns).'
        ]
      },
      quiz: {
        id: 'quiz-12-3',
        lessonId: 'les-12-3',
        moduleId: 'mod-12',
        title: 'ტესტი: გასაუბრება და პორტფოლიო',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-12-3-1',
            questionText: 'როგორ უნდა უპასუხოთ გასაუბრებაზე კითხვას: "რა განსხვავებაა DHCP-სა და DNS-ს შორის?"',
            options: [
              { id: 'a', text: 'DHCP ავტომატურად ანიჭებს მოწყობილობებს IP მისამართებს, ხოლო DNS გარდაქმნის დომენურ სახელებს (მაგ: google.com) IP მისამართებად' },
              { id: 'b', text: 'ორივე არის ანტივირუსული პროგრამა' },
              { id: 'c', text: 'DHCP აგრილებს პროცესორს, ხოლო DNS წმენდს ეკრანს' },
              { id: 'd', text: 'DNS არიგებს IP მისამართებს, ხოლო DHCP ხსნის ვებსაიტებს' }
            ],
            correctOptionId: 'a',
            explanation: 'ეს არის IT Support-ის გასაუბრების #1 კითხვა; მკაფიო გამიჯვნა DHCP-სა (IP განაწილება) და DNS-ს (სახელების თარგმნა) შორის აუცილებელია.'
          },
          {
            id: 'q-12-3-2',
            questionText: 'რა უნდა უპასუხოთ გასაუბრებაზე, თუ დაგისვეს რთული ტექნიკური კითხვა, რომლის ზუსტი პასუხიც არ იცით?',
            options: [
              { id: 'a', text: 'მოიგონოთ არასწორი ტექნიკური ფაქტები' },
              { id: 'b', text: 'გულწრფელად აღნიშნოთ, რომ ზუსტი პასუხი არ გახსოვთ, და ახსნათ თქვენი ლოგიკური მიდგომა — როგორ მოიძიებდით ინფორმაციას (ლოგები, KB, ოფიციალური დოკუმენტაცია) და საჭიროებისას დააესკალირებდით' },
              { id: 'c', text: 'დატოვოთ გასაუბრება' },
              { id: 'd', text: 'შეცვალოთ საუბრის თემა' }
            ],
            correctOptionId: 'b',
            explanation: 'დამსაქმებლები აფასებენ გულწრფელობასა და სწორ აზროვნებას: არავინ იცის ყველაფერი ზეპირად, მთავარია პრობლემის კვლევის უნარი.'
          },
          {
            id: 'q-12-3-3',
            questionText: 'რას ნიშნავს აბრევიატურა STAR გასაუბრებაზე პრაქტიკული შემთხვევის მოყოლისას?',
            options: [
              { id: 'a', text: 'Situation (სიტუაცია), Task (ამოცანა), Action (მოქმედება), Result (შედეგი)' },
              { id: 'b', text: 'Server, Terminal, Admin, Router' },
              { id: 'c', text: 'Switch, Topology, Address, Route' },
              { id: 'd', text: 'System, Tool, Application, Registry' }
            ],
            correctOptionId: 'a',
            explanation: 'STAR მეთოდი გეხმარებათ სტრუქტურირებულად და დამაჯერებლად მოყვეთ, როგორ გადაჭერით კონკრეტული ტექნიკური პრობლემა.'
          }
        ]
      }
    }
  ]
};
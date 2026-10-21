import { Module } from '../core/models/academy.models';

export const MODULE_8_HELPDESK_TICKETING: Module = {
  id: 'mod-8',
  order: 8,
  title: 'Help Desk და ტიკეტების სისტემები (Help Desk and Ticketing)',
  subtitle: 'მხარდაჭერის დონეები (L1/L2/L3), SLA, Jira, ServiceNow და ცოდნის ბაზა',
  description: 'შეისწავლეთ IT სამსახურის სტრუქტურა, ინციდენტების მართვა (ITSM), პრიორიტეტების მინიჭება, SLA ვადები და დოკუმენტაციის წარმოება.',
  icon: '🎫',
  estimatedHours: 6,
  lessons: [
    {
      id: 'les-8-1',
      moduleId: 'mod-8',
      order: 1,
      title: 'Help Desk და მხარდაჭერის დონეები (Support Levels L1 / L2 / L3)',
      durationMinutes: 25,
      summary: 'Tier 1, Tier 2 და Tier 3 გუნდების პასუხისმგებლობები და პირველი კონტაქტით მოგვარება (FCR).',
      objectives: [
        'გაარჩიოთ L1, L2 და L3 მხარდაჭერის დონეების ფუნქციები',
        'გაიგოთ First Contact Resolution (FCR) მაჩვენებლის მნიშვნელობა'
      ],
      sections: [
        {
          heading: 'მხარდაჭერის დონეები: L1, L2 და L3',
          content: 'IT მხარდაჭერა იყოფა სამ ძირითად დონედ (Tiers/Levels): Level 1 (L1 / Help Desk) არის პირველი ხაზი, რომელიც იღებს ზარებსა და ტიკეტებს, აგვარებს სტანდარტულ პრობლემებს (პაროლის განულება, Office-ის დაყენება, პრინტერის კონფიგურაცია) და ცდილობს მიაღწიოს მაღალ FCR-ს (First Contact Resolution — პრობლემის მოგვარება პირველივე მიმართვაზე). თუ საკითხი მოითხოვს ადგილზე მისვლას ან ღრმა დიაგნოსტიკას, ტიკეტი გადადის Level 2-ზე (L2 / Desktop & System Support). ხოლო Level 3 (L3) შედგება უფროსი სისტემური/ქსელური ინჟინრებისა და დეველოპერებისგან, რომლებიც მართავენ სერვერულ ინფრასტრუქტურას, ბაზებსა და არქიტექტურულ ხარვეზებს.',
          codeOrCommand: 'L1 (Triage & FCR) -> L2 (In-depth Support) -> L3 (Engineering)',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): IT Support levels Tier 1 Tier 2 Tier 3 Help Desk explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'პირველი კონტაქტით მოგვარება',
          termEn: 'FCR (First Contact Resolution)',
          definitionKa: 'მეტრიკა, რომელიც ზომავს L1 სპეციალისტის მიერ ესკალაციის გარეშე, პირველივე კომუნიკაციით მოგვარებული ტიკეტების პროცენტს.'
        },
        {
          termKa: 'პირველადი დახარისხება',
          termEn: 'Ticket Triage',
          definitionKa: 'შემოსული ტიკეტის კატეგორიის, სიმწვავისა და საჭირო ინფორმაციის სწრაფი შეფასება.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): ტიკეტების განაწილება დონეების მიხედვით',
        ticketDescription: 'გაანალიზეთ სამი შემთხვევა: 1) მომხმარებელს დაავიწყდა AD პაროლი, 2) ლეპტოპს შესაცვლელი აქვს დაზიანებული SSD დისკი ოფისში, 3) მთავარ Firewall-ზე დაირღვა BGP მარშრუტიზაცია. მიანიჭეთ თითოეულს შესაბამისი მხარდაჭერის დონე (L1, L2, L3).',
        solutionSteps: [
          '1) AD პაროლის განულება -> L1 (Help Desk).',
          '2) SSD-ის ფიზიკური შეცვლა -> L2 (Desktop Support); 3) BGP როუტინგი -> L3 (Network Architect).'
        ]
      },
      quiz: {
        id: 'quiz-8-1',
        lessonId: 'les-8-1',
        moduleId: 'mod-8',
        title: 'ტესტი: მხარდაჭერის დონეები L1/L2/L3',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-8-1-1',
            questionText: 'რომელი ამოცანა შედის სტანდარტულად Level 1 (L1) Help Desk სპეციალისტის მოვალეობაში?',
            options: [
              { id: 'a', text: 'კომპანიის ახალი Data Center-ის დაპროექტება' },
              { id: 'b', text: 'მომხმარებლის პირველადი დიაგნოსტიკა, პაროლის განულება (Password Reset) და საბაზისო პროგრამული დახმარება' },
              { id: 'c', text: 'ბირთვის (Kernel) კოდის გადაწერა' },
              { id: 'd', text: 'მთავარი კორპორატიული სერვერების ვირტუალიზაციის კლასტერის აწყობა' }
            ],
            correctOptionId: 'b',
            explanation: 'L1 წარმოადგენს პირველ ხაზს, რომელიც აგვარებს ყველაზე ხშირ, სტანდარტულ მომხმარებლის პრობლემებს.'
          },
          {
            id: 'q-8-1-2',
            questionText: 'რას ნიშნავს აბრევიატურა FCR (First Contact Resolution)?',
            options: [
              { id: 'a', text: 'კომპიუტერის ქარხნულ პარამეტრებზე დაბრუნებას' },
              { id: 'b', text: 'მომხმარებლის პრობლემის მოგვარებას პირველივე მიმართვისას, სხვა დონეზე გადამისამართების გარეშე' },
              { id: 'c', text: 'ქსელის კაბელის შემოწმებას' },
              { id: 'd', text: 'სერვერის სწრაფ გადატვირთვას' }
            ],
            correctOptionId: 'b',
            explanation: 'FCR არის Help Desk-ის ეფექტურობის ერთ-ერთი მთავარი საზომი (KPI).'
          },
          {
            id: 'q-8-1-3',
            questionText: 'რომელ დონეს (Tier/Level) გადაეცემა პრობლემა, რომელიც მოითხოვს სერვერული ბაზის ან ქსელის არქიტექტურის ღრმა ინჟინრულ ცვლილებას?',
            options: [
              { id: 'a', text: 'Level 0 (Self-Service)' },
              { id: 'b', text: 'Level 1 (Help Desk)' },
              { id: 'c', text: 'Level 3 (Senior Infrastructure / Engineering)' },
              { id: 'd', text: 'Reception' }
            ],
            correctOptionId: 'c',
            explanation: 'Level 3 აერთიანებს ვიწრო პროფილის უფროს ინჟინრებსა და არქიტექტორებს ყველაზე რთული ინციდენტებისთვის.'
          }
        ]
      }
    },
    {
      id: 'les-8-2',
      moduleId: 'mod-8',
      order: 2,
      title: 'ტიკეტის სასიცოცხლო ციკლი, პრიორიტეტი, SLA და ესკალაცია (Ticket Lifecycle & SLA)',
      durationMinutes: 30,
      summary: 'Incident vs Service Request, Impact + Urgency = Priority, SLA დროები და სწორი ესკალაცია.',
      objectives: [
        'განასხვავოთ ინციდენტი (Incident) და სერვისის მოთხოვნა (Service Request)',
        'გამოთვალოთ პრიორიტეტი (Impact & Urgency) და დაიცვათ SLA პირობები'
      ],
      sections: [
        {
          heading: 'Ticket Lifecycle, SLA და Escalation',
          content: 'ITSM-ში განვასხვავებთ ორ ცნებას: Incident (ინციდენტი — რაღაც გაფუჭდა, მაგ: ინტერნეტი გაითიშა) და Service Request (მოთხოვნა — ახალი მონიტორის ან წვდომის დამატება). ტიკეტი გადის ეტაპებს: New -> Assigned -> In Progress -> Pending (მოლოდინის რეჟიმი) -> Resolved (მოგვარებული) -> Closed (დახურული). ტიკეტის პრიორიტეტი (Priority P1-P4) ითვლება ფორმულით: Impact (გავლენა ბიზნესზე: რამდენ ადამიანს ეხება) + Urgency (სასწრაფოობა). SLA (Service Level Agreement) განსაზღვრავს ტიკეტზე პირველი რეაგირების (Response Time) და მოგვარების (Resolution Time) მაქსიმალურ დროს. თუ L1 ვერ აგვარებს პრობლემას, ხდება ესკალაცია (Escalation) L2-ზე სრული დიაგნოსტიკური ჩანაწერებით.',
          codeOrCommand: 'Priority = Impact x Urgency',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): IT Ticket Lifecycle SLA Priority Impact vs Urgency explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'მომსახურების დონის შეთანხმება',
          termEn: 'SLA (Service Level Agreement)',
          definitionKa: 'ოფიციალური სტანდარტი, რომელიც ადგენს რა დროში უნდა უპასუხოს და მოაგვაროს IT გუნდმა კონკრეტული პრიორიტეტის ტიკეტი.'
        },
        {
          termKa: 'ესკალაცია',
          termEn: 'Escalation',
          definitionKa: 'რთული ან მაღალი პრიორიტეტის ტიკეტის გადაცემა უფრო მაღალ ტექნიკურ დონეზე (L2/L3) ან მენეჯმენტთან.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): პრიორიტეტის განსაზღვრა და ესკალაციის შენიშვნა',
        ticketDescription: 'შემოვიდა ორი ტიკეტი: A) ბუღალტერიის მთელ დეპარტამენტს გაეთიშა ERP სერვერთან წვდომა ხელფასების დარიცხვის დღეს; B) ერთ თანამშრომელს სურს მეორე მაუსის გამოწერა. მიანიჭეთ თითოეულს ტიპი (Incident/Request), პრიორიტეტი (P1/P4) და დაწერეთ მოკლე Escalation Note პირველი ტიკეტისთვის.',
        solutionSteps: [
          'ტიკეტი A: Incident, High Impact + High Urgency = P1 (Critical).',
          'ტიკეტი B: Service Request, Low Impact + Low Urgency = P4 (Low).'
        ]
      },
      quiz: {
        id: 'quiz-8-2',
        lessonId: 'les-8-2',
        moduleId: 'mod-8',
        title: 'ტესტი: SLA, პრიორიტეტი და ესკალაცია',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-8-2-1',
            questionText: ' რომელი ორი ფაქტორის კომბინაციით განისაზღვრება ტიკეტის პრიორიტეტი (Priority)?',
            options: [
              { id: 'a', text: 'Impact (გავლენის მასშტაბი) და Urgency (სასწრაფოობა)' },
              { id: 'b', text: 'კომპიუტერის ფასი და წელი' },
              { id: 'c', text: 'თანამშრომლის ასაკი და სტაჟი' },
              { id: 'd', text: 'კვირის დღე და ამინდი' }
            ],
            correctOptionId: 'a',
            explanation: 'ITIL სტანდარტით Priority = Impact (რამდენ მომხმარებელს/სერვისს აზიანებს) + Urgency (რამდენად სწრაფად აჩერებს მუშაობას).'
          },
          {
            id: 'q-8-2-2',
            questionText: 'რას განსაზღვრავს SLA (Service Level Agreement) ტიკეტების სისტემაში?',
            options: [
              { id: 'a', text: 'პაროლის მინიმალურ სიგრძეს' },
              { id: 'b', text: 'ტიკეტზე რეაგირების (First Response) და მოგვარების (Resolution) გარანტირებულ დროის ჩარჩოებს' },
              { id: 'c', text: 'ოფისის ინტერნეტის ტარიფს' },
              { id: 'd', text: 'ანტივირუსის ლიცენზიის ვადას' }
            ],
            correctOptionId: 'b',
            explanation: 'SLA აკონტროლებს დროს, რომლის განმავლობაშიც IT ვალდებულია მიიღოს და გადაჭრას ხარვეზი.'
          },
          {
            id: 'q-8-2-3',
            questionText: 'რა უნდა გააკეთოს L1 სპეციალისტმა აუცილებლად სანამ ტიკეტს L2 გუნდთან დააესკალირებს (Escalate)?',
            options: [
              { id: 'a', text: 'წაშალოს მომხმარებლის შეტყობინება' },
              { id: 'b', text: 'ჩაწეროს Internal Note-ში უკვე ჩატარებული დიაგნოსტიკის ნაბიჯები, სიმპტომები და შეცდომის კოდები' },
              { id: 'c', text: 'დახუროს ტიკეტი Resolved სტატუსით' },
              { id: 'd', text: 'გათიშოს ტელეფონი' }
            ],
            correctOptionId: 'b',
            explanation: 'სწორი ესკალაცია მოითხოვს სრულ ტექნიკურ ჩანაწერს, რათა L2 ინჟინერმა დრო არ დაკარგოს იგივე კითხვების დასმაზე.'
          }
        ]
      }
    },
    {
      id: 'les-8-3',
      moduleId: 'mod-8',
      order: 3,
      title: 'Ticketing ხელსაწყოები (Jira Service Management, ServiceNow, Zendesk)',
      durationMinutes: 25,
      summary: 'თანამედროვე ITSM პლატფორმების ინტერფეისი, Queues, Internal Notes vs Public Reply.',
      objectives: [
        'გაეცნოთ Jira Service Management, ServiceNow და Zendesk პლატფორმებს',
        'სწორად გამოიყენოთ Internal Note და Public Comment დანიშნულებისამებრ'
      ],
      sections: [
        {
          heading: 'ITSM პლატფორმები: Jira, ServiceNow და Zendesk',
          content: 'კომპანიები ტიკეტების სამართავად იყენებენ ITSM (IT Service Management) სისტემებს: Jira Service Management (JSM) პოპულარულია ტექნოლოგიურ და Agile გუნდებში, ServiceNow არის მსხვილი კორპორაციების (Enterprise) სტანდარტი, ხოლო Zendesk ხშირად გამოიყენება მომხმარებელთა სწრაფი მხარდაჭერისთვის. სამივე სისტემაში არსებობს რიგები (Queues), სადაც ფილტრავთ გაუნაწილებელ (Unassigned) ან თქვენზე მომაგრებულ ტიკეტებს. უმნიშვნელოვანესია განასხვავოთ კომენტარის ორი ტიპი: Public Reply / Customer Comment (ჩანს მომხმარებელთან და მიდის მეილზე) და Internal Note / Work Note (ჩანს მხოლოდ IT გუნდის შიგნით ტექნიკური დეტალების ჩასანიშნად).',
          codeOrCommand: 'Queue -> Assign to Me -> Internal Note / Public Reply',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Jira Service Management and ServiceNow tutorial for IT Help Desk beginners'
        }
      ],
      keyTerms: [
        {
          termKa: 'შიდა ტექნიკური ჩანაწერი',
          termEn: 'Internal Note (Work Note)',
          definitionKa: 'კომენტარი ტიკეტში, რომელსაც ხედავენ მხოლოდ IT სპეციალისტები და არ ეგზავნება მომხმარებელს.'
        },
        {
          termKa: 'ტიკეტების რიგი',
          termEn: 'Ticket Queue',
          definitionKa: 'სტატუსის, პრიორიტეტის ან გუნდის მიხედვით დახარისხებული აქტიური ტიკეტების სია.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): ტიკეტის დამუშავების სიმულაცია',
        ticketDescription: 'წარმოიდგინეთ, რომ Jira Service Management-ში შემოვიდა ტიკეტი: "ვერ ვბეჭდავ ფაილს". დაწერეთ 1) Public Reply მომხმარებლისთვის (ზრდილობიანი დაზუსტება და დისტანციური კავშირის თხოვნა) და 2) Internal Note კოლეგებისთვის (Print Spooler სერვისისა და IP პორტის შემოწმების შედეგი).',
        solutionSteps: [
          'Public Reply: "გამარჯობა, ვიკვლევთ საკითხს. გთხოვთ მოგვწეროთ პრინტერის მოდელი ან AnyDesk ID."',
          'Internal Note: "შემოწმდა პრინტერის IP 192.168.1.50 — პაკეტები გადის, გასაწმენდია C:\\Windows\\System32\\spool\\PRINTERS."'
        ]
      },
      quiz: {
        id: 'quiz-8-3',
        lessonId: 'les-8-3',
        moduleId: 'mod-8',
        title: 'ტესტი: Jira, ServiceNow და Zendesk',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-8-3-1',
            questionText: 'რა განსხვავებაა Public Reply-სა და Internal Note-ს (Work Note) შორის Ticketing სისტემაში?',
            options: [
              { id: 'a', text: 'Public Reply ეგზავნება მომხმარებელს, ხოლო Internal Note ჩანს მხოლოდ IT მხარდაჭერის გუნდისთვის' },
              { id: 'b', text: 'Internal Note ქვეყნდება კომპანიის ვებსაიტზე' },
              { id: 'c', text: 'Public Reply იშლება 5 წუთში' },
              { id: 'd', text: 'ორივე ეგზავნება ყველა თანამშრომელს' }
            ],
            correctOptionId: 'a',
            explanation: 'Internal Note გამოიყენება შიდა ტექნიკური დოკუმენტაციისთვის, ხოლო Public Reply — უშუალოდ მომხმარებელთან კომუნიკაციისთვის.'
          },
          {
            id: 'q-8-3-2',
            questionText: 'რა არის პირველი მოქმედება, როდესაც საერთო რიგში (Unassigned Queue) იღებთ ახალ ტიკეტს სამუშაოდ?',
            options: [
              { id: 'a', text: 'ტიკეტის დაუყოვნებლივ წაშლა' },
              { id: 'b', text: 'ტიკეტის საკუთარ თავზე მიბმა (Assign to Me) და სტატუსის გადაყვანა In Progress-ზე' },
              { id: 'c', text: 'სტატუსის გადაყვანა Closed-ზე შემოწმების გარეშე' },
              { id: 'd', text: 'სხვა დეპარტამენტში გადაგზავნა კითხვის გარეშე' }
            ],
            correctOptionId: 'b',
            explanation: 'Assign to Me ატყობინებს გუნდს, რომ ტიკეტზე უკვე მუშაობთ და თავიდან აცილებს ორი სპეციალისტის მიერ ერთსა და იმავე საკითხზე დუბლირებულ მუშაობას.'
          },
          {
            id: 'q-8-3-3',
            questionText: 'როდის გადაგვყავს ტიკეტი "Pending / Waiting for Customer" სტატუსზე?',
            options: [
              { id: 'a', text: 'როცა მომხმარებლისგან ველოდებით დამატებით ინფორმაციას ან დისტანციურ დაშვებას და SLA ტაიმერი დროებით უნდა შეჩერდეს' },
              { id: 'b', text: 'როცა პრობლემა საბოლოოდ მოგვარდა' },
              { id: 'c', text: 'როცა სერვერი გადაიტვირთა' },
              { id: 'd', text: 'როცა სამუშაო დღე იწყება' }
            ],
            correctOptionId: 'a',
            explanation: 'Waiting for Customer აჩერებს SLA-ს ათვლას მანამ, სანამ მომხმარებელი პასუხს არ დააბრუნებს.'
          }
        ]
      }
    },
    {
      id: 'les-8-4',
      moduleId: 'mod-8',
      order: 4,
      title: 'ცოდნის ბაზის სტატიები და CRM ლოგირება (Knowledge Base & CRM Logging)',
      durationMinutes: 25,
      summary: 'KB სტატიების (SOP) შედგენა, თვითმომსახურება (Self-Service) და ზუსტი ლოგირება CRM-ში.',
      objectives: [
        'დაწეროთ სტრუქტურირებული Knowledge Base (KB) ინსტრუქცია',
        'აწარმოოთ სრულყოფილი ჩანაწერები (Call & Ticket Logging) CRM/ITSM ბაზაში'
      ],
      sections: [
        {
          heading: 'ცოდნის ბაზა (Knowledge Base) და CRM დოკუმენტირება',
          content: 'ცოდნის ბაზა (KB - Knowledge Base, მაგ: Confluence) ინახავს ნაბიჯ-ნაბიჯ ინსტრუქციებსა და სტანდარტულ პროცედურებს (SOP - Standard Operating Procedure). არსებობს ორი ტიპის KB სტატია: გარე/მომხმარებლის (Self-Service — მაგ: "როგორ დავუკავშირდეთ ოფისის Wi-Fi-ს"), რაც ამცირებს შემოსული ტიკეტების რაოდენობას, და შიდა ტექნიკური (IT-ისთვის — რთული ხარვეზების გადაჭრის გზები). კარგი სტატია შეიცავს: სათაურს, სიმპტომებს (Symptoms), მიზეზს (Root Cause) და ნაბიჯ-ნაბიჯ გადაწყვეტას (Resolution Steps). CRM-სა და Ticketing სისტემაში ყველა კომუნიკაცია (ზარი, ჩატი, ცვლილება) ზუსტად უნდა დალოგირდეს: თუ ეს არ წერია ტიკეტში, ჩათვალეთ, რომ არ გაკეთებულა.',
          codeOrCommand: 'Title -> Symptoms -> Cause -> Step-by-Step Resolution',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to write IT Knowledge Base articles and ticket documentation best practices'
        }
      ],
      keyTerms: [
        {
          termKa: 'ცოდნის ბაზა',
          termEn: 'Knowledge Base (KB)',
          definitionKa: 'სტატიებისა და ინსტრუქციების ცენტრალიზებული საცავი თანამშრომლებისა და IT გუნდისთვის.'
        },
        {
          termKa: 'სტანდარტული სამუშაო პროცედურა',
          termEn: 'SOP (Standard Operating Procedure)',
          definitionKa: 'გაწერილი ნაბიჯ-ნაბიჯ ინსტრუქცია კონკრეტული ტექნიკური დავალების ერთგვაროვნად შესასრულებლად.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): KB სტატიის შედგენა',
        ticketDescription: 'დაწერეთ მოკლე Knowledge Base (KB) სტატია თემაზე: "DNS ქეშის გასუფთავება როცა საიტი არ იხსნება". გამოყავით 3 სექცია: პრობლემის აღწერა (Symptoms), გადაჭრის ნაბიჯები (Resolution: CMD -> ipconfig /flushdns) და შემოწმება (Verification).',
        solutionSteps: [
          'სექცია 1 (Symptoms): ბრაუზერი წერს DNS_PROBE_FINISHED_NXDOMAIN.',
          'სექცია 2 (Resolution): გახსენით CMD -> აკრიფეთ ipconfig /flushdns -> გადატვირთეთ ბრაუზერი.'
        ]
      },
      quiz: {
        id: 'quiz-8-4',
        lessonId: 'les-8-4',
        moduleId: 'mod-8',
        title: 'ტესტი: Knowledge Base და CRM ლოგირება',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-8-4-1',
            questionText: 'რა სარგებელი მოაქვს მომხმარებლებისთვის ხელმისაწვდომ (Self-Service) Knowledge Base სტატიებს?',
            options: [
              { id: 'a', text: 'მომხმარებლები მარტივ კითხვებს თავად აგვარებენ და მცირდება L1-ზე შემოსული განმეორებადი ტიკეტების რაოდენობა' },
              { id: 'b', text: 'უმატებს კომპიუტერს ოპერატიულ მეხსიერებას' },
              { id: 'c', text: 'ცვლის ქსელის კაბელებს' },
              { id: 'd', text: 'აუქმებს პაროლების საჭიროებას' }
            ],
            correctOptionId: 'a',
            explanation: 'კარგი Self-Service სტატიები (მაგ: პრინტერის დამატება, VPN-ის ჩართვა) ზოგავს როგორც მომხმარებლის, ისე IT გუნდის დროს.'
          },
          {
            id: 'q-8-4-2',
            questionText: 'რომელი სტრუქტურაა ყველაზე ეფექტური ტექნიკური Knowledge Base (KB) სტატიის დასაწერად?',
            options: [
              { id: 'a', text: 'ერთი გრძელი აბზაცი სასვენი ნიშნების გარეშე' },
              { id: 'b', text: 'სათაური, სიმპტომები (Symptoms), მიზეზი (Cause) და დანომრილი გადაჭრის ნაბიჯები (Resolution Steps)' },
              { id: 'c', text: 'მხოლოდ სურათები ტექსტის გარეშე' },
              { id: 'd', text: 'მხოლოდ პროგრამული კოდი განმარტების გარეშე' }
            ],
            correctOptionId: 'b',
            explanation: 'სტრუქტურირებული ფორმატი (Symptoms -> Cause -> Resolution) საშუალებას იძლევა წამებში იპოვოთ და გაიმეოროთ გადაწყვეტა.'
          },
          {
            id: 'q-8-4-3',
            questionText: 'რატომ არის აუცილებელი სატელეფონო საუბრის შემდეგაც კი CRM / Ticketing სისტემაში დეტალური ჩანაწერის (Call Log) დატოვება?',
            options: [
              { id: 'a', text: 'რათა შეინახოს პრობლემის ისტორია, აუდიტის კვალი და სხვა სპეციალისტმაც იცოდეს რა გაკეთდა' },
              { id: 'b', text: 'კლავიატურის შესამოწმებლად' },
              { id: 'c', text: 'ინტერნეტის ტრაფიკის დასახარჯად' },
              { id: 'd', text: 'არ არის აუცილებელი, ზეპირი დამახსოვრება საკმარისია' }
            ],
            correctOptionId: 'a',
            explanation: 'დოკუმენტირებული ისტორია იცავს როგორც სპეციალისტს, ისე კომპანიას და აჩქარებს მომავალი ინციდენტების მოგვარებას.'
          }
        ]
      }
    }
  ]
};
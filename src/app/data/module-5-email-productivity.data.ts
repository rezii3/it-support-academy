import { Module } from '../core/models/academy.models';

export const MODULE_5_EMAIL_PRODUCTIVITY: Module = {
  id: 'mod-5',
  order: 5,
  title: 'ელფოსტისა და პროდუქტიულობის ადმინისტრირება (Email and Productivity Admin)',
  subtitle: 'Microsoft 365, Google Workspace, საფოსტო ყუთები და Outlook',
  description: 'შეისწავლეთ ღრუბლოვანი ოფისის პლატფორმების (M365 და Google Workspace) მართვა, ლიცენზიები, Shared Mailbox-ები და Outlook-ის პრობლემების მოგვარება.',
  icon: '📧',
  estimatedHours: 5,
  lessons: [
    {
      id: 'les-5-1',
      moduleId: 'mod-5',
      order: 1,
      title: 'Microsoft 365-ის ადმინისტრირების ცენტრი (Microsoft 365 Admin Center)',
      durationMinutes: 25,
      summary: 'მომხმარებლების შექმნა, ლიცენზიების მინიჭება (Licensing) და Exchange Admin Center-ის საფუძვლები.',
      objectives: [
        'მართოთ მომხმარებლები და ლიცენზიები admin.microsoft.com-ზე',
        'გაიგოთ ადმინისტრაციული როლების (Admin Roles) დანიშნულება'
      ],
      sections: [
        {
          heading: 'Microsoft 365 Admin Center და ლიცენზიები',
          content: 'Microsoft 365 Admin Center (admin.microsoft.com) არის მთავარი პანელი ღრუბლოვანი სერვისების სამართავად. აქ IT Support ქმნის მომხმარებლებს (Active Users), ანულებს პაროლებს და ანიჭებს ლიცენზიებს (Licenses), მაგალითად Business Standard ან E3. ლიცენზიის გარეშე მომხმარებელს არ ექნება საფოსტო ყუთი (Exchange Online Mailbox) და Office-ის აპლიკაციები. თანამშრომლის წასვლისას (Offboarding) ხდება შესვლის დაბლოკვა (Block sign-in) და მისი ფოსტის გადაყვანა საზიარო ყუთზე (Shared Mailbox), რათა წერილები შეინახოს უფასოდ, ლიცენზიის დაკავების გარეშე.',
          codeOrCommand: 'https://admin.microsoft.com',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Microsoft 365 Admin Center tutorial for beginners IT support'
        }
      ],
      keyTerms: [
        {
          termKa: 'ლიცენზიის მინიჭება',
          termEn: 'License Assignment',
          definitionKa: 'მომხმარებლის ანგარიშზე M365 პაკეტის მიბმა, რაც ააქტიურებს ფოსტას, Teams-სა და Office-ს.'
        },
        {
          termKa: 'შესვლის დაბლოკვა',
          termEn: 'Block Sign-in',
          definitionKa: 'უსაფრთხოების ფუნქცია, რომელიც მყისიერად უწყვეტს მომხმარებელს M365 სერვისებზე წვდომას.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): თანამშრომლის Offboarding M365-ში',
        ticketDescription: 'Microsoft 365 Admin Center-ში მოძებნეთ წასული თანამშრომლის ანგარიში, ჩაურთეთ "Block sign-in" და გადააკეთეთ მისი საფოსტო ყუთი Shared Mailbox-ად. ამის შემდეგ მოხსენით (Unassign) ფასიანი ლიცენზია, რათა კომპანიამ დაზოგოს ხარჯი.',
        solutionSteps: [
          'Active Users -> Select User -> Block sign-in.',
          'Mail tab -> Convert to shared mailbox -> Licenses and apps -> Uncheck license.'
        ]
      },
      quiz: {
        id: 'quiz-5-1',
        lessonId: 'les-5-1',
        moduleId: 'mod-5',
        title: 'ტესტი: Microsoft 365 Admin Center',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-5-1-1',
            questionText: 'რა არის საჭირო იმისათვის, რომ ახალშექმნილ M365 მომხმარებელს გაუაქტიურდეს Exchange Online საფოსტო ყუთი?',
            options: [
              { id: 'a', text: 'მხოლოდ კომპიუტერის გადატვირთვა' },
              { id: 'b', text: 'შესაბამისი ლიცენზიის მინიჭება (License Assignment)' },
              { id: 'c', text: 'ლოკალური დისკის დეფრაგმენტაცია' },
              { id: 'd', text: 'BIOS-ის განახლება' }
            ],
            correctOptionId: 'b',
            explanation: 'Exchange Online საფოსტო ყუთი იქმნება მხოლოდ შესაბამისი M365 ლიცენზიის მინიჭების შემდეგ.'
          },
          {
            id: 'q-5-1-2',
            questionText: 'როგორ შეგვიძლია შევინახოთ სამსახურიდან წასული თანამშრომლის წერილები ისე, რომ მისი ფასიანი ლიცენზია გავათავისუფლოთ?',
            options: [
              { id: 'a', text: 'წავშალოთ მომხმარებლის ანგარიში სამუდამოდ' },
              { id: 'b', text: 'გადავაკეთოთ საფოსტო ყუთი Shared Mailbox-ად და შემდეგ მოვხსნათ ლიცენზია' },
              { id: 'c', text: 'შევუცვალოთ სახელი' },
              { id: 'd', text: 'გავუთიშოთ ანტივირუსი' }
            ],
            correctOptionId: 'b',
            explanation: '50 GB-მდე Shared Mailbox-ს არ სჭირდება ლიცენზია და ინახავს ძველ მიმოწერას.'
          },
          {
            id: 'q-5-1-3',
            questionText: 'რომელი ადმინისტრაციული როლი უნდა მივანიჭოთ Junior IT Support-ს, თუ გვსურს რომ მან მხოლოდ პაროლები გაანულოს?',
            options: [
              { id: 'a', text: 'Global Administrator' },
              { id: 'b', text: 'Helpdesk Administrator (ან Password Administrator)' },
              { id: 'c', text: 'Billing Administrator' },
              { id: 'd', text: 'SharePoint Administrator' }
            ],
            correctOptionId: 'b',
            explanation: 'Helpdesk Administrator როლი იცავს Least Privilege პრინციპს და იძლევა პაროლების განულების უფლებას სრული გლობალური წვდომის გარეშე.'
          }
        ]
      }
    },
    {
      id: 'les-5-2',
      moduleId: 'mod-5',
      order: 2,
      title: 'Google Workspace-ის მართვის კონსოლი (Google Workspace Admin Console)',
      durationMinutes: 25,
      summary: 'Directory-ის მართვა, Organizational Units (OU), Google Drive-ის გაზიარების წესები და დომენის DNS ჩანაწერები.',
      objectives: [
        'მართოთ მომხმარებლები და OU სტრუქტურა admin.google.com-ზე',
        'გაიგოთ MX, SPF, DKIM და DMARC ჩანაწერების როლი ელფოსტის მუშაობაში'
      ],
      sections: [
        {
          heading: 'Google Workspace Admin Console და ელფოსტის DNS',
          content: 'Google Workspace Admin Console (admin.google.com) მართავს Gmail-ს, Google Drive-სა და Meet-ს კორპორატიული დომენისთვის. აქ მომხმარებლები ნაწილდებიან Organizational Units (OU) სტრუქტურაში, რათა სხვადასხვა დეპარტამენტს განსხვავებული უფლებები ჰქონდეს (მაგ: გარე გაზიარების შეზღუდვა Shared Drives-ში). თანამშრომლის დაბლოკვისთვის გამოიყენება ანგარიშის შეჩერება (Suspend User). იმისათვის, რომ დომენმა წერილები მიიღოს, DNS-ში იწერება MX (Mail Exchange) ჩანაწერები, ხოლო სპამისა და გაყალბებისგან (Spoofing) დასაცავად აუცილებელია SPF, DKIM და DMARC ტექსტური (TXT) ჩანაწერების გამართვა.',
          codeOrCommand: 'nslookup -type=mx example.com',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Google Workspace Admin Console beginner guide and MX SPF DKIM records'
        }
      ],
      keyTerms: [
        {
          termKa: 'საფოსტო გაცვლის ჩანაწერი',
          termEn: 'MX Record (Mail Exchange)',
          definitionKa: 'DNS ჩანაწერი, რომელიც მიუთითებს, რომელ სერვერზე უნდა გაიგზავნოს დომენზე მოსული წერილები.'
        },
        {
          termKa: 'ელფოსტის ავთენტიფიკაცია',
          termEn: 'SPF / DKIM / DMARC',
          definitionKa: 'DNS უსაფრთხოების მექანიზმები, რომლებიც იცავს კომპანიის დომენს წერილების გაყალბებისგან (Email Spoofing).'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): დომენის MX და SPF ჩანაწერების შემოწმება',
        ticketDescription: 'გახსენით Command Prompt და ბრძანებით nslookup -type=mx google.com შეამოწმეთ საფოსტო სერვერების ჩანაწერები. შემდეგ გაუშვით nslookup -type=txt google.com და იპოვეთ SPF ჩანაწერი (v=spf1), რომელიც განსაზღვრავს ნებადართულ გამგზავნ სერვერებს.',
        solutionSteps: [
          'გაუშვით CMD-ში: nslookup -type=mx google.com',
          'გაუშვით CMD-ში: nslookup -type=txt google.com'
        ]
      },
      quiz: {
        id: 'quiz-5-2',
        lessonId: 'les-5-2',
        moduleId: 'mod-5',
        title: 'ტესტი: Google Workspace და საფოსტო DNS',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-5-2-1',
            questionText: 'რომელი DNS ჩანაწერი განსაზღვრავს, თუ რომელ სერვერზე უნდა მივიდეს დომენზე გამოგზავნილი ელფოსტა?',
            options: [
              { id: 'a', text: 'A ჩანაწერი (A Record)' },
              { id: 'b', text: 'MX ჩანაწერი (Mail Exchange Record)' },
              { id: 'c', text: 'CNAME ჩანაწერი' },
              { id: 'd', text: 'PTR ჩანაწერი' }
            ],
            correctOptionId: 'b',
            explanation: 'MX (Mail Exchange) ჩანაწერი ამისამართებს შემომავალ წერილებს შესაბამის საფოსტო სერვერზე.'
          },
          {
            id: 'q-5-2-2',
            questionText: 'რა გამოიყენება Google Workspace-ში მომხმარებლების დეპარტამენტებად დასაყოფად და მათზე სხვადასხვა პოლიტიკის გასავრცელებლად?',
            options: [
              { id: 'a', text: 'Organizational Units (OU)' },
              { id: 'b', text: 'Local Disk Partitions' },
              { id: 'c', text: 'Bookmarks' },
              { id: 'd', text: 'Personal Contacts' }
            ],
            correctOptionId: 'a',
            explanation: 'Organizational Units (OU) საშუალებას გვაძლევს სხვადასხვა ჯგუფს განსხვავებული სერვისები და წესები ჩავურთოთ.'
          },
          {
            id: 'q-5-2-3',
            questionText: 'რა არის SPF, DKIM და DMARC ჩანაწერების მთავარი დანიშნულება?',
            options: [
              { id: 'a', text: 'ინტერნეტის სიჩქარის გაზრდა' },
              { id: 'b', text: 'ელფოსტის გაყალბებისგან (Spoofing) დაცვა და წერილების Spam-ში მოხვედრის თავიდან აცილება' },
              { id: 'c', text: 'Google Meet-ში კამერის ხარისხის გაუმჯობესება' },
              { id: 'd', text: 'პაროლის სირთულის შემოწმება' }
            ],
            correctOptionId: 'b',
            explanation: 'SPF, DKIM და DMARC ადასტურებს გამგზავნის ნამდვილობას და იცავს დომენს ფიშინგისა და სპამერებისგან.'
          }
        ]
      }
    },
    {
      id: 'les-5-3',
      moduleId: 'mod-5',
      order: 3,
      title: 'საფოსტო ყუთების მართვა და Outlook-ის დიაგნოსტიკა (Mailbox & Outlook Troubleshooting)',
      durationMinutes: 30,
      summary: 'Shared Mailbox, Distribution List, დელეგირება (Delegation) და Outlook-ის პრობლემების მოგვარება (OST/PST, Safe Mode).',
      objectives: [
        'განასხვავოთ Shared Mailbox, Distribution List და Email Alias',
        'მოაგვაროთ Outlook-ის გაჭედვის, სინქრონიზაციისა და პროფილის პრობლემები'
      ],
      sections: [
        {
          heading: 'ჯგუფური ფოსტა და Outlook Troubleshooting',
          content: 'კომპანიებში გამოიყენება რამდენიმე ტიპის საფოსტო ობიექტი: Alias (დამატებითი მისამართი იმავე ყუთზე), Distribution List (უბრალოდ აგზავნის წერილის ასლს ჯგუფის ყველა წევრთან) და Shared Mailbox (საზიარო ყუთი, მაგ: info@company.ge, რომელსაც აქვს საერთო Inbox და Sent ფოლდერი). წვდომის უფლებები იყოფა: Full Access (ყუთის გახსნა) და Send As (წერილის გაგზავნა საზიარო სახელით). Outlook-ის პრობლემების დროს ვიყენებთ: Safe Mode-ში გაშვებას (outlook.exe /safe) დაზიანებული Add-in-ების გამოსარიცხად, ახალი საფოსტო პროფილის შექმნას (Control Panel -> Mail) ან ქეშირებული OST ფაილის (Offline Outlook Data File) ხელახლა დაგენერირებას.',
          codeOrCommand: 'outlook.exe /safe',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Outlook troubleshooting safe mode OST rebuild and shared mailbox tutorial'
        }
      ],
      keyTerms: [
        {
          termKa: 'საზიარო საფოსტო ყუთი',
          termEn: 'Shared Mailbox',
          definitionKa: 'საფოსტო ყუთი, რომელზეც წვდომა აქვს რამდენიმე თანამშრომელს და არ მოითხოვს ცალკე პაროლს.'
        },
        {
          termKa: 'Outlook-ის მონაცემთა ფაილები',
          termEn: 'OST & PST Files',
          definitionKa: 'OST ინახავს სერვერთან სინქრონიზებულ ოფლაინ ასლს, ხოლო PST გამოიყენება წერილების ლოკალური არქივაციისთვის.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): Outlook-ის დიაგნოსტიკა',
        ticketDescription: 'მომხმარებელი გწერთ, რომ Outlook ჩართვისთანავე ითიშება. გაუშვით Run ფანჯრიდან ბრძანება outlook.exe /safe, გათიშეთ საეჭვო COM Add-ins და Control Panel-ის Mail აპლეტიდან შექმენით ახალი Outlook Profile.',
        solutionSteps: [
          'Win + R -> outlook.exe /safe -> File -> Options -> Add-ins -> Disable.',
          'Control Panel -> Mail (Microsoft Outlook) -> Show Profiles -> Add.'
        ]
      },
      quiz: {
        id: 'quiz-5-3',
        lessonId: 'les-5-3',
        moduleId: 'mod-5',
        title: 'ტესტი: საფოსტო ყუთები და Outlook',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-5-3-1',
            questionText: 'რა განსხვავებაა Distribution List-სა და Shared Mailbox-ს შორის?',
            options: [
              { id: 'a', text: 'არანაირი განსხვავება არ არის' },
              { id: 'b', text: 'Shared Mailbox-ს აქვს საკუთარი საერთო Inbox/Sent საქაღალდეები, ხოლო Distribution List უბრალოდ უგზავნის წერილის ასლს წევრებს' },
              { id: 'c', text: 'Distribution List ინახავს 500 GB ფაილებს' },
              { id: 'd', text: 'Shared Mailbox მუშაობს მხოლოდ ტელეფონზე' }
            ],
            correctOptionId: 'b',
            explanation: 'Shared Mailbox არის დამოუკიდებელი საფოსტო ყუთი საერთო ისტორიით, ხოლო Distribution List მხოლოდ გადამისამართების ჯგუფია.'
          },
          {
            id: 'q-5-3-2',
            questionText: 'რომელი ბრძანებით უნდა გავუშვათ Outlook, თუ ვეჭვობთ, რომ პროგრამას დაზიანებული პლაგინი (Add-in) ჭედავს?',
            options: [
              { id: 'a', text: 'outlook.exe /clean' },
              { id: 'b', text: 'outlook.exe /safe' },
              { id: 'c', text: 'outlook.exe /fast' },
              { id: 'd', text: 'outlook.exe /admin' }
            ],
            correctOptionId: 'b',
            explanation: 'outlook.exe /safe რთავს პროგრამას უსაფრთხო რეჟიმში (Safe Mode) გარე Add-in-ების გარეშე.'
          },
          {
            id: 'q-5-3-3',
            questionText: 'რომელი ფაილი ინახავს Exchange/M365 ანგარიშის ლოკალურ ქეშირებულ ასლს კომპიუტერში და მისი წაშლისას სერვერიდან თავიდან ჩამოიტვირთება?',
            options: [
              { id: 'a', text: '.OST ფაილი (Offline Outlook Data File)' },
              { id: 'b', text: '.EXE ფაილი' },
              { id: 'c', text: '.DLL ფაილი' },
              { id: 'd', text: '.ISO ფაილი' }
            ],
            correctOptionId: 'a',
            explanation: 'OST ფაილი არის სერვერის საფოსტო ყუთის სინქრონიზებული ქეში; დაზიანების შემთხვევაში მისი წაშლა უსაფრთხოა, რადგან Outlook მას სერვერიდან აღადგენს.'
          }
        ]
      }
    }
  ]
};
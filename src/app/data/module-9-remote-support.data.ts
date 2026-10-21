import { Module } from '../core/models/academy.models';

export const MODULE_9_REMOTE_SUPPORT: Module = {
  id: 'mod-9',
  order: 9,
  title: 'დისტანციური მხარდაჭერა (Remote Support)',
  subtitle: 'AnyDesk, TeamViewer, RDP, VPN, მობილური მოწყობილობები და ეტიკეტი',
  description: 'შეისწავლეთ დისტანციური წვდომის ხელსაწყოები, კორპორატიული VPN და RDP კავშირები, Android/iOS დიაგნოსტიკა და მომხმარებელთან მუშაობის პროფესიული ეტიკეტი.',
  icon: '🛰️',
  estimatedHours: 5,
  lessons: [
    {
      id: 'les-9-1',
      moduleId: 'mod-9',
      order: 1,
      title: 'AnyDesk და TeamViewer (Screen Sharing Tools)',
      durationMinutes: 25,
      summary: 'დისტანციური სესიის დამყარება, UAC პრივილეგიები, ფაილების გადატანა და უსაფრთხოება.',
      objectives: [
        'გამოიყენოთ AnyDesk და TeamViewer მომხმარებლის ეკრანთან დასაკავშირებლად',
        'მართოთ ადმინისტრატორის უფლებების (UAC Prompt) ხილვადობა დისტანციურ სესიაში'
      ],
      sections: [
        {
          heading: 'დისტანციური დახმარება: AnyDesk და TeamViewer',
          content: 'AnyDesk და TeamViewer საშუალებას გვაძლევს ინტერნეტის გავლით ვმართოთ მომხმარებლის ეკრანი (Screen Sharing) მისი 9 ან 10-ნიშნა ID-ის საშუალებით. არსებობს კავშირის ორი რეჟიმი: Attended Access (მომხმარებელი თავად აჭერს Accept-ს ერთჯერადი დახმარებისას) და Unattended Access (წინასწარ გაწერილი პაროლით სერვერებთან ან ოფისის კომპიუტერებთან შესასვლელად). თუ მომხმარებელს პროგრამა სტანდარტული უფლებით აქვს გაშვებული, დისტანციური სპეციალისტი ვერ დაინახავს Windows-ის UAC (User Account Control) ფანჯარას და ეკრანი გაშავდება. ამის მოსაგვარებლად AnyDesk-ში ვიყენებთ ფუნქციას "Request Elevation" (ადმინისტრატორის უფლების მოთხოვნა).',
          codeOrCommand: 'AnyDesk -> Actions -> Request Elevation',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): AnyDesk and TeamViewer remote support tutorial UAC elevation explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'უფლებების ამაღლების მოთხოვნა',
          termEn: 'Request Elevation (UAC)',
          definitionKa: 'ფუნქცია, რომელიც დისტანციურ სპეციალისტს აძლევს საშუალებას დაინახოს და შეავსოს Windows-ის ადმინისტრატორის UAC ფანჯარა.'
        },
        {
          termKa: 'უყურადღებო (მუდმივი) წვდომა',
          termEn: 'Unattended Access',
          definitionKa: 'დისტანციური წვდომის რეჟიმი, რომელიც არ საჭიროებს ეკრანთან მყოფი ადამიანის დასტურს.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): AnyDesk-ის უსაფრთხოების და UAC-ის ტესტირება',
        ticketDescription: 'გახსენით AnyDesk, შეამოწმეთ Permissions პროფილი (Screen Sharing, File Manager, Clipboard) და იპოვეთ მენიუში "Request Elevation" ღილაკი. დარწმუნდით, რომ სესიის დასრულების შემდეგ დროებითი წვდომა იხურება.',
        solutionSteps: [
          'გახსენით AnyDesk -> Settings -> Security -> Permission Profiles.',
          'სესიის დროს ზედა ზოლში აირჩიეთ Shield ხატულა (Request Elevation).'
        ]
      },
      quiz: {
        id: 'quiz-9-1',
        lessonId: 'les-9-1',
        moduleId: 'mod-9',
        title: 'ტესტი: AnyDesk და TeamViewer',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-9-1-1',
            questionText: 'რატომ ვერ ხედავს IT Support სპეციალისტი Windows-ის UAC (Run as Administrator) ფანჯარას AnyDesk-ის სტანდარტულ სესიაში?',
            options: [
              { id: 'a', text: 'მონიტორი დაზიანებულია' },
              { id: 'b', text: 'AnyDesk გაშვებულია სტანდარტული მომხმარებლის უფლებით და საჭიროა "Request Elevation" ფუნქციის გამოყენება' },
              { id: 'c', text: 'ინტერნეტის სიჩქარე დაბალია' },
              { id: 'd', text: 'მაუსის ელემენტი დაჯდა' }
            ],
            correctOptionId: 'b',
            explanation: 'Windows უსაფრთხოების მიზნით მალავს Secure Desktop (UAC) ეკრანს არაადმინისტრირებული პროცესებისგან, სანამ არ მოხდება Request Elevation.'
          },
          {
            id: 'q-9-1-2',
            questionText: 'რა განსხვავებაა Attended და Unattended დისტანციურ წვდომას შორის?',
            options: [
              { id: 'a', text: 'Attended მოითხოვს მომხმარებლის ცოცხალ დასტურს (Accept), ხოლო Unattended მუშაობს წინასწარ გაწერილი პაროლით ადამიანის დასწრების გარეშე' },
              { id: 'b', text: 'Unattended მუშაობს მხოლოდ ტელეფონებზე' },
              { id: 'c', text: 'Attended არ აჩვენებს ეკრანს' },
              { id: 'd', text: 'მათ შორის განსხვავება არ არის' }
            ],
            correctOptionId: 'a',
            explanation: 'Attended გამოიყენება თანამშრომლების დასახმარებლად, ხოლო Unattended — სერვერებისა და უყურადღებო ტერმინალების სამართავად.'
          },
          {
            id: 'q-9-1-3',
            questionText: 'რომელი უსაფრთხოების წესი უნდა დაიცვათ თანამშრომლის კომპიუტერზე ერთჯერადი დისტანციური დახმარების დასრულებისას?',
            options: [
              { id: 'a', text: 'დატოვოთ სესია ჩართული მთელი კვირა' },
              { id: 'b', text: 'დახუროთ ადმინისტრატორის ფანჯრები/პაროლები და კორექტულად გაწყვიტოთ დისტანციური სესია' },
              { id: 'c', text: 'წაშალოთ მომხმარებლის სამუშაო ფაილები' },
              { id: 'd', text: 'გათიშოთ ანტივირუსი' }
            ],
            correctOptionId: 'b',
            explanation: 'სესიის დასრულებამდე აუცილებელია ადმინისტრაციული კონსოლების დახურვა, რათა მომხმარებელს არ დარჩეს გახსნილი პრივილეგირებული გარემო.'
          }
        ]
      }
    },
    {
      id: 'les-9-2',
      moduleId: 'mod-9',
      order: 2,
      title: 'RDP და VPN-ის საფუძვლები (RDP & VPN Basics)',
      durationMinutes: 30,
      summary: 'Remote Desktop Protocol (mstsc.exe, Port 3389), კორპორატიული VPN გვირაბი და Split Tunneling.',
      objectives: [
        'გამართოთ Remote Desktop (RDP) კავშირი და შეამოწმოთ TCP 3389 პორტი',
        'გაიგოთ როგორ იცავს VPN კორპორატიულ ქსელთან დისტანციურ კავშირს'
      ],
      sections: [
        {
          heading: 'Remote Desktop (RDP) და კორპორატიული VPN',
          content: 'Remote Desktop Protocol (RDP) არის Microsoft-ის ჩაშენებული პროტოკოლი, რომელიც მუშაობს TCP 3389 პორტზე და კლიენტის მხარეს იხსნება ბრძანებით mstsc.exe. AnyDesk-ისგან განსხვავებით, RDP ქმნის სრულფასოვან სესიას და ბლოკავს (Lock) სამიზნე კომპიუტერის ეკრანს. იმისათვის, რომ RDP-ით დაუკავშირდეთ კომპიუტერს, მასზე ჩართული უნდა იყოს Remote Desktop (მხოლოდ Windows Pro/Enterprise/Server ვერსიებზე) და მომხმარებელი უნდა იყოს Remote Desktop Users ჯგუფში. უსაფრთხოების გამო 3389 პორტის პირდაპირ ინტერნეტში გახსნა დაუშვებელია — სახლიდან მომუშავე თანამშრომელი ჯერ რთავს კორპორატიულ VPN-ს (Virtual Private Network, მაგ: Cisco AnyConnect, FortiClient, WireGuard), რომელიც ქმნის დაშიფრულ გვირაბს ოფისის ქსელამდე, და მხოლოდ ამის შემდეგ შედის RDP-ით.',
          codeOrCommand: 'mstsc.exe',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Remote Desktop Protocol RDP port 3389 and corporate VPN explained for IT support'
        }
      ],
      keyTerms: [
        {
          termKa: 'დისტანციური სამუშაო მაგიდის პროტოკოლი',
          termEn: 'RDP (Remote Desktop Protocol)',
          definitionKa: 'Windows-ის პროტოკოლი (პორტი 3389), რომელიც საშუალებას იძლევა ქსელის გავლით მართოთ სხვა Windows კომპიუტერი ან სერვერი.'
        },
        {
          termKa: 'ვირტუალური კერძო ქსელი',
          termEn: 'VPN (Virtual Private Network)',
          definitionKa: 'დაშიფრული კავშირი (Tunnel), რომელიც გარე ინტერნეტიდან უსაფრთხოდ აერთებს მომხმარებელს კომპანიის შიდა ქსელთან (LAN).'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): RDP პორტისა და პარამეტრების შემოწმება',
        ticketDescription: 'გახსენით Run ფანჯრიდან mstsc.exe და დაათვალიერეთ Local Resources ჩანართი (Printers, Clipboard). შემდეგ გახსენით PowerShell და ბრძანებით Test-NetConnection -ComputerName localhost -Port 3389 შეამოწმეთ, არის თუ არა გახსნილი RDP პორტი თქვენს სისტემაზე.',
        solutionSteps: [
          'Win + R -> mstsc.exe -> Show Options -> Local Resources.',
          'PowerShell -> Test-NetConnection -ComputerName localhost -Port 3389.'
        ]
      },
      quiz: {
        id: 'quiz-9-2',
        lessonId: 'les-9-2',
        moduleId: 'mod-9',
        title: 'ტესტი: RDP და VPN',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-9-2-1',
            questionText: 'რომელ სტანდარტულ ქსელურ პორტს იყენებს Remote Desktop Protocol (RDP)?',
            options: [
              { id: 'a', text: 'პორტი 80 (HTTP)' },
              { id: 'b', text: 'პორტი 3389 (TCP/UDP)' },
              { id: 'c', text: 'პორტი 25 (SMTP)' },
              { id: 'd', text: 'პორტი 53 (DNS)' }
            ],
            correctOptionId: 'b',
            explanation: 'RDP ნაგულისხმევად მუშაობს 3389 პორტზე.'
          },
          {
            id: 'q-9-2-2',
            questionText: 'რატომ იყენებენ კომპანიები VPN-ს სანამ თანამშრომელი სახლიდან ოფისის კომპიუტერს RDP-ით დაუკავშირდება?',
            options: [
              { id: 'a', text: 'რათა კავშირი დაიშიფროს და 3389 პორტი არ იყოს ღია გარე ინტერნეტში ჰაკერებისა და Ransomware-ისთვის' },
              { id: 'b', text: 'რათა კომპიუტერის ეკრანი გახდეს ფერადი' },
              { id: 'c', text: 'VPN ცვლის Windows-ის ლიცენზიას' },
              { id: 'd', text: 'VPN-ის გარეშე კლავიატურა არ ირთვება' }
            ],
            correctOptionId: 'a',
            explanation: 'ღია RDP პორტი ინტერნეტში ერთ-ერთი მთავარი სამიზნეა Brute-Force და Ransomware შეტევებისთვის; VPN მას კორპორატიული გვირაბის შიგნით იცავს.'
          },
          {
            id: 'q-9-2-3',
            questionText: 'რომელი ბრძანებით იხსნება Remote Desktop Connection კლიენტი Windows-ში?',
            options: [
              { id: 'a', text: 'mstsc.exe' },
              { id: 'b', text: 'notepad.exe' },
              { id: 'c', text: 'mspaint.exe' },
              { id: 'd', text: 'dxdiag.exe' }
            ],
            correctOptionId: 'a',
            explanation: 'mstsc.exe (Microsoft Terminal Services Client) ხსნის Remote Desktop Connection ფანჯარას.'
          }
        ]
      }
    },
    {
      id: 'les-9-3',
      moduleId: 'mod-9',
      order: 3,
      title: 'Android/iOS დიაგნოსტიკა და დისტანციური მხარდაჭერის ეტიკეტი (Mobile & Support Etiquette)',
      durationMinutes: 25,
      summary: 'კორპორატიული აპლიკაციების გამართვა მობილურზე, MDM საფუძვლები და მომხმარებელთან კომუნიკაციის ოქროს წესები.',
      objectives: [
        'მოაგვაროთ კორპორატიული ფოსტის, MFA-სა და Wi-Fi-ს პრობლემები Android/iOS-ზე',
        'დაიცვათ კონფიდენციალურობა და პროფესიული ეტიკეტი დისტანციური სესიისას'
      ],
      sections: [
        {
          heading: 'მობილური მხარდაჭერა (Android/iOS) და ეტიკეტი',
          content: 'IT Support ხშირად ეხმარება თანამშრომლებს მობილურ მოწყობილობებზე (Android და iOS) კორპორატიული ფოსტის (Outlook), Teams-ის, VPN-ისა და Authenticator-ის გამართვაში. კომპანიები მობილურების სამართავად იყენებენ MDM (Mobile Device Management — მაგ: Microsoft Intune) სისტემას, რომელიც ქმნის დაცულ სამუშაო პროფილს (Work Profile). მობილურზე ხარვეზის დროს ვამოწმებთ: App Cache-ის გასუფთავებას (Android), OS/App განახლებას, თარიღისა და საათის ავტომატურ სინქრონიზაციას (რადგან არასწორი დრო აფუჭებს MFA კოდებს) და Reset Network Settings-ს. დისტანციური მხარდაჭერის ეტიკეტი მოითხოვს: კავშირამდე ნებართვის აღებას, მომხმარებლის გაფრთხილებას რომ დახუროს პირადი მიმოწერა და მოქმედებების მშვიდად ახსნას.',
          codeOrCommand: 'Settings -> General -> Date & Time -> Set Automatically',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Mobile Device Management MDM Intune basics and remote IT support etiquette'
        }
      ],
      keyTerms: [
        {
          termKa: 'მობილური მოწყობილობების მართვა',
          termEn: 'MDM (Mobile Device Management)',
          definitionKa: 'სისტემა (მაგ: Microsoft Intune), რომელიც იცავს კორპორატიულ მონაცემებს თანამშრომლების სმარტფონებსა და პლანშეტებზე.'
        },
        {
          termKa: 'დისტანციური მხარდაჭერის ეტიკეტი',
          termEn: 'Remote Support Etiquette',
          definitionKa: 'პროფესიული წესების ნაკრები, რომელიც იცავს მომხმარებლის პირად სივრცეს და უზრუნველყოფს კომფორტულ კომუნიკაციას.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): უარყოფითი MFA კოდის დიაგნოსტიკა სმარტფონზე',
        ticketDescription: 'თანამშრომელი გირეკავთ, რომ მის ტელეფონში Microsoft Authenticator-ის 6-ნიშნა კოდი არ მიიღება სისტემის მიერ. შეამოწმეთ და გაასწორეთ ტელეფონის Date & Time პარამეტრი (Set Automatically), რადგან TOTP კოდები დროზეა დამოკიდებული.',
        solutionSteps: [
          'Android/iOS -> Settings -> Date & Time -> ჩართეთ "Set Automatically".',
          'Authenticator აპლიკაციაში სცადეთ კოდის თავიდან შეყვანა.'
        ]
      },
      quiz: {
        id: 'quiz-9-3',
        lessonId: 'les-9-3',
        moduleId: 'mod-9',
        title: 'ტესტი: მობილური დიაგნოსტიკა და ეტიკეტი',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-9-3-1',
            questionText: 'რა არის ყველაზე ხშირი მიზეზი, როდესაც ტელეფონის Authenticator აპლიკაციაში დაგენერირებული 6-ნიშნა კოდი (TOTP) სერვერის მიერ უარყოფილია?',
            options: [
              { id: 'a', text: 'ტელეფონის ეკრანის სიკაშკაშე დაბალია' },
              { id: 'b', text: 'ტელეფონზე არასწორად არის დაყენებული საათი/დროის სარტყელი (გათიშულია Set Automatically)' },
              { id: 'c', text: 'Bluetooth გამორთულია' },
              { id: 'd', text: 'კამერა დასვრილია' }
            ],
            correctOptionId: 'b',
            explanation: 'Authenticator-ის კოდები (Time-based One-Time Password) იქმნება ზუსტი დროის მიხედვით; 1-2 წუთიანი ცდომილებაც კი კოდს აუქმებს.'
          },
          {
            id: 'q-9-3-2',
            questionText: 'რომელი მოქმედება ითვლება სწორ პროფესიულ ეტიკეტად მომხმარებლის ეკრანთან დისტანციურად დაკავშირების წინ?',
            options: [
              { id: 'a', text: 'გაფრთხილების გარეშე მაუსის წართმევა და პირადი ფოლდერების დათვალიერება' },
              { id: 'b', text: 'ნებართვის თხოვნა და შეხსენება, რომ დახუროს პირადი ან კონფიდენციალური ფანჯრები კავშირის დაწყებამდე' },
              { id: 'c', text: 'ხმის გამორთვა და ჩუმად მუშაობა 30 წუთის განმავლობაში' },
              { id: 'd', text: 'მომხმარებლის დადანაშაულება ხარვეზის გამოწვევაში' }
            ],
            correctOptionId: 'b',
            explanation: 'მომხმარებლის პირადი სივრცის პატივისცემა და გამჭვირვალე კომუნიკაცია IT Support-ის პროფესიონალიზმის მთავარი ნიშანია.'
          },
          {
            id: 'q-9-3-3',
            questionText: 'რისთვის გამოიყენება კომპანიებში MDM (Mobile Device Management — მაგ: Intune) სისტემა?',
            options: [
              { id: 'a', text: 'მობილურ თამაშებში ქულების მოსამატებლად' },
              { id: 'b', text: 'მობილურ მოწყობილობებზე კორპორატიული აპლიკაციების უსაფრთხო მართვისა და დაკარგვის შემთხვევაში სამუშაო მონაცემების წაშლისთვის (Selective Wipe)' },
              { id: 'c', text: 'ელემენტის მოცულობის ფიზიკურად გასაზრდელად' },
              { id: 'd', text: 'მხოლოდ ზარების ჩასაწერად' }
            ],
            correctOptionId: 'b',
            explanation: 'MDM იცავს კომპანიის მონაცემებს სმარტფონზე ისე, რომ თანამშრომლის პირად ფოტოებსა და ფაილებს არ ეხება.'
          }
        ]
      }
    }
  ]
};
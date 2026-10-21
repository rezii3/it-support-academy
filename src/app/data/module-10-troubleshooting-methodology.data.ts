import { Module } from '../core/models/academy.models';

export const MODULE_10_TROUBLESHOOTING_METHODOLOGY: Module = {
  id: 'mod-10',
  order: 10,
  title: 'პრობლემების მოგვარების მეთოდოლოგია (Troubleshooting Methodology)',
  subtitle: 'CompTIA-ს 6-საფეხურიანი მეთოდი, აპარატურული, პროგრამული და ქსელური დიაგნოსტიკა',
  description: 'შეისწავლეთ სტრუქტურირებული დიაგნოსტიკის სტანდარტები: CompTIA-ს 6 ნაბიჯი, BSOD/Hardware ხარვეზების აღმოფხვრა და ქსელური კავშირის აღდგენა რეალური სცენარებით.',
  icon: '🔍',
  estimatedHours: 6,
  lessons: [
    {
      id: 'les-10-1',
      moduleId: 'mod-10',
      order: 1,
      title: 'CompTIA-ს 6-საფეხურიანი დიაგნოსტიკის პროცესი (CompTIA 6-Step Troubleshooting Process)',
      durationMinutes: 25,
      summary: 'პრობლემის იდენტიფიცირება, თეორიის ჩამოყალიბება, ტესტირება, სამოქმედო გეგმა, ვერიფიკაცია და დოკუმენტირება.',
      objectives: [
        'ზეპირად და პრაქტიკულად გამოიყენოთ CompTIA-ს 6-საფეხურიანი მეთოდოლოგია',
        'თავიდან აიცილოთ ქაოტური მოქმედებები კრიტიკული ინციდენტების დროს'
      ],
      sections: [
        {
          heading: 'CompTIA-ს 6-საფეხურიანი სტანდარტი',
          content: 'ქაოტური მოქმედებების თავიდან ასაცილებლად IT Support იყენებს CompTIA-ს 6-საფეხურიან მეთოდს: 1. პრობლემის იდენტიფიცირება (Identify the problem) — გამოკითხეთ მომხმარებელი, შეამოწმეთ რა შეიცვალა ბოლოს და შექმენით სარეზერვო ასლი. 2. სავარაუდო მიზეზის თეორიის ჩამოყალიბება (Establish a theory of probable cause) — დაიწყეთ ყველაზე მარტივი და სავარაუდო მიზეზით (Question the obvious). 3. თეორიის ტესტირება (Test the theory to determine cause) — თუ თეორია არ გამართლდა, შეიმუშავეთ ახალი ან დააესკალირეთ. 4. სამოქმედო გეგმის შედგენა და განხორციელება (Establish a plan of action and implement the solution). 5. სისტემის სრული ფუნქციონირების გადამოწმება და პრევენცია (Verify full system functionality). 6. შედეგებისა და პროცესის დოკუმენტირება (Document findings, actions, and outcomes).',
          codeOrCommand: '1. Identify -> 2. Theory -> 3. Test -> 4. Plan/Act -> 5. Verify -> 6. Document',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): CompTIA A+ 6 step troubleshooting methodology explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'სავარაუდო მიზეზის თეორია',
          termEn: 'Theory of Probable Cause',
          definitionKa: 'სიმპტომებზე დაყრდნობით ვარაუდის გამოთქმა, სადაც პირველ რიგში მოწმდება ყველაზე მარტივი ფაქტორები.'
        },
        {
          termKa: 'სრული ფუნქციონირების ვერიფიკაცია',
          termEn: 'Verify Full System Functionality',
          definitionKa: 'მომხმარებელთან ერთად გადამოწმება, რომ პრობლემა სრულად მოგვარდა და ახალი ხარვეზი არ წარმოქმნილა.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): რეალური სცენარი — მონიტორი არ ირთვება',
        ticketDescription: 'სცენარი: ბუღალტერი გირეკავთ, რომ კომპიუტერი ჩართულია, მაგრამ ეკრანი შავია ("No Signal"). გაიარეთ CompTIA-ს 6-ვე ნაბიჯი: შეამოწმეთ მარტივი მიზეზი (დამლაგებლის მიერ გამომძვრალი HDMI/კვების კაბელი), აღადგინეთ ჩვენება, გადაამოწმეთ მომხმარებელთან და ჩაწერეთ შედეგი ტიკეტში.',
        solutionSteps: [
          '1-3 ნაბიჯი: გამოკითხვა -> თეორია (კაბელია მოშვებული) -> ტესტირება (HDMI კონექტორის შემოწმება).',
          '4-6 ნაბიჯი: კაბელის მყარად შეერთება -> ეკრანის შემოწმება -> ტიკეტის დოკუმენტირება.'
        ]
      },
      quiz: {
        id: 'quiz-10-1',
        lessonId: 'les-10-1',
        moduleId: 'mod-10',
        title: 'ტესტი: CompTIA-ს 6-საფეხურიანი მეთოდი',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-10-1-1',
            questionText: 'რომელია CompTIA-ს დიაგნოსტიკის მეთოდოლოგიის პირველი ნაბიჯი?',
            options: [
              { id: 'a', text: 'ოპერაციული სისტემის გადაყენება' },
              { id: 'b', text: 'პრობლემის იდენტიფიცირება (Identify the problem) და მომხმარებლის გამოკითხვა' },
              { id: 'c', text: 'ნაწილების შეკვეთა' },
              { id: 'd', text: 'ტიკეტის დახურვა' }
            ],
            correctOptionId: 'b',
            explanation: 'ნებისმიერი დიაგნოსტიკა იწყება სიმპტომების შეგროვებით, მომხმარებლის გამოკითხვითა და პრობლემის იდენტიფიცირებით.'
          },
          {
            id: 'q-10-1-2',
            questionText: 'რა უნდა გააკეთოთ მე-3 ნაბიჯზე (Test the theory), თუ თქვენი პირველი ვარაუდი (თეორია) არ დადასტურდა?',
            options: [
              { id: 'a', text: 'ჩამოაყალიბოთ ახალი თეორია ან დააესკალიროთ საკითხი შესაბამის დონეზე' },
              { id: 'b', text: 'უთხრათ მომხმარებელს, რომ პრობლემა მოგვარებულია' },
              { id: 'c', text: 'გამორთოთ სერვერი' },
              { id: 'd', text: 'წაშალოთ ლოგები' }
            ],
            correctOptionId: 'a',
            explanation: 'თუ ტესტირებამ თეორია უარყო, ვბრუნდებით მე-2 ნაბიჯზე ახალი ჰიპოთეზის შესამუშავებლად ან ვახდენთ ესკალაციას.'
          },
          {
            id: 'q-10-1-3',
            questionText: 'რომელია CompTIA-ს 6-საფეხურიანი პროცესის ბოლო (მე-6) ნაბიჯი?',
            options: [
              { id: 'a', text: 'კომპიუტერის დაშლა' },
              { id: 'b', text: 'აღმოჩენილი მიზეზის, შესრულებული მოქმედებებისა და შედეგების დოკუმენტირება (Document findings, actions, and outcomes)' },
              { id: 'c', text: 'თეორიის შემოწმება' },
              { id: 'd', text: 'BIOS-ის განულება' }
            ],
            correctOptionId: 'b',
            explanation: 'პრობლემის გადაჭრისა და ვერიფიკაციის შემდეგ პროცესი სრულდება დეტალური დოკუმენტირებით ტიკეტში ან ცოდნის ბაზაში.'
          }
        ]
      }
    },
    {
      id: 'les-10-2',
      moduleId: 'mod-10',
      order: 2,
      title: 'აპარატურული და პროგრამული პრობლემების დიაგნოსტიკა (Hardware & Software Troubleshooting)',
      durationMinutes: 30,
      summary: 'POST/Beep კოდები, გადახურება, S.M.A.R.T. სტატუსი, BSOD, Event Viewer და Safe Mode.',
      objectives: [
        'გაარჩიოთ აპარატურული (RAM, PSU, SSD, Thermal) და პროგრამული (BSOD, Drivers) სიმპტომები',
        'გამოიყენოთ Event Viewer, Safe Mode და sfc /scannow სისტემის აღსადგენად'
      ],
      sections: [
        {
          heading: 'Hardware და Software ხარვეზების იდენტიფიცირება',
          content: 'აპარატურული (Hardware) პრობლემების დროს კომპიუტერი ან საერთოდ არ ირთვება (PSU/დედაპლატა), ან ჩართვისას გამოსცემს ხმოვან სიგნალებს (POST Beep Codes — ხშირად ამოვარდნილი RAM-ის გამო), ან მოულოდნელად ითიშება გადახურებისგან (CPU Thermal Throttling / გამომშრალი თერმოპასტა). დისკის სიჯანსაღე მოწმდება S.M.A.R.T. სტატუსით. პროგრამული (Software) ხარვეზების ნიშნებია: ლურჯი ეკრანი (BSOD - Blue Screen of Death), დრაივერების კონფლიქტი ან აპლიკაციების გაჭედვა (App Crash). მათ სამკურნალოდ ვიყენებთ: Safe Mode-ში ჩატვირთვას, Event Viewer-ში (eventvwr.msc) Critical/Error ლოგების ნახვას, Device Manager-ში დრაივერის უკან დაბრუნებას (Roll Back Driver) და სისტემური ფაილების აღდგენას ბრძანებით sfc /scannow.',
          codeOrCommand: 'sfc /scannow && DISM /Online /Cleanup-Image /RestoreHealth',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to diagnose PC hardware and Windows BSOD Event Viewer troubleshooting'
        }
      ],
      keyTerms: [
        {
          termKa: 'სიკვდილის ლურჯი ეკრანი',
          termEn: 'BSOD (Blue Screen of Death)',
          definitionKa: 'Windows-ის კრიტიკული სისტემური შეცდომის ეკრანი (Stop Error), რომელიც გამოწვეულია გაუმართავი დრაივერით ან დაზიანებული აპარატურით (RAM/Disk).'
        },
        {
          termKa: 'ჩართვისას თვითტესტირება',
          termEn: 'POST (Power-On Self-Test)',
          definitionKa: 'BIOS/UEFI-ს მიერ კომპიუტერის ჩართვისთანავე აპარატურული კომპონენტების (CPU, RAM, GPU) შემოწმების პროცესი.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): რეალური სცენარი — BSOD ვიდეო დრაივერის განახლების შემდეგ',
        ticketDescription: 'სცენარი: დიზაინერის კომპიუტერზე გრაფიკული დრაივერის განახლების შემდეგ პერიოდულად ვარდება BSOD კოდით "VIDEO_TDR_FAILURE". ჩატვირთეთ სისტემა Safe Mode-ში, შეამოწმეთ შეცდომა Event Viewer-ში (System Logs) და Device Manager-იდან გააკეთეთ Display Adapter დრაივერის Roll Back.',
        solutionSteps: [
          'Win + R -> eventvwr.msc -> Windows Logs -> System (მოძებნეთ Error/Critical ჩანაწერი).',
          'Win + X -> Device Manager -> Display adapters -> Properties -> Driver -> Roll Back Driver.'
        ]
      },
      quiz: {
        id: 'quiz-10-2',
        lessonId: 'les-10-2',
        moduleId: 'mod-10',
        title: 'ტესტი: Hardware და Software დიაგნოსტიკა',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-10-2-1',
            questionText: 'კომპიუტერი ჩართვისას არ აჩვენებს გამოსახულებას და დედაპლატა გამოსცემს განმეორებად მოკლე ხმოვან სიგნალებს (POST Beep Codes). რომელი კომპონენტია ყველაზე სავარაუდო მიზეზი?',
            options: [
              { id: 'a', text: 'მაუსის პადი' },
              { id: 'b', text: 'ოპერატიული მეხსიერება (RAM) არ ზის სწორად სლოტში ან დაზიანებულია' },
              { id: 'c', text: 'ბრაუზერის ისტორია სავსეა' },
              { id: 'd', text: 'პრინტერში ქაღალდი გაიჭედა' }
            ],
            correctOptionId: 'b',
            explanation: 'POST Beep სიგნალები უმეტეს შემთხვევაში მიუთითებს ოპერატიული მეხსიერების (RAM) ან ვიდეობარათის ინიციალიზაციის შეცდომაზე.'
          },
          {
            id: 'q-10-2-2',
            questionText: 'რომელი Windows ხელსაწყო დაგეხმარებათ ზუსტად ნახოთ, რა დროს და რა შეცდომის კოდით გაითიშა სისტემა ან პროგრამა?',
            options: [
              { id: 'a', text: 'Event Viewer (eventvwr.msc)' },
              { id: 'b', text: 'Paint' },
              { id: 'c', text: 'Disk Cleanup' },
              { id: 'd', text: 'Character Map' }
            ],
            correctOptionId: 'a',
            explanation: 'Event Viewer ინახავს Application და System ლოგებს ყველა Error, Warning და Critical მოვლენის შესახებ.'
          },
          {
            id: 'q-10-2-3',
            questionText: 'რა უნდა მოიმოქმედოთ, თუ ახალი დრაივერის დაყენების შემდეგ Windows-მა დაიწყო არასტაბილური მუშაობა და BSOD-ების ამოგდება?',
            options: [
              { id: 'a', text: 'გამოცვალოთ მონიტორი' },
              { id: 'b', text: 'შეხვიდეთ Safe Mode-ში და Device Manager-ში გამოიყენოთ "Roll Back Driver" ფუნქცია' },
              { id: 'c', text: 'წაშალოთ System32 საქაღალდე' },
              { id: 'd', text: 'გათიშოთ კვების კაბელი' }
            ],
            correctOptionId: 'b',
            explanation: 'Roll Back Driver აბრუნებს წინა, სტაბილურ დრაივერის ვერსიას.'
          }
        ]
      }
    },
    {
      id: 'les-10-3',
      moduleId: 'mod-10',
      order: 3,
      title: 'ქსელური პრობლემების დიაგნოსტიკა (Diagnosing Network Problems)',
      durationMinutes: 30,
      summary: 'No Internet vs No DNS, APIPA (169.254.x.x), Gateway-ს პინგვა და ნაბიჯ-ნაბიჯ იზოლაცია.',
      objectives: [
        'გამოიყენოთ ქსელის დიაგნოსტიკის თანმიმდევრობა (Loopback -> Local IP -> Gateway -> Public IP -> DNS)',
        'ამოიცნოთ APIPA მისამართის (169.254.x.x) და DNS ხარვეზების მიზეზები'
      ],
      sections: [
        {
          heading: 'ქსელის დიაგნოსტიკის ოქროს თანმიმდევრობა',
          content: 'როცა მომხმარებელი ამბობს "ინტერნეტი არ მუშაობს", IT Support ამოწმებს ქსელს ქვევიდან ზევით: 1. ფიზიკური შრე — ანთია თუ არა LAN პორტის ნათურა (Link Light) ან ჩართულია თუ არა Wi-Fi. 2. IP კონფიგურაცია (ipconfig /all) — თუ კომპიუტერს აქვს 169.254.x.x (APIPA) მისამართი, ეს ნიშნავს, რომ მან ვერ მიიღო IP მისამართი DHCP სერვერისგან. 3. ლოკალური კარიბჭის შემოწმება (ping Default Gateway, მაგ: 192.168.1.1) — ამოწმებს კავშირს შიდა როუტერთან. 4. გარე ინტერნეტის შემოწმება (ping 8.8.8.8) — თუ 8.8.8.8 იპინგება, მაგრამ google.com არ იხსნება, პრობლემა არის DNS-ში. ამ დროს ვასუფთავებთ ქეშს (ipconfig /flushdns) ან ვამოწმებთ DNS სერვერს ბრძანებით nslookup.',
          codeOrCommand: 'ipconfig /all && ping 8.8.8.8 && nslookup google.com',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Network troubleshooting methodology ipconfig ping tracert nslookup APIPA'
        }
      ],
      keyTerms: [
        {
          termKa: 'ავტომატური კერძო IP მისამართი',
          termEn: 'APIPA (169.254.x.x)',
          definitionKa: 'მისამართი, რომელსაც Windows საკუთარ თავს ანიჭებს მაშინ, როცა ქსელში DHCP სერვერი მიუწვდომელია.'
        },
        {
          termKa: 'ნაგულისხმევი კარიბჭე',
          termEn: 'Default Gateway',
          definitionKa: 'როუტერის IP მისამართი, რომლის გავლითაც კომპიუტერი გადის შიდა ქსელიდან (LAN) გარე ინტერნეტში (WAN).'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): რეალური სცენარი — IP იპინგება, მაგრამ საიტები არ იხსნება',
        ticketDescription: 'სცენარი: გაყიდვების მენეჯერს ბრაუზერში არცერთი საიტი არ ეხსნება. გაუშვით CMD-ში ping 8.8.8.8 (პასუხი ბრუნდება) და ping google.com (ვერ პოულობს ჰოსტს). გაასუფთავეთ DNS ქეში ბრძანებით ipconfig /flushdns და გაუწერეთ ქსელის კარტაზე დამხმარე DNS (8.8.8.8 / 1.1.1.1).',
        solutionSteps: [
          'CMD -> ping 8.8.8.8 (Success) -> nslookup google.com (Timeout = DNS ხარვეზი).',
          'CMD -> ipconfig /flushdns -> ncpa.cpl -> IPv4 DNS = 8.8.8.8.'
        ]
      },
      quiz: {
        id: 'quiz-10-3',
        lessonId: 'les-10-3',
        moduleId: 'mod-10',
        title: 'ტესტი: ქსელური პრობლემების დიაგნოსტიკა',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-10-3-1',
            questionText: 'რას ნიშნავს, თუ ipconfig ბრძანების გაშვებისას კომპიუტერის IPv4 მისამართია 169.254.45.12?',
            options: [
              { id: 'a', text: 'კომპიუტერი დაკავშირებულია მაღალსიჩქარიან ოპტიკურ ინტერნეტთან' },
              { id: 'b', text: 'კომპიუტერმა ვერ დაამყარა კავშირი DHCP სერვერთან და მიიღო APIPA მისამართი' },
              { id: 'c', text: 'ჩართულია VPN' },
              { id: 'd', text: 'ვიდეობარათი გადახურდა' }
            ],
            correctOptionId: 'b',
            explanation: '169.254.x.x არის APIPA დიაპაზონი, რომელიც ჩნდება მხოლოდ მაშინ, როცა DHCP სერვერიდან IP-ის მიღება ვერ ხერხდება.'
          },
          {
            id: 'q-10-3-2',
            questionText: 'კომპიუტერიდან ბრძანება "ping 8.8.8.8" წარმატებით მუშაობს, მაგრამ ბრაუზერში "google.com" არ იხსნება. სად არის პრობლემა?',
            options: [
              { id: 'a', text: 'ქსელის კაბელი გაწყვეტილია' },
              { id: 'b', text: 'პრობლემა არის DNS კონფიგურაციაში (დომენური სახელი ვერ გარდაიქმნება IP მისამართად)' },
              { id: 'c', text: 'კვების ბლოკი დაზიანებულია' },
              { id: 'd', text: 'Wi-Fi გამორთულია' }
            ],
            correctOptionId: 'b',
            explanation: 'თუ გარე IP მისამართი (8.8.8.8) იპინგება, ინტერნეტთან კავშირი არსებობს; სახელის ვერგახსნა პირდაპირ DNS-ის ხარვეზზე მიუთითებს.'
          },
          {
            id: 'q-10-3-3',
            questionText: 'რომელი ბრძანებათა წყვილი ათავისუფლებს მიმდინარე IP მისამართს და თავიდან ითხოვს ახალ IP-ს DHCP სერვერისგან?',
            options: [
              { id: 'a', text: 'ipconfig /release და შემდეგ ipconfig /renew' },
              { id: 'b', text: 'ping /stop და ping /start' },
              { id: 'c', text: 'dir /s და cls' },
              { id: 'd', text: 'chkdsk /f და format' }
            ],
            correctOptionId: 'a',
            explanation: 'ipconfig /release აუქმებს არსებულ DHCP იჯარას, ხოლო ipconfig /renew ითხოვს ახალ IP მისამართს.'
          }
        ]
      }
    }
  ]
};
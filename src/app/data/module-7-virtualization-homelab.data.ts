import { Module } from '../core/models/academy.models';

export const MODULE_7_VIRTUALIZATION_HOMELAB: Module = {
  id: 'mod-7',
  order: 7,
  title: 'ვირტუალიზაცია და საშინაო ლაბორატორია (Virtualization and Home Lab)',
  subtitle: 'ჰიპერვიზორები, VirtualBox, ვირტუალური მანქანები და Home Lab',
  description: 'შეისწავლეთ ვირტუალიზაციის ტექნოლოგიები (Hypervisors), ვირტუალური მანქანების (VMs) გამართვა და საკუთარი სასწავლო IT ლაბორატორიის აწყობა.',
  icon: '🖧',
  estimatedHours: 5,
  lessons: [
    {
      id: 'les-7-1',
      moduleId: 'mod-7',
      order: 1,
      title: 'ვირტუალიზაციის კონცეფციები (Virtualization Concepts)',
      durationMinutes: 25,
      summary: 'Host და Guest სისტემები, Type 1 და Type 2 ჰიპერვიზორები (Hypervisors) და სნაპშოტები (Snapshots).',
      objectives: [
        'გაარჩიოთ Type 1 (Bare-Metal) და Type 2 (Hosted) ჰიპერვიზორები',
        'გაიგოთ რესურსების განაწილებისა და Snapshot-ების მუშაობის პრინციპი'
      ],
      sections: [
        {
          heading: 'რა არის ვირტუალიზაცია და ჰიპერვიზორი (Hypervisor)',
          content: 'ვირტუალიზაცია (Virtualization) საშუალებას გვაძლევს ერთ ფიზიკურ კომპიუტერზე (Host Machine) გავუშვათ რამდენიმე დამოუკიდებელი ვირტუალური მანქანა (VM / Guest OS). ამ პროცესს მართავს ჰიპერვიზორი (Hypervisor), რომელიც ანაწილებს პროცესორს (vCPU), ოპერატიულს (RAM) და დისკს. არსებობს ორი ტიპი: Type 1 (Bare-Metal) ყენდება პირდაპირ სერვერის აპარატურაზე (VMware ESXi, Proxmox, Microsoft Hyper-V), ხოლო Type 2 (Hosted) ეშვება ჩვეულებრივ ოპერაციულ სისტემაში პროგრამის სახით (Oracle VirtualBox, VMware Workstation). ვირტუალიზაციის მუშაობისთვის BIOS/UEFI-ში ჩართული უნდა იყოს Intel VT-x ან AMD-V. უდიდესი უპირატესობაა სნაპშოტი (Snapshot) — სისტემის მდგომარეობის შენახვა, რათა შეცდომის შემთხვევაში წამებში დააბრუნოთ VM ძველ მდგომარეობაში.',
          codeOrCommand: 'systeminfo',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Virtualization explained Type 1 vs Type 2 Hypervisor for beginners'
        }
      ],
      keyTerms: [
        {
          termKa: 'ჰიპერვიზორი',
          termEn: 'Hypervisor',
          definitionKa: 'პროგრამული ან აპარატურული შრე, რომელიც ქმნის და მართავს ვირტუალურ მანქანებს (VMs).'
        },
        {
          termKa: 'მდგომარეობის ასლი (სნაპშოტი)',
          termEn: 'Snapshot',
          definitionKa: 'ვირტუალური მანქანის კონკრეტული დროის მდგომარეობის ჩანაწერი სწრაფი აღდგენისთვის (Rollback).'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): აპარატურული ვირტუალიზაციის შემოწმება',
        ticketDescription: 'გახსენით Task Manager (Ctrl + Shift + Esc), გადადით Performance -> CPU ჩანართზე და შეამოწმეთ, წერია თუ არა "Virtualization: Enabled". ასევე გაუშვით CMD-ში ბრძანება systeminfo და ბოლოში ნახეთ Hyper-V Requirements სტატუსი.',
        solutionSteps: [
          'Task Manager -> Performance -> CPU -> Virtualization: Enabled.',
          'CMD -> systeminfo -> Hyper-V Requirements.'
        ]
      },
      quiz: {
        id: 'quiz-7-1',
        lessonId: 'les-7-1',
        moduleId: 'mod-7',
        title: 'ტესტი: ვირტუალიზაციის კონცეფციები',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-7-1-1',
            questionText: 'რა განსხვავებაა Type 1 (Bare-Metal) და Type 2 (Hosted) ჰიპერვიზორებს შორის?',
            options: [
              { id: 'a', text: 'Type 1 ყენდება პირდაპირ ფიზიკურ სერვერზე OS-ის გარეშე, ხოლო Type 2 ეშვება უკვე არსებულ ოპერაციულ სისტემაში' },
              { id: 'b', text: 'Type 1 უფასოა, ხოლო Type 2 ფასიანი' },
              { id: 'c', text: 'Type 2 მუშაობს მხოლოდ Linux-ზე' },
              { id: 'd', text: 'მათ შორის განსხვავება არ არსებობს' }
            ],
            correctOptionId: 'a',
            explanation: 'Type 1 (მაგ: ESXi, Proxmox) პირდაპირ აპარატურაზე დგება, ხოლო Type 2 (VirtualBox) ჩვეულებრივი აპლიკაციასავით ეშვება Windows/macOS/Linux-ზე.'
          },
          {
            id: 'q-7-1-2',
            questionText: 'რომელი ფუნქცია უნდა იყოს ჩართული BIOS/UEFI-ში, რათა კომპიუტერმა შეძლოს 64-ბიტიანი ვირტუალური მანქანების გაშვება?',
            options: [
              { id: 'a', text: 'Fast Boot' },
              { id: 'b', text: 'Intel VT-x / AMD-V (Hardware Virtualization)' },
              { id: 'c', text: 'RGB Lighting' },
              { id: 'd', text: 'Audio Controller' }
            ],
            correctOptionId: 'b',
            explanation: 'Intel VT-x ან AMD-V არის პროცესორის აპარატურული ვირტუალიზაციის მხარდაჭერა, რომლის გარეშეც VM-ები ვერ ჩაირთვება.'
          },
          {
            id: 'q-7-1-3',
            questionText: 'რა სარგებელი მოაქვს Snapshot-ის აღებას ვირტუალურ მანქანაზე სარისკო ცვლილებების განხორციელებამდე?',
            options: [
              { id: 'a', text: 'ზრდის მონიტორის რეზოლუციას' },
              { id: 'b', text: 'საშუალებას გვაძლევს შეცდომის შემთხვევაში VM წამებში დავაბრუნოთ ზუსტად იმ მდგომარეობაში, რაც ცვლილებამდე იყო' },
              { id: 'c', text: 'აორმაგებს ფიზიკური დისკის მოცულობას' },
              { id: 'd', text: 'ავტომატურად აყენებს ანტივირუსს' }
            ],
            correctOptionId: 'b',
            explanation: 'Snapshot ინახავს VM-ის დისკისა და პარამეტრების მდგომარეობას კონკრეტულ წერტილში სწრაფი აღდგენისთვის.'
          }
        ]
      }
    },
    {
      id: 'les-7-2',
      moduleId: 'mod-7',
      order: 2,
      title: 'VirtualBox-ის ინსტალაცია და Windows VM-ის შექმნა (Installing VirtualBox & Windows VM)',
      durationMinutes: 30,
      summary: 'ISO იმიჯის მიბმა, ვირტუალური დისკი (VDI), Guest Additions და ქსელის რეჟიმები (NAT vs Bridged).',
      objectives: [
        'შექმნათ Windows ვირტუალური მანქანა ISO ფაილის გამოყენებით',
        'გაარჩიოთ NAT, Bridged და Internal ქსელის რეჟიმები'
      ],
      sections: [
        {
          heading: 'Windows VM-ის აწყობა VirtualBox-ში',
          content: 'Oracle VirtualBox-ში ახალი ვირტუალური მანქანის (VM) შექმნისას ვუთითებთ სახელს, ვაბამთ საინსტალაციო ISO ფაილს (Optical Drive) და გამოვყოფთ რესურსებს: Windows 10/11-ისთვის რეკომენდებულია მინიმუმ 4 GB RAM, 2 vCPU და 50 GB დინამიკური ვირტუალური დისკი (VDI - Dynamically Allocated). ინსტალაციის დასრულების შემდეგ აუცილებელია Guest Additions პაკეტის დაყენება, რაც ასწორებს ეკრანის რეზოლუციას და რთავს საერთო ბუფერს (Shared Clipboard) და საქაღალდეებს. ქსელის პარამეტრებში NAT რეჟიმი VM-ს აძლევს მხოლოდ ინტერნეტს Host-ის გავლით, ხოლო Bridged Adapter რეჟიმი VM-ს აერთებს პირდაპირ თქვენს რეალურ როუტერთან დამოუკიდებელი IP მისამართით.',
          codeOrCommand: 'VBoxManage list vms',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to install VirtualBox and create Windows 10 11 VM tutorial'
        }
      ],
      keyTerms: [
        {
          termKa: 'ვირტუალური დისკის იმიჯი',
          termEn: 'VDI (Virtual Disk Image)',
          definitionKa: 'VirtualBox-ის ფაილი, რომელიც ვირტუალური მანქანისთვის მყარი დისკის (HDD/SSD) როლს ასრულებს.'
        },
        {
          termKa: 'დამატებითი დრაივერების პაკეტი',
          termEn: 'Guest Additions',
          definitionKa: 'დრაივერების ნაკრები Guest OS-ისთვის, რომელიც რთავს სრულ ეკრანს, Drag & Drop-ს და Shared Clipboard-ს.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): Windows VM-ის გამართვა და სნაპშოტი',
        ticketDescription: 'VirtualBox-ში შექმენით ახალი VM (4096 MB RAM, 2 CPU, 50 GB VDI) და მიაბით Windows-ის ISO ფაილი. სისტემის ჩართვის შემდეგ Devices მენიუდან დააყენეთ Guest Additions და აიღეთ პირველი სნაპშოტი სახელით "Clean_Install".',
        solutionSteps: [
          'VirtualBox -> New -> 4096 MB RAM, 2 CPU, 50 GB VDI -> Mount ISO.',
          'Devices -> Insert Guest Additions CD image -> Install -> Take Snapshot "Clean_Install".'
        ]
      },
      quiz: {
        id: 'quiz-7-2',
        lessonId: 'les-7-2',
        moduleId: 'mod-7',
        title: 'ტესტი: VirtualBox და Windows VM',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-7-2-1',
            questionText: 'რისთვის გამოიყენება VirtualBox Guest Additions პაკეტის ინსტალაცია ვირტუალურ მანქანაში?',
            options: [
              { id: 'a', text: 'BIOS-ის პაროლის გასატეხად' },
              { id: 'b', text: 'ეკრანის რეზოლუციის ავტომატური მორგების, Shared Clipboard-ისა და უკეთესი წარმადობისთვის' },
              { id: 'c', text: 'ფიზიკური პროცესორის გასაგრილებლად' },
              { id: 'd', text: 'მხოლოდ ხმის გასათიშად' }
            ],
            correctOptionId: 'b',
            explanation: 'Guest Additions აყენებს ვიდეო და სისტემურ დრაივერებს, რაც აუმჯობესებს გრაფიკას და Host-თან ფაილების/ტექსტის მიმოცვლას.'
          },
          {
            id: 'q-7-2-2',
            questionText: 'ქსელის რომელი რეჟიმი უნდა აირჩიოთ VirtualBox-ში, თუ გსურთ, რომ VM-მა IP მისამართი პირდაპირ თქვენი სახლის/ოფისის Wi-Fi როუტერიდან მიიღოს?',
            options: [
              { id: 'a', text: 'Not Attached' },
              { id: 'b', text: 'Bridged Adapter' },
              { id: 'c', text: 'Internal Network' },
              { id: 'd', text: 'Host-only Adapter' }
            ],
            correctOptionId: 'b',
            explanation: 'Bridged Adapter აკავშირებს VM-ს პირდაპირ ფიზიკურ ქსელთან, თითქოს ის ცალკე კომპიუტერი იყოს.'
          },
          {
            id: 'q-7-2-3',
            questionText: 'რას ნიშნავს Dynamically Allocated (დინამიკურად გამოყოფილი) ვირტუალური დისკი?',
            options: [
              { id: 'a', text: 'დისკის ფაილი თავიდან პატარაა და იზრდება მხოლოდ მაშინ, როცა VM-ში რეალურად ემატება ფაილები' },
              { id: 'b', text: 'დისკი იშლება ყოველი გადატვირთვისას' },
              { id: 'c', text: 'დისკი მუშაობს მხოლოდ ინტერნეტით' },
              { id: 'd', text: 'დისკი მყისიერად იკავებს მთელ ფიზიკურ SSD-ს' }
            ],
            correctOptionId: 'a',
            explanation: 'Dynamically Allocated ზოგავს Host-ის SSD-ზე ადგილს და ფართოვდება ზღვრულ ზომამდე მხოლოდ საჭიროების მიხედვით.'
          }
        ]
      }
    },
    {
      id: 'les-7-3',
      moduleId: 'mod-7',
      order: 3,
      title: 'მცირე საშინაო ლაბორატორიის აწყობა (Building a Small Home Lab)',
      durationMinutes: 30,
      summary: 'Windows Server (Domain Controller) + Windows Client VM-ების დაკავშირება Internal Network-ით.',
      objectives: [
        'დააპროექტოთ 2-მანქანიანი AD ლაბორატორია (Server + Client)',
        'გამართოთ იზოლირებული შიდა ქსელი (Internal Network) ტესტირებისთვის'
      ],
      sections: [
        {
          heading: 'Home Lab არქიტექტურა IT Support-ისთვის',
          content: 'საშინაო ლაბორატორია (Home Lab) საუკეთესო გზაა პრაქტიკული გამოცდილების მისაღებად რეალური სერვერების დაზიანების რისკის გარეშე. კლასიკური IT Support ლაბორატორია შედგება 2 ვირტუალური მანქანისგან: 1. Windows Server (რომელზეც ყენდება Active Directory Domain Services, DNS და DHCP) და 2. Windows 10/11 კლიენტი (სამუშაო სადგური). იმისათვის, რომ მათ ერთმანეთი დაინახონ და არ შეუშალონ ხელი სახლის რეალურ როუტერს, ორივე VM-ის ქსელის კარტა გადაგვყავს Internal Network (შიდა ქსელი) რეჟიმზე. სერვერს ვუწერთ სტატიკურ IP-ს (მაგ: 192.168.10.10), ხოლო კლიენტის DNS-ში ვუთითებთ ამავე მისამართს და ვაწევრიანებთ დომენში.',
          codeOrCommand: 'ping 192.168.10.10',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): How to build an Active Directory Home Lab in VirtualBox for IT support'
        }
      ],
      keyTerms: [
        {
          termKa: 'საშინაო ლაბორატორია',
          termEn: 'Home Lab',
          definitionKa: 'უსაფრთხო, იზოლირებული ვირტუალური გარემო სერვერების, ქსელებისა და ტექნიკური სცენარების სასწავლად.'
        },
        {
          termKa: 'შიდა ვირტუალური ქსელი',
          termEn: 'Internal Network',
          definitionKa: 'VirtualBox-ის ქსელური რეჟიმი, სადაც ვირტუალური მანქანები უკავშირდებიან მხოლოდ ერთმანეთს იზოლირებულ სვიჩში.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): ორი VM-ის დაკავშირება შიდა ქსელში',
        ticketDescription: 'VirtualBox-ში ორ ვირტუალურ მანქანას (VM1 და VM2) ქსელის პარამეტრებში დაუყენეთ "Internal Network" სახელით "corp-lan". პირველ მანქანას გაუწერეთ IP 192.168.50.10/24, მეორეს — 192.168.50.20/24 და შეამოწმეთ კავშირი ping ბრძანებით.',
        solutionSteps: [
          'VM Settings -> Network -> Attached to: Internal Network (Name: corp-lan).',
          'გაუწერეთ სტატიკური IP-ები (ncpa.cpl) და გაუშვით ping 192.168.50.10.'
        ]
      },
      quiz: {
        id: 'quiz-7-3',
        lessonId: 'les-7-3',
        moduleId: 'mod-7',
        title: 'ტესტი: Home Lab-ის აწყობა',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-7-3-1',
            questionText: 'რატომ ვიყენებთ Internal Network რეჟიმს Home Lab-ში საკუთარი DHCP სერვერის დატესტვისას Bridged რეჟიმის ნაცვლად?',
            options: [
              { id: 'a', text: 'რათა ვირტუალურმა DHCP სერვერმა არ გამოიწვიოს კონფლიქტი სახლის რეალურ Wi-Fi როუტერთან' },
              { id: 'b', text: 'Internal Network ათჯერ ზრდის პროცესორის სიხშირეს' },
              { id: 'c', text: 'Bridged რეჟიმში კლავიატურა არ მუშაობს' },
              { id: 'd', text: 'Internal Network არ იყენებს ოპერატიულ მეხსიერებას' }
            ],
            correctOptionId: 'a',
            explanation: 'Internal Network ქმნის იზოლირებულ გარემოს, რაც გამორიცხავს სახლის ქსელში IP მისამართების არევას.'
          },
          {
            id: 'q-7-3-2',
            questionText: 'რა უნდა მიეთითოს კლიენტი VM-ის Preferred DNS Server ველში, რათა მან იპოვოს ლაბორატორიის Domain Controller (192.168.10.10)?',
            options: [
              { id: 'a', text: '8.8.8.8' },
              { id: 'b', text: '192.168.10.10 (Domain Controller-ის IP მისამართი)' },
              { id: 'c', text: '127.0.0.1' },
              { id: 'd', text: '0.0.0.0' }
            ],
            correctOptionId: 'b',
            explanation: 'დომენის სახელის გასაშიფრად კლიენტი ვალდებულია მიმართოს Domain Controller-ზე არსებულ DNS სერვერს.'
          },
          {
            id: 'q-7-3-3',
            questionText: 'რომელი ბრძანებით ან წესით უნდა გავხსნათ ICMP Echo Request Windows Firewall-ში, თუ ორ VM-ს სწორი IP აქვს, მაგრამ Ping არ გადის?',
            options: [
              { id: 'a', text: 'ჩავრთოთ File and Printer Sharing (Echo Request - ICMPv4-In) წესი Windows Defender Firewall-ში' },
              { id: 'b', text: 'წავშალოთ ქსელის დრაივერი' },
              { id: 'c', text: 'შევცვალოთ ეკრანის ფონი' },
              { id: 'd', text: 'გადავაყენოთ VirtualBox' }
            ],
            correctOptionId: 'a',
            explanation: 'Windows Firewall ნაგულისხმევად ხშირად ბლოკავს შემომავალ Ping-ს (ICMPv4 Echo Request), ამიტომ საჭიროა შესაბამისი წესის გააქტიურება.'
          }
        ]
      }
    }
  ]
};
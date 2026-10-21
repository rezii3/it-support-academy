import { Module } from '../core/models/academy.models';

export const MODULE_4_WINDOWS_ADMIN: Module = {
  id: 'mod-4',
  order: 4,
  title: 'Windows-ის ადმინისტრირება (Windows Administration)',
  subtitle: 'მომხმარებლები, Active Directory, Group Policy და PowerShell',
  description: 'შეისწავლეთ Windows-ის მომხმარებლების მართვა (User Management), დომენური გარემო (Domain Environment), უფლებები (Permissions) და ავტომატიზაცია.',
  icon: '🪟',
  estimatedHours: 6,
  lessons: [
    {
      id: 'les-4-1',
      moduleId: 'mod-4',
      order: 1,
      title: 'მომხმარებლები და ჯგუფები (Users and Groups)',
      durationMinutes: 25,
      summary: 'ლოკალური მომხმარებლების (Local Users) და ჯგუფების (Local Groups) მართვა lusrmgr.msc ხელსაწყოთი.',
      objectives: [
        'შექმნათ და მართოთ ლოკალური ანგარიშები (Local Accounts)',
        'გამოიყენოთ უსაფრთხოების ჯგუფები (Security Groups) წვდომის სამართავად'
      ],
      sections: [
        {
          heading: 'ლოკალური ანგარიშები და ჯგუფები (Local Users & Groups)',
          content: 'Windows-ში თითოეულ მომხმარებელს აქვს უნიკალური იდენტიფიკატორი (SID - Security Identifier). კომპიუტერის სამართავად გამოიყენება Local Users and Groups (lusrmgr.msc) კონსოლი. სტანდარტულ მომხმარებელს (Standard User) შეუძლია მხოლოდ პროგრამების გაშვება, ხოლო ადმინისტრატორს (Administrator) აქვს სრული კონტროლი სისტემაზე. უსაფრთხოების ოქროს წესია მინიმალური პრივილეგიის პრინციპი (Principle of Least Privilege) — მომხმარებელს ეძლევა მხოლოდ სამუშაოსთვის აუცილებელი უფლებები. უფლებების მინიჭება ხდება ჯგუფების (Groups) საშუალებით (მაგ: Administrators, Remote Desktop Users), რაც ამარტივებს ადმინისტრირებას.',
          codeOrCommand: 'lusrmgr.msc',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Windows Local Users and Groups lusrmgr.msc tutorial'
        }
      ],
      keyTerms: [
        {
          termKa: 'უსაფრთხოების იდენტიფიკატორი',
          termEn: 'SID (Security Identifier)',
          definitionKa: 'უნიკალური კოდი, რომელსაც Windows ანიჭებს თითოეულ მომხმარებელსა და ჯგუფს.'
        },
        {
          termKa: 'მინიმალური პრივილეგიის პრინციპი',
          termEn: 'Principle of Least Privilege',
          definitionKa: 'უსაფრთხოების წესი, რომლის მიხედვითაც მომხმარებელს ეძლევა მხოლოდ აუცილებელი მინიმალური უფლებები.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): ანგარიშების კონფიგურაცია',
        ticketDescription: 'გახსენით lusrmgr.msc, შექმენით ახალი მომხმარებელი "intern01" და მონიშნეთ პაროლის შეცვლა პირველ შესვლაზე (User must change password at next logon). შემდეგ შექმენით ჯგუფი "HelpDesk_Team" და დაამატეთ "intern01" ამ ჯგუფში.',
        solutionSteps: [
          'Win + R -> lusrmgr.msc -> Users -> New User (intern01).',
          'Groups -> New Group (HelpDesk_Team) -> Add -> intern01.'
        ]
      },
      quiz: {
        id: 'quiz-4-1',
        lessonId: 'les-4-1',
        moduleId: 'mod-4',
        title: 'ტესტი: მომხმარებლები და ჯგუფები',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-4-1-1',
            questionText: 'რომელი ბრძანებით იხსნება ლოკალური მომხმარებლების და ჯგუფების მართვის კონსოლი (Local Users and Groups)?',
            options: [
              { id: 'a', text: 'lusrmgr.msc' },
              { id: 'b', text: 'devmgmt.msc' },
              { id: 'c', text: 'diskmgmt.msc' },
              { id: 'd', text: 'services.msc' }
            ],
            correctOptionId: 'a',
            explanation: 'lusrmgr.msc (Local Users and Groups Manager) ხსნის ლოკალური ანგარიშებისა და ჯგუფების მართვის ფანჯარას.'
          },
          {
            id: 'q-4-1-2',
            questionText: 'რას გულისხმობს მინიმალური პრივილეგიის პრინციპი (Principle of Least Privilege)?',
            options: [
              { id: 'a', text: 'ყველა თანამშრომელს უნდა ჰქონდეს Administrator-ის უფლება' },
              { id: 'b', text: 'მომხმარებელს უნდა ჰქონდეს მხოლოდ სამუშაოს შესასრულებლად საჭირო უფლებები' },
              { id: 'c', text: 'პაროლი არასდროს უნდა იცვლებოდეს' },
              { id: 'd', text: 'Guest ანგარიში მუდმივად ჩართული უნდა იყოს' }
            ],
            correctOptionId: 'b',
            explanation: 'უსაფრთხოების მიზნით მომხმარებელს ეძლევა მხოლოდ ის წვდომა, რაც მის პოზიციას სჭირდება.'
          },
          {
            id: 'q-4-1-3',
            questionText: 'რა ეწოდება უნიკალურ კოდს, რომლითაც სისტემა მომხმარებლის ანგარიშს აღიქვამს?',
            options: [
              { id: 'a', text: 'MAC Address' },
              { id: 'b', text: 'SID (Security Identifier)' },
              { id: 'c', text: 'PID (Process ID)' },
              { id: 'd', text: 'UUID' }
            ],
            correctOptionId: 'b',
            explanation: 'SID (Security Identifier) არის უნიკალური იდენტიფიკატორი, რომელიც ყველა მომხმარებელსა და ჯგუფს ენიჭება.'
          }
        ]
      }
    },
    {
      id: 'les-4-2',
      moduleId: 'mod-4',
      order: 2,
      title: 'Active Directory-ის საფუძვლები და დომენში გაწევრიანება (Domain Join)',
      durationMinutes: 30,
      summary: 'Active Directory Domain Services (AD DS), კომპიუტერის დომენში ჩართვა და ანგარიშების მართვა.',
      objectives: [
        'გაიგოთ Domain Controller-ის, OU-ს და AD ऑბიექტების დანიშნულება',
        'შეძლოთ კომპიუტერის დომენში გაწევრიანება (Domain Join)'
      ],
      sections: [
        {
          heading: 'Active Directory და დომენი (Domain Environment)',
          content: 'კორპორატიულ ქსელში კომპიუტერების ცენტრალიზებული მართვისთვის გამოიყენება Active Directory Domain Services (AD DS), რომელიც მუშაობს Domain Controller (DC) სერვერზე. მის გარეშე კომპიუტერები მუშაობენ დამოუკიდებელ ჯგუფში (Workgroup). AD-ში ობიექტები (Users, Computers, Groups) დაჯგუფებულია ორგანიზაციულ ერთეულებში (OU - Organizational Units) დეპარტამენტების მიხედვით. IT Support-ის მთავარი ინსტრუმენტია Active Directory Users and Computers (dsa.msc), სადაც ხდება პაროლის განულება (Password Reset) და დაბლოკილი ანგარიშის განბლოკვა (Unlock Account). კომპიუტერის დომენში გასაწევრიანებლად (Domain Join) აუცილებელია ქსელის კარტაზე DNS სერვერად მითითებული იყოს Domain Controller-ის IP მისამართი.',
          codeOrCommand: 'sysdm.cpl',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Active Directory basics and how to join a PC to a domain'
        }
      ],
      keyTerms: [
        {
          termKa: 'დომენის კონტროლერი',
          termEn: 'Domain Controller (DC)',
          definitionKa: 'სერვერი, რომელიც ამოწმებს მომხმარებლების ავტორიზაციას და ინახავს Active Directory-ის ბაზას.'
        },
        {
          termKa: 'ორგანიზაციული ერთეული',
          termEn: 'Organizational Unit (OU)',
          definitionKa: 'კონტეინერი AD-ში, სადაც მომხმარებლები და კომპიუტერები ჯგუფდება პოლიტიკების გასავრცელებლად.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): დომენში გაწევრიანება',
        ticketDescription: 'გახსენით სისტემის პარამეტრები ბრძანებით sysdm.cpl, შეცვალეთ კომპიუტერის სახელი "PC-FINANCE-01"-ით და გადაიყვანეთ Workgroup-იდან კორპორატიულ დომენში (Domain). გაწევრიანებამდე ქსელის პარამეტრებში შეამოწმეთ, რომ Preferred DNS Server უთითებს Domain Controller-ის IP-ს.',
        solutionSteps: [
          'ncpa.cpl -> IPv4 Properties -> DNS = DC IP.',
          'sysdm.cpl -> Change -> Domain -> შეიყვანეთ დომენის სახელი და ადმინისტრატორის მონაცემები.'
        ]
      },
      quiz: {
        id: 'quiz-4-2',
        lessonId: 'les-4-2',
        moduleId: 'mod-4',
        title: 'ტესტი: Active Directory და დომენი',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-4-2-1',
            questionText: 'რატომ ვერ უერთდება კომპიუტერი დომენს (Domain Join Error), თუ ქსელური კავშირი ფიზიკურად მუშაობს?',
            options: [
              { id: 'a', text: 'ეკრანის რეზოლუცია დაბალია' },
              { id: 'b', text: 'DNS სერვერის მისამართად არ არის გაწერილი Domain Controller-ის IP' },
              { id: 'c', text: 'Task Manager ჩართულია' },
              { id: 'd', text: 'არ არის დაყენებული Microsoft Office' }
            ],
            correctOptionId: 'b',
            explanation: 'დომენის სახელის მოსაძებნად კომპიუტერმა უნდა მიმართოს Domain Controller-ის DNS სერვერს.'
          },
          {
            id: 'q-4-2-2',
            questionText: 'რა ეწოდება Active Directory-ში სტრუქტურულ საქაღალდეს, სადაც ობიექტები დეპარტამენტების მიხედვით ჯგუფდება?',
            options: [
              { id: 'a', text: 'Workgroup' },
              { id: 'b', text: 'Organizational Unit (OU)' },
              { id: 'c', text: 'Registry Key' },
              { id: 'd', text: 'Local Folder' }
            ],
            correctOptionId: 'b',
            explanation: 'Organizational Unit (OU) გამოიყენება ობიექტების ლოგიკური დაჯგუფებისა და Group Policy-ის სამართავად.'
          },
          {
            id: 'q-4-2-3',
            questionText: 'რომელი ბრძანებით იხსნება Active Directory Users and Computers კონსოლი?',
            options: [
              { id: 'a', text: 'dsa.msc' },
              { id: 'b', text: 'calc.exe' },
              { id: 'c', text: 'msconfig' },
              { id: 'd', text: 'cleanmgr' }
            ],
            correctOptionId: 'a',
            explanation: 'dsa.msc ხსნის Active Directory Users and Computers (ADUC) მართვის ფანჯარას.'
          }
        ]
      }
    },
    {
      id: 'les-4-3',
      moduleId: 'mod-4',
      order: 3,
      title: 'ჯგუფური პოლიტიკა (Group Policy) და NTFS უფლებები (NTFS Permissions)',
      durationMinutes: 30,
      summary: 'GPO პარამეტრების მართვა და ფაილურ სისტემაზე წვდომის კონტროლი (Read, Write, Modify, Full Control).',
      objectives: [
        'გაიგოთ როგორ მუშაობს Group Policy Object (GPO) და ბრძანება gpupdate /force',
        'გამართოთ NTFS და Share უფლებები საქაღალდეებზე'
      ],
      sections: [
        {
          heading: 'Group Policy (GPO) და NTFS უფლებები',
          content: 'Group Policy (ჯგუფური პოლიტიკა) საშუალებას გვაძლევს ცენტრალიზებულად ვმართოთ კომპიუტერებისა და მომხმარებლების პარამეტრები (მაგ: Control Panel-ის დაბლოკვა, სამუშაო მაგიდის ფონის დაყენება). პოლიტიკის მყისიერად გასაახლებლად გამოიყენება ბრძანება gpupdate /force, ხოლო მოქმედი პოლიტიკების შესამოწმებლად — gpresult /r. ფაილებისა და საქაღალდეების დასაცავად გამოიყენება NTFS Permissions: Read (წაკითხვა), Write (ჩაწერა), Modify (შეცვლა/წაშლა) და Full Control (სრული კონტროლი). გაითვალისწინეთ, რომ აკრძალვის უფლება (Explicit Deny) ყოველთვის გადაფარავს დაშვების უფლებას (Allow), ხოლო ქვესაქაღალდეები ავტომატურად იღებენ მშობელი საქაღალდის უფლებებს (Inheritance).',
          codeOrCommand: 'gpupdate /force',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Windows Group Policy GPO and NTFS permissions explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'ჯგუფური პოლიტიკის ობიექტი',
          termEn: 'GPO (Group Policy Object)',
          definitionKa: 'წესების ნაკრები, რომელიც აკონტროლებს Windows-ის უსაფრთხოებასა და სამუშაო გარემოს.'
        },
        {
          termKa: 'უფლებების მემკვიდრეობითობა',
          termEn: 'Permission Inheritance',
          definitionKa: 'მექანიზმი, რომლითაც შვილობილი საქაღალდე ავტომატურად იღებს მშობელი საქაღალდის NTFS უფლებებს.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): საქაღალდის უფლებების გამართვა',
        ticketDescription: 'შექმენით საქაღალდე "C:\\Finance_Reports", გაუთიშეთ უფლებების მემკვიდრეობითობა (Disable Inheritance) და ჯგუფს "Accountants" მიანიჭეთ მხოლოდ Modify უფლება. შემდეგ გაუშვით ბრძანება gpupdate /force პოლიტიკების განახლებისთვის.',
        solutionSteps: [
          'Folder Properties -> Security -> Advanced -> Disable inheritance.',
          'Edit -> Add "Accountants" -> Check "Modify" -> Apply.'
        ]
      },
      quiz: {
        id: 'quiz-4-3',
        lessonId: 'les-4-3',
        moduleId: 'mod-4',
        title: 'ტესტი: Group Policy და NTFS უფლებები',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-4-3-1',
            questionText: 'რომელი ბრძანება აიძულებს კომპიუტერს დაუყოვნებლივ განაახლოს Group Policy პარამეტრები?',
            options: [
              { id: 'a', text: 'ipconfig /flushdns' },
              { id: 'b', text: 'gpupdate /force' },
              { id: 'c', text: 'sfc /scannow' },
              { id: 'd', text: 'netstat -an' }
            ],
            correctOptionId: 'b',
            explanation: 'gpupdate /force მყისიერად იწერს და ააქტიურებს განახლებულ Group Policy პარამეტრებს.'
          },
          {
            id: 'q-4-3-2',
            questionText: 'რა მოხდება, თუ მომხმარებელს ერთი ჯგუფიდან აქვს ფაილზე Read (Allow) უფლება, ხოლო მეორე ჯგუფიდან Explicit Deny?',
            options: [
              { id: 'a', text: 'მომხმარებელს ექნება სრული წვდომა (Full Control)' },
              { id: 'b', text: 'Deny (აკრძალვა) გადაფარავს Allow-ს და წვდომა დაიბლოკება' },
              { id: 'c', text: 'მომხმარებელი შეძლებს მხოლოდ წაკითხვას' },
              { id: 'd', text: 'ფაილი ავტომატურად წაიშლება' }
            ],
            correctOptionId: 'b',
            explanation: 'NTFS უფლებებში Explicit Deny-ს ყოველთვის უმაღლესი პრიორიტეტი აქვს Allow-ზე.'
          },
          {
            id: 'q-4-3-3',
            questionText: 'რომელი NTFS უფლებაა საჭირო იმისათვის, რომ მომხმარებელმა შეძლოს ფაილის შეცვლა და წაშლა, მაგრამ ვერ შეცვალოს თავად უსაფრთხოების უფლებები (Permissions)?',
            options: [
              { id: 'a', text: 'Read' },
              { id: 'b', text: 'List folder contents' },
              { id: 'c', text: 'Modify' },
              { id: 'd', text: 'Full Control' }
            ],
            correctOptionId: 'c',
            explanation: 'Modify იძლევა წაკითხვის, ჩაწერისა და წაშლის უფლებას, ხოლო უფლებების შეცვლა მხოლოდ Full Control-ს შეუძლია.'
          }
        ]
      }
    },
    {
      id: 'les-4-4',
      moduleId: 'mod-4',
      order: 4,
      title: 'PowerShell-ის საფუძვლები (PowerShell Basics)',
      durationMinutes: 30,
      summary: 'Cmdlet-ების სტრუქტურა (Verb-Noun), სერვისებისა და პროცესების მართვა და Pipeline-ის გამოყენება.',
      objectives: [
        'გაიგოთ PowerShell-ის Verb-Noun სინტაქსი',
        'გამოიყენოთ ძირითადი ბრძანებები (Get-Service, Get-Process, Get-Help)'
      ],
      sections: [
        {
          heading: 'PowerShell და Cmdlet-ების სინტაქსი',
          content: 'PowerShell არის Windows-ის თანამედროვე გარსი (Shell) და სკრიპტინგის ენა, რომელიც მუშაობს ობიექტებზე (Objects) და არა მხოლოდ ტექსტზე. მისი ბრძანებები (Cmdlets) აგებულია "ზმნა-არსებითი სახელი" (Verb-Noun) პრინციპით: მაგალითად, Get-Service (სერვისების ნახვა), Stop-Process (პროცესის გაჩერება), Test-NetConnection (ქსელის შემოწმება). თუ ბრძანების დანიშნულება არ გახსოვთ, გამოიყენეთ Get-Help. ვერტიკალური ხაზი (Pipeline "|") საშუალებას გაძლევთ ერთი ბრძანების შედეგი გადასცეთ მეორეს გასაფილტრად (Where-Object) ან დასახარისხებლად (Sort-Object), რაც IT Support-ს სწრაფ დიაგნოსტიკასა და ავტომატიზაციაში ეხმარება.',
          codeOrCommand: 'Get-Service | Where-Object {$_.Status -eq "Running"}',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): PowerShell basics for IT support beginners tutorial'
        }
      ],
      keyTerms: [
        {
          termKa: 'ბრძანება (კომანდლეტი)',
          termEn: 'Cmdlet (Command-let)',
          definitionKa: 'PowerShell-ის ჩაშენებული ბრძანება, რომელიც იწერება Verb-Noun ფორმატით (მაგ: Get-Process).'
        },
        {
          termKa: 'კონვეიერი (პაიპლაინი)',
          termEn: 'Pipeline (|)',
          definitionKa: 'სიმბოლო "|", რომელიც ერთი ბრძანების მიერ დაბრუნებულ ობიექტებს გადასცემს მომდევნო ბრძანებას.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): სერვისების მართვა PowerShell-ით',
        ticketDescription: 'გახსენით PowerShell ადმინისტრატორის უფლებით (Run as Administrator) და იპოვეთ Print Spooler სერვისის სტატუსი ბრძანებით Get-Service -Name Spooler. შემდეგ გადატვირთეთ იგი ბრძანებით Restart-Service -Name Spooler.',
        solutionSteps: [
          'გაუშვით: Get-Service -Name Spooler',
          'გაუშვით: Restart-Service -Name Spooler'
        ]
      },
      quiz: {
        id: 'quiz-4-4',
        lessonId: 'les-4-4',
        moduleId: 'mod-4',
        title: 'ტესტი: PowerShell-ის საფუძვლები',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-4-4-1',
            questionText: 'რომელ სინტაქსურ სტრუქტურას იყენებს PowerShell-ის ყველა სტანდარტული ბრძანება (Cmdlet)?',
            options: [
              { id: 'a', text: 'Noun-Verb (მაგ: Service-Get)' },
              { id: 'b', text: 'Verb-Noun (მაგ: Get-Service)' },
              { id: 'c', text: 'მხოლოდ სამასოიანი შემოკლებები' },
              { id: 'd', text: 'SQL მოთხოვნები' }
            ],
            correctOptionId: 'b',
            explanation: 'PowerShell იყენებს Verb-Noun (ზმნა-არსებითი სახელი) ფორმატს, როგორიცაა Get-Process, Restart-Service.'
          },
          {
            id: 'q-4-4-2',
            questionText: 'რომელი სიმბოლო გამოიყენება PowerShell-ში ერთი ბრძანების შედეგის მეორე ბრძანებისთვის გადასაცემად (Pipeline)?',
            options: [
              { id: 'a', text: '&' },
              { id: 'b', text: '|' },
              { id: 'c', text: '#' },
              { id: 'd', text: '@' }
            ],
            correctOptionId: 'b',
            explanation: 'ვერტიკალური ხაზი "|" (Pipe) გადასცემს პირველი ბრძანების ობიექტებს მომდევნო ბრძანებას.'
          },
          {
            id: 'q-4-4-3',
            questionText: 'რომელი Cmdlet დაგეხმარებათ ნებისმიერი სხვა ბრძანების ინსტრუქციისა და მაგალითების ნახვაში?',
            options: [
              { id: 'a', text: 'Find-Doc' },
              { id: 'b', text: 'Get-Help' },
              { id: 'c', text: 'Show-Manual' },
              { id: 'd', text: 'Read-Info' }
            ],
            correctOptionId: 'b',
            explanation: 'Get-Help აჩვენებს ბრძანების სრულ აღწერას, პარამეტრებს და გამოყენების მაგალითებს.'
          }
        ]
      }
    }
  ]
};
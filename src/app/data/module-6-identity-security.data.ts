import { Module } from '../core/models/academy.models';

export const MODULE_6_IDENTITY_SECURITY: Module = {
  id: 'mod-6',
  order: 6,
  title: 'იდენტობის მართვა და კიბერუსაფრთხოება (Identity and Security)',
  subtitle: 'MFA, SSO (Okta/Entra ID), ანტივირუსი, ფიშინგი და სარეზერვო ასლები',
  description: 'შეისწავლეთ თანამედროვე ავთენტიფიკაციის სისტემები, კიბერსაფრთხეებისგან დაცვა, მავნე პროგრამების პრევენცია და მონაცემთა აღდგენის (Backup) სტანდარტები.',
  icon: '🔐',
  estimatedHours: 6,
  lessons: [
    {
      id: 'les-6-1',
      moduleId: 'mod-6',
      order: 1,
      title: 'პაროლის პოლიტიკა და მრავალფაქტორიანი ავთენტიფიკაცია (Password Policies & MFA)',
      durationMinutes: 25,
      summary: 'უსაფრთხო პაროლების მოთხოვნები, Account Lockout და MFA-ს ფაქტორები.',
      objectives: [
        'დააკონფიგურიროთ პაროლის სირთულისა და დაბლოკვის (Lockout) წესები',
        'გაარჩიოთ ავთენტიფიკაციის ფაქტორები და MFA მეთოდები'
      ],
      sections: [
        {
          heading: 'პაროლის პოლიტიკა და MFA',
          content: 'კორპორატიული პაროლის პოლიტიკა (Password Policy) განსაზღვრავს მინიმალურ სიგრძეს (მინიმუმ 12-14 სიმბოლო), სირთულეს (Complexity) და პაროლების ისტორიას (Password History). Brute-force შეტევებისგან დასაცავად გამოიყენება Account Lockout Policy, რომელიც რამდენიმე არასწორი მცდელობის შემდეგ ბლოკავს ანგარიშს. მხოლოდ პაროლი საკმარისი არ არის, ამიტომ აუცილებელია მრავალფაქტორიანი ავთენტიფიკაცია (MFA - Multi-Factor Authentication), რომელიც აერთიანებს მინიმუმ ორ ფაქტორს: 1. რაც იცი (Something you know - პაროლი), 2. რაც გაქვს (Something you have - Authenticator აპლიკაცია ან YubiKey ტოკენი), 3. რაც ხარ (Something you are - ბიომეტრია/თითის ანაბეჭდი).',
          codeOrCommand: 'secpol.msc',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Multi-Factor Authentication MFA and Windows Password Policy explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'მრავალფაქტორიანი ავთენტიფიკაცია',
          termEn: 'MFA (Multi-Factor Authentication)',
          definitionKa: 'უსაფრთხოების მეთოდი, რომელიც სისტემაში შესასვლელად მოითხოვს ორი ან მეტი დამოუკიდებელი ფაქტორის დადასტურებას.'
        },
        {
          termKa: 'ანგარიშის დაბლოკვის პოლიტიკა',
          termEn: 'Account Lockout Policy',
          definitionKa: 'წესი, რომელიც ბლოკავს ანგარიშს პაროლის რამდენჯერმე არასწორად შეყვანის შემდეგ.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): Local Security Policy-ის გამართვა',
        ticketDescription: 'გახსენით secpol.msc (Account Policies) და დააყენეთ Minimum password length 12 სიმბოლოზე. შემდეგ გადადით Account Lockout Policy-ში და მიუთითეთ ანგარიშის დაბლოკვა 5 არასწორი მცდელობის შემდეგ (Account lockout threshold = 5).',
        solutionSteps: [
          'Win + R -> secpol.msc -> Account Policies -> Password Policy -> Minimum password length = 12.',
          'Account Lockout Policy -> Account lockout threshold = 5 invalid logon attempts.'
        ]
      },
      quiz: {
        id: 'quiz-6-1',
        lessonId: 'les-6-1',
        moduleId: 'mod-6',
        title: 'ტესტი: პაროლები და MFA',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-6-1-1',
            questionText: 'ჩამოთვლილთაგან რომელი წარმოადგენს ნამდვილ ორფაქტორიან ავთენტიფიკაციას (2FA/MFA)?',
            options: [
              { id: 'a', text: 'პაროლი და PIN კოდი' },
              { id: 'b', text: 'პაროლი და უსაფრთხოების კითხვა (დედის ქალიშვილობის გვარი)' },
              { id: 'c', text: 'პაროლი (რაც იცი) + Microsoft Authenticator აპლიკაციის დასტური (რაც გაქვს)' },
              { id: 'd', text: 'ორი სხვადასხვა პაროლის შეყვანა' }
            ],
            correctOptionId: 'c',
            explanation: 'MFA მოითხოვს სხვადასხვა კატეგორიის ფაქტორებს: ცოდნის ფაქტორს (პაროლი) და ფლობის ფაქტორს (ტელეფონის აპლიკაცია/ტოკენი).'
          },
          {
            id: 'q-6-1-2',
            questionText: 'რომელი პოლიტიკა იცავს ანგარიშს ჰაკერის მიერ პაროლების ავტომატური გადარჩევის (Brute-Force Attack) შეტევისგან?',
            options: [
              { id: 'a', text: 'Account Lockout Policy' },
              { id: 'b', text: 'Screen Saver Policy' },
              { id: 'c', text: 'Disk Quota Policy' },
              { id: 'd', text: 'Printer Sharing Policy' }
            ],
            correctOptionId: 'a',
            explanation: 'Account Lockout Policy ბლოკავს ანგარიშს რამდენიმე არასწორი მცდელობის შემდეგ და აჩერებს Brute-Force შეტევას.'
          },
          {
            id: 'q-6-1-3',
            questionText: 'MFA მეთოდებს შორის რომელი ითვლება უფრო დაცულად: SMS კოდი თუ Authenticator აპლიკაცია / აპარატურული გასაღები (FIDO2/YubiKey)?',
            options: [
              { id: 'a', text: 'SMS კოდი ყველაზე უსაფრთხოა' },
              { id: 'b', text: 'Authenticator აპლიკაცია და აპარატურული გასაღები (YubiKey), რადგან SMS შეიძლება მოიპარონ SIM-Swapping შეტევით' },
              { id: 'c', text: 'ელფოსტაზე მოსული ტექსტი' },
              { id: 'd', text: 'ყველა მეთოდს ზუსტად ერთნაირი დაცვა აქვს' }
            ],
            correctOptionId: 'b',
            explanation: 'SMS კოდები მოწყვლადია SIM-Swapping-ისა და ქსელური გადაჭერის მიმართ, ხოლო აპლიკაცია და FIDO2 გასაღები ბევრად დაცულია.'
          }
        ]
      }
    },
    {
      id: 'les-6-2',
      moduleId: 'mod-6',
      order: 2,
      title: 'ერთიანი ავტორიზაცია — Single Sign-On (Okta / Microsoft Entra ID)',
      durationMinutes: 25,
      summary: 'SSO კონცეფცია, Identity Provider (IdP), SAML/OIDC პროტოკოლები და პირობითი წვდომა (Conditional Access).',
      objectives: [
        'გაიგოთ როგორ მუშაობს Single Sign-On (SSO) IdP-სა და SP-ს შორის',
        'გაარჩიოთ Authentication (ავთენტიფიკაცია) და Authorization (ავტორიზაცია)'
      ],
      sections: [
        {
          heading: 'Single Sign-On (SSO) და იდენტობის პროვაიდერები',
          content: 'Single Sign-On (SSO) მომხმარებელს საშუალებას აძლევს ერთი კორპორატიული ანგარიშით შევიდეს მრავალ აპლიკაციაში (Slack, Jira, Zoom, Salesforce). იდენტობის ცენტრალურ სისტემას ეწოდება Identity Provider (IdP) — მაგალითად, Okta ან Microsoft Entra ID (ყოფილი Azure AD), ხოლო აპლიკაციას — Service Provider (SP). მათ შორის კავშირი მყარდება SAML 2.0 ან OAuth / OpenID Connect (OIDC) პროტოკოლებით. მნიშვნელოვანია გავმიჯნოთ: ავთენტიფიკაცია (Authentication) ამოწმებს "ვინ ხარ შენ", ხოლო ავტორიზაცია (Authorization) განსაზღვრავს "რაზე გაქვს წვდომა". Conditional Access (პირობითი წვდომა) დამატებით ამოწმებს მომხმარებლის ლოკაციასა და მოწყობილობის სანდოობას.',
          codeOrCommand: 'dsregcmd /status',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Single Sign On SSO Okta Azure AD Entra ID SAML explained'
        }
      ],
      keyTerms: [
        {
          termKa: 'იდენტობის პროვაიდერი',
          termEn: 'Identity Provider (IdP)',
          definitionKa: 'ცენტრალური სერვისი (Okta, Entra ID), რომელიც ამოწმებს მომხმარებლის ვინაობას და გასცემს SSO ტოკენს.'
        },
        {
          termKa: 'ერთიანი შესვლის სისტემა',
          termEn: 'Single Sign-On (SSO)',
          definitionKa: 'მექანიზმი, რომლითაც მომხმარებელი ერთხელ გადის ავთენტიფიკაციას და იღებს წვდომას ყველა მიბმულ პროგრამაზე.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): Entra ID / Azure AD სტატუსის შემოწმება',
        ticketDescription: 'გახსენით Command Prompt და გაუშვით ბრძანება dsregcmd /status, რათა შეამოწმოთ არის თუ არა კომპიუტერი მიბმული ღრუბლოვან დომენზე (AzureAdJoined) და მუშაობს თუ არა SSO სესია (SSO State).',
        solutionSteps: [
          'გახსენით CMD და აკრიფეთ: dsregcmd /status',
          'შეამოწმეთ Device State (AzureAdJoined) და SSO State (AzureAdPrt).'
        ]
      },
      quiz: {
        id: 'quiz-6-2',
        lessonId: 'les-6-2',
        moduleId: 'mod-6',
        title: 'ტესტი: Single Sign-On (SSO)',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-6-2-1',
            questionText: 'რა არის Identity Provider-ის (IdP - მაგ: Okta ან Microsoft Entra ID) მთავარი როლი SSO არქიტექტურაში?',
            options: [
              { id: 'a', text: 'კომპიუტერის ქულერის სიჩქარის მართვა' },
              { id: 'b', text: 'მომხმარებლის ვინაობის დადასტურება (Authentication) და აპლიკაციებისთვის უსაფრთხოების ტოკენის გადაცემა' },
              { id: 'c', text: 'ოფისის პრინტერების შეკეთება' },
              { id: 'd', text: 'ლოკალური დისკის ფორმატირება' }
            ],
            correctOptionId: 'b',
            explanation: 'Identity Provider (IdP) ცენტრალიზებულად ამოწმებს მომხმარებელს და ადასტურებს მის იდენტობას სხვა სერვისებთან (SP).'
          },
          {
            id: 'q-6-2-2',
            questionText: 'რა განსხვავებაა Authentication-სა (ავთენტიფიკაცია) და Authorization-ს (ავტორიზაცია) შორის?',
            options: [
              { id: 'a', text: 'Authentication ამოწმებს ვინ ხარ, ხოლო Authorization განსაზღვრავს რისი უფლება გაქვს' },
              { id: 'b', text: 'Authorization ხდება შესვლამდე, ხოლო Authentication გასვლისას' },
              { id: 'c', text: 'ორივე ტერმინი ზუსტად ერთსა და იმავეს ნიშნავს' },
              { id: 'd', text: 'Authentication ეხება მხოლოდ ქსელის კაბელებს' }
            ],
            correctOptionId: 'a',
            explanation: 'Authentication ადასტურებს ვინაობას (პაროლით/MFA-ით), ხოლო Authorization ამოწმებს მინიჭებულ უფლებებს.'
          },
          {
            id: 'q-6-2-3',
            questionText: 'რომელი პროტოკოლები გამოიყენება ყველაზე ხშირად თანამედროვე ვებ-აპლიკაციებში SSO-ს გასამართად?',
            options: [
              { id: 'a', text: 'FTP და Telnet' },
              { id: 'b', text: 'SAML 2.0 და OpenID Connect (OIDC) / OAuth 2.0' },
              { id: 'c', text: 'SMTP და POP3' },
              { id: 'd', text: 'DHCP და ARP' }
            ],
            correctOptionId: 'b',
            explanation: 'SAML 2.0 და OIDC (OAuth 2.0) არის ინდუსტრიული სტანდარტები ღრუბლოვანი SSO ინტეგრაციისთვის.'
          }
        ]
      }
    },
    {
      id: 'les-6-3',
      moduleId: 'mod-6',
      order: 3,
      title: 'მავნე პროგრამები, ანტივირუსი და ფიშინგი (Malware, Antivirus & Phishing)',
      durationMinutes: 30,
      summary: 'Ransomware, Trojan, Phishing-ის ამოცნობა, EDR/Antivirus და ინციდენტზე რეაგირება.',
      objectives: [
        'გაარჩიოთ Malware-ის ტიპები (Ransomware, Trojan, Spyware)',
        'ამოიცნოთ Phishing წერილები და იმოქმედოთ ინფიცირების დროს'
      ],
      sections: [
        {
          heading: 'კიბერსაფრთხეები: Malware და Phishing',
          content: 'მავნე პროგრამების (Malware) ძირითადი სახეობებია: Ransomware (შიფრავს ფაილებს და ითხოვს გამოსასყიდს), Trojan (ინიღბება სასარგებლო პროგრამად) და Spyware/Keylogger (იპარავს პაროლებს). შეტევების უმეტესობა იწყება ფიშინგით (Phishing) — ყალბი წერილით, რომელიც მომხმარებელს ატყუებს გადავიდეს საეჭვო ბმულზე ან გახსნას მავნე დანართი. კომპიუტერების დასაცავად გამოიყენება Windows Defender და თანამედროვე EDR (Endpoint Detection and Response) სისტემები. თუ კომპიუტერზე Ransomware ან აქტიური ვირუსი დაფიქსირდა, IT Support-ის პირველი ნაბიჯია კომპიუტერის ქსელიდან მყისიერი გათიშვა (Isolate from Network — LAN კაბელის გამოძრობა და Wi-Fi-ს გათიშვა), რათა ვირუსი სერვერებსა და სხვა კომპიუტერებზე არ გავრცელდეს.',
          codeOrCommand: 'Start-MpScan -ScanType QuickScan',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): Malware types ransomware phishing and endpoint security for IT support'
        }
      ],
      keyTerms: [
        {
          termKa: 'გამომძალველი ვირუსი',
          termEn: 'Ransomware',
          definitionKa: 'მავნე პროგრამა, რომელიც შიფრავს კომპიუტერისა და ქსელური დისკების ფაილებს და გაშიფვრის სანაცვლოდ თანხას ითხოვს.'
        },
        {
          termKa: 'ფიშინგი',
          termEn: 'Phishing',
          definitionKa: 'სოციალური ინჟინერიის შეტევა, სადაც თავდამსხმელი ყალბი წერილით ან საიტით ცდილობს პაროლების მოპარვას.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): ანტივირუსული სკანირება და ფიშინგის ანალიზი',
        ticketDescription: 'გახსენით PowerShell და გაუშვით Windows Defender-ის სწრაფი სკანირება ბრძანებით Start-MpScan -ScanType QuickScan. ასევე შეამოწმეთ საეჭვო წერილის გამგზავნის რეალური დომენი და ბმულის მისამართი მაუსის მიტანით (Hover without clicking).',
        solutionSteps: [
          'გაუშვით PowerShell-ში: Start-MpScan -ScanType QuickScan',
          'შეამოწმეთ Windows Security -> Virus & threat protection -> Protection history.'
        ]
      },
      quiz: {
        id: 'quiz-6-3',
        lessonId: 'les-6-3',
        moduleId: 'mod-6',
        title: 'ტესტი: Malware, ანტივირუსი და ფიშინგი',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-6-3-1',
            questionText: 'რა არის IT Support-ის პირველი და ყველაზე სასწრაფო მოქმედება, თუ თანამშრომლის კომპიუტერზე Ransomware-ის აქტიური შეტევა დაიწყო?',
            options: [
              { id: 'a', text: 'კომპიუტერის დაუყოვნებლივ გათიშვა ქსელიდან (LAN კაბელის გამოძრობა და Wi-Fi-ს გათიშვა)' },
              { id: 'b', text: 'ბრაუზერის ქეშის გასუფთავება' },
              { id: 'c', text: 'ფაილების გადატანა საერთო ქსელურ საქაღალდეში (Shared Drive)' },
              { id: 'd', text: 'მონიტორის გამორთვა' }
            ],
            correctOptionId: 'a',
            explanation: 'ქსელიდან მყისიერი იზოლაცია აჩერებს Ransomware-ის გავრცელებას სხვა კომპიუტერებსა და ქსელურ სერვერებზე.'
          },
          {
            id: 'q-6-3-2',
            questionText: 'რომელი ნიშანი მიუთითებს ყველაზე ხშირად ფიშინგ (Phishing) წერილზე?',
            options: [
              { id: 'a', text: 'გამგზავნის დომენი ოდნავ შეცვლილია (მაგ: micr0soft-support.com) და წერილი სასწრაფოდ ითხოვს პაროლის შეყვანას' },
              { id: 'b', text: 'წერილი მოსულია კოლეგისგან სამუშაო საათებში' },
              { id: 'c', text: 'წერილს არ აქვს ფერადი სურათები' },
              { id: 'd', text: 'წერილი შეიცავს მხოლოდ ტექსტს' }
            ],
            correctOptionId: 'a',
            explanation: 'ყალბი დომენი (Look-alike domain) და ხელოვნური სასწრაფოობა (Urgency) ფიშინგის კლასიკური ნიშნებია.'
          },
          {
            id: 'q-6-3-3',
            questionText: 'რა ეწოდება მავნე პროგრამას, რომელიც მომხმარებელს თავს აჩვენებს როგორც უვნებელი ან სასარგებლო პროგრამა?',
            options: [
              { id: 'a', text: 'Firewall' },
              { id: 'b', text: 'Trojan (ტროას ცხენი)' },
              { id: 'c', text: 'Patch' },
              { id: 'd', text: 'Driver' }
            ],
            correctOptionId: 'b',
            explanation: 'Trojan (ტროას ცხენი) ინიღბება ლეგიტიმურ ფაილად, რათა მომხმარებელმა თავად გაუშვას იგი.'
          }
        ]
      }
    },
    {
      id: 'les-6-4',
      moduleId: 'mod-6',
      order: 4,
      title: 'სარეზერვო ასლები და უსაფრთხოების კულტურა (Backups & Security Awareness)',
      durationMinutes: 25,
      summary: '3-2-1 Backup წესი, სარეზერვო ასლების ტიპები და უსაფრთხოების ჰიგიენა ოფისში.',
      objectives: [
        'გაიგოთ 3-2-1 სარეზერვო ასლების (Backup) ოქროს წესი',
        'დანერგოთ Clean Desk, Screen Lock და უსაფრთხოების ცნობიერების პრაქტიკები'
      ],
      sections: [
        {
          heading: '3-2-1 Backup სტრატეგია და უსაფრთხოების წესები',
          content: 'მონაცემთა დაკარგვისა და Ransomware-ისგან თავდაცვის მთავარი გარანტიაა სარეზერვო ასლი (Backup). ოქროს სტანდარტია 3-2-1 წესი: გქონდეთ მონაცემების 3 ასლი, შენახული 2 სხვადასხვა ტიპის მედიაზე (მაგ: ლოკალური სერვერი და გარე საცავი), რომელთაგან 1 ასლი ინახება ოფისის გარეთ ან ღრუბელში (Offsite / Cloud) და დაცულია წაშლისგან (Immutable / Air-gapped). გახსოვდეთ, რომ სარეზერვო ასლი უსარგებლოა, თუ პერიოდულად არ ამოწმებთ მის აღდგენას (Restore Testing). ოფისში აუცილებელია უსაფრთხოების ჰიგიენა: ეკრანის დაბლოკვა მაგიდიდან გასვლისას (Win + L), სუფთა მაგიდის პოლიტიკა (Clean Desk Policy) და უცხო USB ფლეშკების შეერთების აკრძალვა.',
          codeOrCommand: 'wbadmin get versions',
          proTip: 'YouTube საძიებო ფრაზა (YouTube Search Query): 3-2-1 backup rule explained and cybersecurity awareness for employees'
        }
      ],
      keyTerms: [
        {
          termKa: '3-2-1 სარეზერვო წესი',
          termEn: '3-2-1 Backup Rule',
          definitionKa: 'მონაცემთა 3 ასლი, 2 სხვადასხვა მედიაზე, რომელთაგან 1 ინახება დისტანციურად (Offsite/Cloud).'
        },
        {
          termKa: 'აღდგენის ტესტირება',
          termEn: 'Restore Testing',
          definitionKa: 'სარეზერვო ასლებიდან ფაილების პრაქტიკული აღდგენის შემოწმება მათი ვარგისიანობის დასადასტურებლად.'
        }
      ],
      practicalScenario: {
        title: 'ლაბორატორიული დავალება (Lab Exercise): სისტემის აღდგენის წერტილის შექმნა',
        ticketDescription: 'გახსენით System Properties (sysdm.cpl -> System Protection) და შექმენით აღდგენის წერტილი (Restore Point) სახელით "Before_Driver_Update". ასევე შეამოწმეთ ეკრანის ავტომატური დაბლოკვის დრო და დატესტეთ კომბინაცია Win + L.',
        solutionSteps: [
          'Win + R -> sysdm.cpl -> System Protection -> Create -> "Before_Driver_Update".',
          'დააჭირეთ Win + L კლავიატურაზე ეკრანის დასაბლოკად.'
        ]
      },
      quiz: {
        id: 'quiz-6-4',
        lessonId: 'les-6-4',
        moduleId: 'mod-6',
        title: 'ტესტი: Backups და უსაფრთხოება',
        passingScorePercent: 80,
        questions: [
          {
            id: 'q-6-4-1',
            questionText: 'რას ნიშნავს სარეზერვო ასლების (Backup) ცნობილი 3-2-1 წესი?',
            options: [
              { id: 'a', text: '3 პაროლი, 2 ანტივირუსი, 1 მონიტორი' },
              { id: 'b', text: 'მონაცემთა 3 ასლი, 2 სხვადასხვა მედიაზე, 1 ასლი გარე ლოკაციაზე (Offsite/Cloud)' },
              { id: 'c', text: 'კომპიუტერის გადატვირთვა დღეში 3-ჯერ' },
              { id: 'd', text: '3 სერვერი, 2 როუტერი, 1 კაბელი' }
            ],
            correctOptionId: 'b',
            explanation: '3-2-1 წესი უზრუნველყოფს, რომ დისკის დაზიანების ან ოფისის ფიზიკური ინციდენტის დროს მონაცემები არ დაიკარგოს.'
          },
          {
            id: 'q-6-4-2',
            questionText: 'კლავიატურის რომელი კომბინაციით უნდა დაბლოკოს თანამშრომელმა ეკრანი სამუშაო მაგიდიდან გასვლისას?',
            options: [
              { id: 'a', text: 'Ctrl + C' },
              { id: 'b', text: 'Win + L' },
              { id: 'c', text: 'Alt + F4' },
              { id: 'd', text: 'Ctrl + Z' }
            ],
            correctOptionId: 'b',
            explanation: 'Win + L მყისიერად ბლოკავს Windows-ის სესიას (Lock Screen) და იცავს კომპიუტერს უნებართვო წვდომისგან.'
          },
          {
            id: 'q-6-4-3',
            questionText: 'რატომ არის აუცილებელი სარეზერვო ასლების რეგულარული აღდგენის ტესტირება (Restore Testing)?',
            options: [
              { id: 'a', text: 'იმის დასადასტურებლად, რომ Backup ფაილები დაზიანებული არ არის და საჭიროების დროს მონაცემები რეალურად აღდგება' },
              { id: 'b', text: 'ინტერნეტის ბრაუზერის ასაჩქარებლად' },
              { id: 'c', text: 'ეკრანის განათების შესამოწმებლად' },
              { id: 'd', text: 'პრინტერის კარტრიჯის დასაზოგად' }
            ],
            correctOptionId: 'a',
            explanation: 'სარეზერვო ასლი შეიძლება ჩუმად დაზიანდეს; მხოლოდ Restore ტესტირება ადასტურებს, რომ კრიზისულ სიტუაციაში აღდგენა იმუშავებს.'
          }
        ]
      }
    }
  ]
};
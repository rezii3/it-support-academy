import { Module } from '../core/models/academy.models';

export const MODULE_2_OPERATING_SYSTEMS: Module = {
  "id": "mod-2",
  "order": 2,
  "title": "ოპერაციული სისტემები (Operating Systems)",
  "subtitle": "Windows სისტემების ინსტალაცია და ადმინისტრირება",
  "description": "ოპერაციული სისტემის დაყენება, BIOS/UEFI, დრაივერები (Drivers), სისტემური ხელსაწყოები და ბრძანებათა სტრიქონი.",
  "icon": "⚙️",
  "estimatedHours": 8,
  "lessons": [
    {
      "id": "les-2-1",
      "moduleId": "mod-2",
      "order": 1,
      "title": "Windows-ის ინსტალაცია და BIOS/UEFI კონფიგურაცია",
      "durationMinutes": 35,
      "summary": "ჩამტვირთავი ფლეშკის (Bootable USB) შექმნა, Boot Order და დისკის დაყოფა (Partitioning).",
      "objectives": [
        "გაიგოთ BIOS/UEFI-ის როლი",
        "შექმნათ ჩამტვირთავი USB და დააყენოთ Windows",
        "განასხვავოთ GPT და MBR დისკის დაყოფის სტილები"
      ],
      "sections": [
        {
          "heading": "BIOS და UEFI",
          "content": "კომპიუტერის ჩართვისას პირველად მუშაობს მიკროპროგრამა (Firmware): BIOS ან მისი თანამედროვე ვერსია UEFI. ის ამოწმებს ტექნიკას POST პროცესით (Power-On Self-Test), შემდეგ კი ეძებს ოპერაციულ სისტემას ჩატვირთვის რიგის (Boot Order) მიხედვით. BIOS/UEFI-ში შესასვლელი ღილაკი დამოკიდებულია მწარმოებელზე (ხშირად Del, F2, F10, F12 ან Esc). UEFI-ს აქვს Secure Boot ფუნქცია, რომელიც ამოწმებს ჩამტვირთველის ხელმოწერას, ხოლო Windows 11-ს სჭირდება TPM 2.0 უსაფრთხოების ჩიპი.",
          "codeOrCommand": "msinfo32",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): BIOS vs UEFI explained and how to enter BIOS"
        },
        {
          "heading": "Windows-ის ინსტალაცია",
          "content": "ჩამტვირთავი USB-ის შესაქმნელად გამოიყენეთ Microsoft-ის Media Creation Tool ან Rufus. შემდეგ ჩატვირთეთ კომპიუტერი USB-დან (Boot Menu ან Boot Order-ის შეცვლით) და აირჩიეთ Custom Install. UEFI რეჟიმისთვის დისკი უნდა იყოს GPT სტილის, ძველი Legacy BIOS-ისთვის კი MBR. Windows ავტომატურად ქმნის საჭირო სისტემურ დანაყოფებს (EFI, MSR, Primary). დისკებთან სამუშაოდ შეგიძლიათ გამოიყენოთ diskpart ხელსაწყო.",
          "codeOrCommand": "diskpart\nlist disk\nlist volume",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): install Windows 11 from USB step by step",
          "warning": "დისკის დანაყოფის წაშლა წაშლის მასზე არსებულ მონაცემებს. ინსტალაციამდე აუცილებლად გააკეთეთ სარეზერვო ასლი (Backup)."
        }
      ],
      "keyTerms": [
        {
          "termKa": "ჩამტვირთავი პროგრამული უზრუნველყოფა",
          "termEn": "Firmware",
          "definitionKa": "მიკროპროგრამა, რომელიც კომპიუტერის ჩართვისას პირველად ეშვება (BIOS/UEFI)."
        },
        {
          "termKa": "ჩართვისას თვითტესტირება",
          "termEn": "POST (Power-On Self-Test)",
          "definitionKa": "ტექნიკის შემოწმება კომპიუტერის ჩართვისას."
        },
        {
          "termKa": "დისკის დაყოფის სტილი",
          "termEn": "GPT (GUID Partition Table)",
          "definitionKa": "თანამედროვე დაყოფის სტილი UEFI-სთვის, დიდი დისკების მხარდაჭერით."
        },
        {
          "termKa": "ძველი დაყოფის სტილი",
          "termEn": "MBR (Master Boot Record)",
          "definitionKa": "დაყოფის ძველი სტილი Legacy BIOS-ისთვის."
        },
        {
          "termKa": "უსაფრთხო ჩატვირთვა",
          "termEn": "Secure Boot",
          "definitionKa": "UEFI ფუნქცია, რომელიც მხოლოდ ხელმოწერილ ჩამტვირთველს უშვებს."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): „ეს კომპიუტერი ვერ გაუშვებს Windows 11-ს“",
        "ticketDescription": "Windows 11-ის ინსტალაციისას მიიღეთ შეტყობინება „This PC can’t run Windows 11“. გაარკვიეთ მიზეზი და გამოასწორეთ.",
        "solutionSteps": [
          "გახსენით msinfo32 (ან BIOS/UEFI) და შეამოწმეთ BIOS Mode და Secure Boot State.",
          "UEFI-ში ჩართეთ TPM (fTPM/PTT) და Secure Boot.",
          "დარწმუნდით, რომ დისკი GPT სტილისაა (MBR შემთხვევაში საჭიროა გარდაქმნა).",
          "შეამოწმეთ მინიმალური მოთხოვნები: 4 GB RAM და 64 GB მეხსიერება.",
          "ხელახლა გაუშვით ინსტალაცია.",
          "ჩაიწერეთ ბილეთში (Ticket) მიზეზი და გამოსწორება."
        ]
      },
      "quiz": {
        "id": "quiz-2-1",
        "lessonId": "les-2-1",
        "moduleId": "mod-2",
        "title": "ტესტი: BIOS/UEFI და ინსტალაცია",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-2-1-1",
            "questionText": "რას აკეთებს POST პროცესი?",
            "options": [
              {
                "id": "a",
                "text": "ოპერაციულ სისტემას აახლებს"
              },
              {
                "id": "b",
                "text": "კომპიუტერის ჩართვისას ტექნიკას ამოწმებს"
              },
              {
                "id": "c",
                "text": "ფაილებს შლის"
              },
              {
                "id": "d",
                "text": "ინტერნეტს აერთებს"
              }
            ],
            "correctOptionId": "b",
            "explanation": "POST (Power-On Self-Test) ჩართვისას ამოწმებს აპარატურის ძირითად ნაწილებს."
          },
          {
            "id": "q-2-1-2",
            "questionText": "რომელი დაყოფის სტილია საჭირო UEFI ჩატვირთვისთვის?",
            "options": [
              {
                "id": "a",
                "text": "MBR"
              },
              {
                "id": "b",
                "text": "GPT"
              },
              {
                "id": "c",
                "text": "FAT12"
              },
              {
                "id": "d",
                "text": "RAW"
              }
            ],
            "correctOptionId": "b",
            "explanation": "UEFI რეჟიმში ჩასატვირთად ჩვეულებრივ გამოიყენება GPT."
          },
          {
            "id": "q-2-1-3",
            "questionText": "რომელი ფუნქცია ამოწმებს ჩამტვირთველის ხელმოწერას?",
            "options": [
              {
                "id": "a",
                "text": "Hyper-Threading"
              },
              {
                "id": "b",
                "text": "Secure Boot"
              },
              {
                "id": "c",
                "text": "Quick Boot"
              },
              {
                "id": "d",
                "text": "Wake-on-LAN"
              }
            ],
            "correctOptionId": "b",
            "explanation": "Secure Boot მხოლოდ სანდო ხელმოწერის მქონე ჩამტვირთველს უშვებს."
          },
          {
            "id": "q-2-1-4",
            "questionText": "რომელი საშუალებით ქმნიან Microsoft-ის ოფიციალურ ჩამტვირთავ USB-ს?",
            "options": [
              {
                "id": "a",
                "text": "Media Creation Tool"
              },
              {
                "id": "b",
                "text": "Task Manager"
              },
              {
                "id": "c",
                "text": "Event Viewer"
              },
              {
                "id": "d",
                "text": "Notepad"
              }
            ],
            "correctOptionId": "a",
            "explanation": "Media Creation Tool Microsoft-ის ოფიციალური ხელსაწყოა ჩამტვირთავი USB-ის შესაქმნელად."
          },
          {
            "id": "q-2-1-5",
            "questionText": "რომელი უსაფრთხოების ჩიპი სჭირდება Windows 11-ს?",
            "options": [
              {
                "id": "a",
                "text": "TPM 2.0"
              },
              {
                "id": "b",
                "text": "GPU 4.0"
              },
              {
                "id": "c",
                "text": "NFC"
              },
              {
                "id": "d",
                "text": "SSD Controller"
              }
            ],
            "correctOptionId": "a",
            "explanation": "Windows 11 მოითხოვს TPM 2.0-ს."
          }
        ]
      }
    },
    {
      "id": "les-2-2",
      "moduleId": "mod-2",
      "order": 2,
      "title": "სისტემური ხელსაწყოები (Task Manager, Device Manager, Event Viewer)",
      "durationMinutes": 40,
      "summary": "პროცესების მართვა, დრაივერების განახლება და სისტემური ლოგების (System Logs) ანალიზი.",
      "objectives": [
        "გამოიყენოთ Task Manager პროცესების სამართავად",
        "მოაგვაროთ დრაივერის პრობლემები Device Manager-ით",
        "წაიკითხოთ სისტემური შეცდომები Event Viewer-ში"
      ],
      "sections": [
        {
          "heading": "Task Manager და Device Manager",
          "content": "Task Manager იხსნება Ctrl+Shift+Esc კომბინაციით. Processes ჩანართში ჩანს გაშვებული პროგრამები და მათი დატვირთვა (CPU, Memory, Disk), Performance ჩანართში ზოგადი გრაფიკები, Startup ჩანართში კი ის პროგრამები, რომლებიც Windows-თან ერთად ეშვება. გაყინული პროგრამა იხურება End task-ით. Device Manager (devmgmt.msc) აჩვენებს ყველა მოწყობილობას. ყვითელი სამკუთხედი ნიშნავს პრობლემას, ძირითადად დრაივერთან. შეგიძლიათ Update driver, Roll Back Driver ან Disable device.",
          "codeOrCommand": "devmgmt.msc",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): Windows Task Manager and Device Manager tutorial"
        },
        {
          "heading": "Event Viewer",
          "content": "Event Viewer (eventvwr.msc) ინახავს სისტემის მოვლენებს. Windows Logs განყოფილებაში მთავარი ლოგებია Application, System და Security. მოვლენებს აქვთ დონე (Information, Warning, Error, Critical) და Event ID. მაგალითად, Kernel-Power Event ID 41 მიუთითებს, რომ კომპიუტერი სუფთად არ გამოირთო (ხშირად ელექტროკვების ან გადახურების გამო). შეცდომის დროის მიხედვით შეგიძლიათ დაადგინოთ, რა მოხდა ზუსტად ავარიამდე.",
          "codeOrCommand": "eventvwr.msc",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): Windows Event Viewer troubleshooting tutorial"
        }
      ],
      "keyTerms": [
        {
          "termKa": "დრაივერი",
          "termEn": "Driver",
          "definitionKa": "პროგრამა, რომელიც ოპერაციულ სისტემას აპარატურასთან მუშაობის საშუალებას აძლევს."
        },
        {
          "termKa": "პროცესი",
          "termEn": "Process",
          "definitionKa": "გაშვებული პროგრამის ეგზემპლარი."
        },
        {
          "termKa": "მოვლენის ნომერი",
          "termEn": "Event ID",
          "definitionKa": "ლოგში ჩაწერილი მოვლენის ტიპის ციფრული კოდი."
        },
        {
          "termKa": "სერვისი",
          "termEn": "Service",
          "definitionKa": "ფონური პროგრამა, რომელიც Windows-თან ერთად ან საჭიროებისას ეშვება."
        },
        {
          "termKa": "გაშვების ობიექტი",
          "termEn": "Startup App",
          "definitionKa": "პროგრამა, რომელიც სისტემის ჩატვირთვისას ავტომატურად ეშვება."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): შემთხვევითი გადატვირთვები",
        "ticketDescription": "მომხმარებლის კომპიუტერი ხანდახან იყინება და თავისით რესტარტდება. გაარკვიეთ მიზეზი სისტემური ხელსაწყოებით.",
        "solutionSteps": [
          "გახსენით Event Viewer → Windows Logs → System.",
          "გაფილტრეთ Critical და Error მოვლენები და იპოვეთ Kernel-Power (Event ID 41).",
          "ჩაიწერეთ მოვლენების დრო და შეადარეთ მომხმარებლის აღწერილ დროს.",
          "გახსენით Device Manager და შეამოწმეთ ყვითელი სამკუთხედი.",
          "განაახლეთ ან დააბრუნეთ პრობლემური დრაივერი, შეამოწმეთ ტემპერატურა.",
          "Task Manager-ის Startup ჩანართში გათიშეთ ზედმეტი პროგრამები და ჩაიწერეთ შედეგი ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-2-2",
        "lessonId": "les-2-2",
        "moduleId": "mod-2",
        "title": "ტესტი: Windows-ის ხელსაწყოები",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-2-2-1",
            "questionText": "რომელი კომბინაციით იხსნება Task Manager უშუალოდ?",
            "options": [
              {
                "id": "a",
                "text": "Ctrl+Shift+Esc"
              },
              {
                "id": "b",
                "text": "Ctrl+Alt+Tab"
              },
              {
                "id": "c",
                "text": "Win+L"
              },
              {
                "id": "d",
                "text": "Alt+F4"
              }
            ],
            "correctOptionId": "a",
            "explanation": "Ctrl+Shift+Esc პირდაპირ ხსნის Task Manager-ს."
          },
          {
            "id": "q-2-2-2",
            "questionText": "რას ნიშნავს ყვითელი სამკუთხედი Device Manager-ში?",
            "options": [
              {
                "id": "a",
                "text": "მოწყობილობა კარგად მუშაობს"
              },
              {
                "id": "b",
                "text": "მოწყობილობას პრობლემა აქვს (ხშირად დრაივერთან)"
              },
              {
                "id": "c",
                "text": "მოწყობილობა ამოღებულია"
              },
              {
                "id": "d",
                "text": "ვირუსია"
              }
            ],
            "correctOptionId": "b",
            "explanation": "ყვითელი სამკუთხედი მიუთითებს პრობლემურ მოწყობილობაზე ან დრაივერზე."
          },
          {
            "id": "q-2-2-3",
            "questionText": "სად ვნახავთ სისტემის შეცდომების ისტორიას?",
            "options": [
              {
                "id": "a",
                "text": "Calculator"
              },
              {
                "id": "b",
                "text": "Event Viewer"
              },
              {
                "id": "c",
                "text": "Paint"
              },
              {
                "id": "d",
                "text": "Windows Defender"
              }
            ],
            "correctOptionId": "b",
            "explanation": "Event Viewer ინახავს სისტემის, აპლიკაციებისა და უსაფრთხოების ლოგებს."
          },
          {
            "id": "q-2-2-4",
            "questionText": "რომელი ბრძანებით იხსნება Device Manager?",
            "options": [
              {
                "id": "a",
                "text": "eventvwr.msc"
              },
              {
                "id": "b",
                "text": "services.msc"
              },
              {
                "id": "c",
                "text": "devmgmt.msc"
              },
              {
                "id": "d",
                "text": "diskmgmt.msc"
              }
            ],
            "correctOptionId": "c",
            "explanation": "devmgmt.msc ხსნის Device Manager-ს."
          },
          {
            "id": "q-2-2-5",
            "questionText": "რომელი Task Manager-ის ჩანართით ვთიშავთ ავტომატურად გაშვებულ პროგრამებს?",
            "options": [
              {
                "id": "a",
                "text": "Performance"
              },
              {
                "id": "b",
                "text": "Users"
              },
              {
                "id": "c",
                "text": "Startup apps"
              },
              {
                "id": "d",
                "text": "App history"
              }
            ],
            "correctOptionId": "c",
            "explanation": "Startup apps ჩანართში ვმართავთ სისტემის ჩატვირთვისას გაშვებულ პროგრამებს."
          }
        ]
      }
    },
    {
      "id": "les-2-3",
      "moduleId": "mod-2",
      "order": 3,
      "title": "ბრძანებათა სტრიქონი (Command Prompt & PowerShell)",
      "durationMinutes": 30,
      "summary": "ძირითადი CLI ბრძანებები: sfc /scannow, chkdsk, diskpart და ფაილების მართვა.",
      "objectives": [
        "გაუშვათ CMD და PowerShell ადმინისტრატორის უფლებით",
        "გამოიყენოთ ძირითადი ბრძანებები ფაილებისა და სისტემის სამართავად",
        "შეაკეთოთ სისტემური ფაილები sfc და DISM-ით"
      ],
      "sections": [
        {
          "heading": "Command Prompt (CMD)",
          "content": "CMD არის ტექსტური ინტერფეისი (CLI - Command Line Interface), რომლის საშუალებით ბრძანებებით ვმართავთ კომპიუტერს. ძირითადი ბრძანებებია: dir (ფაილების სია), cd (საქაღალდის შეცვლა), mkdir (საქაღალდის შექმნა), copy, del, type და cls. სისტემური ხელსაწყოების უმეტესობას ადმინისტრატორის უფლება სჭირდება, ამიტომ CMD გაუშვით Run as administrator. sfc /scannow ამოწმებს და აღადგენს დაზიანებულ სისტემურ ფაილებს. თუ ის ვერ ასწორებს, გამოიყენეთ DISM /Online /Cleanup-Image /RestoreHealth. chkdsk კი ამოწმებს დისკის შეცდომებს.",
          "codeOrCommand": "sfc /scannow\nDISM /Online /Cleanup-Image /RestoreHealth\nchkdsk C: /f",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): sfc scannow DISM chkdsk Windows repair"
        },
        {
          "heading": "PowerShell",
          "content": "PowerShell უფრო მძლავრი გარემოა, ვიდრე CMD. მისი ბრძანებები (Cmdlets) Verb-Noun ფორმატისაა, მაგალითად Get-Process, Get-Service, Get-ChildItem. ბრძანებათა შედეგი შეიძლება გადაეცეს შემდეგ ბრძანებას ვერტიკალური ხაზით (Pipeline |). Get-Help გვიჩვენებს ნებისმიერი ბრძანების აღწერას, Stop-Process და Restart-Service კი პროცესებისა და სერვისების სამართავადაა.",
          "codeOrCommand": "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5\nGet-Service | Where-Object Status -eq \"Stopped\"",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): PowerShell basics for IT support beginners",
          "warning": "ბრძანებები, როგორიცაა del, format ან diskpart clean, შეუქცევადად შლის მონაცემებს. გაუშვით მხოლოდ მაშინ, როცა დარწმუნებული ხართ სწორ ობიექტზე."
        }
      ],
      "keyTerms": [
        {
          "termKa": "ბრძანებათა ინტერფეისი",
          "termEn": "CLI (Command Line Interface)",
          "definitionKa": "ტექსტური ინტერფეისი, სადაც კომპიუტერს ბრძანებებით ვმართავთ."
        },
        {
          "termKa": "ბრძანება",
          "termEn": "Cmdlet",
          "definitionKa": "PowerShell-ის ბრძანება Verb-Noun ფორმატით."
        },
        {
          "termKa": "ბრძანებათა ჯაჭვი",
          "termEn": "Pipeline",
          "definitionKa": "ერთი ბრძანების შედეგის შემდეგი ბრძანებისთვის გადაცემა სიმბოლოთი |."
        },
        {
          "termKa": "ადმინისტრატორის უფლება",
          "termEn": "Administrator Privileges",
          "definitionKa": "გაზრდილი უფლება, რომელიც სისტემურ ცვლილებებს საშუალებას გვაძლევს."
        },
        {
          "termKa": "სისტემური ფაილების შემმოწმებელი",
          "termEn": "SFC (System File Checker)",
          "definitionKa": "ხელსაწყო, რომელიც დაზიანებულ სისტემურ ფაილებს ამოწმებს და აღადგენს."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): დაზიანებული სისტემური ფაილები",
        "ticketDescription": "მომხმარებლის Windows-ში აპლიკაციები ხშირად ვარდება და შეცდომის შეტყობინებებს გვიჩვენებს. ეჭვი გაქვთ სისტემური ფაილების დაზიანებაზე.",
        "solutionSteps": [
          "გახსენით CMD ადმინისტრატორის უფლებით (Run as administrator).",
          "გაუშვით sfc /scannow და დაელოდეთ დასრულებას.",
          "თუ პრობლემები დარჩა, გაუშვით DISM /Online /Cleanup-Image /RestoreHealth.",
          "დასრულების შემდეგ ხელახლა გაუშვით sfc /scannow.",
          "გაუშვით chkdsk C: /f და დაგეგმეთ გადატვირთვა.",
          "გადატვირთეთ, შეამოწმეთ აპლიკაციები და ჩაწერეთ შედეგი ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-2-3",
        "lessonId": "les-2-3",
        "moduleId": "mod-2",
        "title": "ტესტი: CLI ბრძანებები",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-2-3-1",
            "questionText": "რას აკეთებს sfc /scannow?",
            "options": [
              {
                "id": "a",
                "text": "ასუფთავებს ინტერნეტის ქეშს"
              },
              {
                "id": "b",
                "text": "ამოწმებს და აღადგენს დაზიანებულ სისტემურ ფაილებს"
              },
              {
                "id": "c",
                "text": "აფორმატებს დისკს"
              },
              {
                "id": "d",
                "text": "აახლებს BIOS-ს"
              }
            ],
            "correctOptionId": "b",
            "explanation": "sfc /scannow ამოწმებს დაცულ სისტემურ ფაილებს და საჭიროებისას აღადგენს მათ."
          },
          {
            "id": "q-2-3-2",
            "questionText": "რა ფორმატისაა PowerShell-ის ბრძანებები (Cmdlets)?",
            "options": [
              {
                "id": "a",
                "text": "Noun-Verb"
              },
              {
                "id": "b",
                "text": "Verb-Noun"
              },
              {
                "id": "c",
                "text": "Number-Letter"
              },
              {
                "id": "d",
                "text": "Path-File"
              }
            ],
            "correctOptionId": "b",
            "explanation": "PowerShell ბრძანებები Verb-Noun სახელებისაა, მაგალითად Get-Process."
          },
          {
            "id": "q-2-3-3",
            "questionText": "რომელი ბრძანება აჩვენებს ფაილების სიას CMD-ში?",
            "options": [
              {
                "id": "a",
                "text": "cls"
              },
              {
                "id": "b",
                "text": "dir"
              },
              {
                "id": "c",
                "text": "cd"
              },
              {
                "id": "d",
                "text": "ren"
              }
            ],
            "correctOptionId": "b",
            "explanation": "dir აჩვენებს მიმდინარე საქაღალდის ფაილებსა და საქაღალდეებს."
          },
          {
            "id": "q-2-3-4",
            "questionText": "რომელი ბრძანებით ვნახავთ გაშვებულ პროცესებს PowerShell-ში?",
            "options": [
              {
                "id": "a",
                "text": "Get-Process"
              },
              {
                "id": "b",
                "text": "Show-Disk"
              },
              {
                "id": "c",
                "text": "List-Apps"
              },
              {
                "id": "d",
                "text": "Find-Task"
              }
            ],
            "correctOptionId": "a",
            "explanation": "Get-Process აბრუნებს გაშვებული პროცესების სიას."
          },
          {
            "id": "q-2-3-5",
            "questionText": "რატომ ვუშვებთ CMD-ს ადმინისტრატორის უფლებით სისტემის შეკეთებისას?",
            "options": [
              {
                "id": "a",
                "text": "ეკრანი უფრო კარგად ჩანს"
              },
              {
                "id": "b",
                "text": "sfc და chkdsk-ს მაღალი უფლებები სჭირდება"
              },
              {
                "id": "c",
                "text": "ასე ბრძანებები უფრო სწრაფად იწერება"
              },
              {
                "id": "d",
                "text": "ინტერნეტი ჩაირთვება"
              }
            ],
            "correctOptionId": "b",
            "explanation": "სისტემური ფაილებისა და დისკის მართვა გაზრდილ (Administrator) უფლებას მოითხოვს."
          }
        ]
      }
    }
  ]
};

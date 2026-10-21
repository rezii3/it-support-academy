import { Module } from '../core/models/academy.models';

export const MODULE_3_NETWORKING: Module = {
  "id": "mod-3",
  "order": 3,
  "title": "ქსელური ტექნოლოგიები (Computer Networking)",
  "subtitle": "TCP/IP, IP მისამართები, DNS, DHCP, როუტერები და Wi-Fi",
  "description": "ქსელის საფუძვლები IT Support-ისთვის: IP მისამართები, DNS, DHCP, ქსელური მოწყობილობები, Wi-Fi, OSI მოდელი და პორტები.",
  "icon": "🌐",
  "estimatedHours": 8,
  "lessons": [
    {
      "id": "les-3-1",
      "moduleId": "mod-3",
      "order": 1,
      "title": "IP მისამართები (IPv4), Subnet Mask და Default Gateway",
      "durationMinutes": 35,
      "summary": "ლოკალური (Private) და გარე (Public) IP მისამართები, სტატიკური და დინამიური კონფიგურაცია.",
      "objectives": [
        "გაარჩიოთ Private და Public IP მისამართები",
        "გაიგოთ Subnet Mask-ისა და Default Gateway-ის დანიშნულება",
        "ამოიცნოთ APIPA (169.254.x.x) მისამართი და მისი მიზეზი"
      ],
      "sections": [
        {
          "heading": "IPv4 მისამართები",
          "content": "IPv4 მისამართი 32 ბიტისგანაა შემდგარი და იწერება ოთხი რიცხვის სახით (ოქტეტი, Octet), თითოეული 0-დან 255-მდე, მაგალითად 192.168.1.10. ლოკალურ ქსელებში გამოიყენება კერძო (Private) დიაპაზონები: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255 და 192.168.0.0–192.168.255.255. ინტერნეტში გამოჩნდება გარე (Public) მისამართი, რომელსაც პროვაიდერი გვაძლევს. მისამართი 127.0.0.1 (Loopback) მიუთითებს თავად კომპიუტერზე, 169.254.x.x (APIPA) კი ჩნდება, როცა DHCP სერვერისგან მისამართი ვერ მიიღო.",
          "codeOrCommand": "ipconfig /all",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): IPv4 addressing explained for beginners"
        },
        {
          "heading": "Subnet Mask და Default Gateway",
          "content": "ქსელის ნიღაბი (Subnet Mask), მაგალითად 255.255.255.0 (/24), განსაზღვრავს, IP მისამართის რომელი ნაწილია ქსელი და რომელი მოწყობილობა. ერთ ქსელში მყოფი მოწყობილობები პირდაპირ ურთიერთობენ. სხვა ქსელში (მაგალითად ინტერნეტში) გასასვლელად ტრაფიკი გადაეცემა ნაგულისხმევ კარიბჭეს (Default Gateway), ანუ როუტერის მისამართს. მისამართი შეიძლება იყოს დინამიური (DHCP-ით ავტომატურად) ან სტატიკური (ხელით ჩაწერილი).",
          "codeOrCommand": "ipconfig /all",
          "warning": "ორ მოწყობილობას ერთნაირი IP მისამართი რომ ჰქონდეს (IP Conflict), ორივეს ქსელი გაუფუჭდება. სტატიკური მისამართის მინიჭებისას ჯერ დარწმუნდით, რომ ის თავისუფალია."
        }
      ],
      "keyTerms": [
        {
          "termKa": "IP მისამართი",
          "termEn": "IPv4 Address",
          "definitionKa": "32-ბიტიანი ციფრული მისამართი, რომელიც ქსელში მოწყობილობას ამოიცნობს."
        },
        {
          "termKa": "ქსელის ნიღაბი",
          "termEn": "Subnet Mask",
          "definitionKa": "განსაზღვრავს IP მისამართის ქსელურ და მოწყობილობის ნაწილს."
        },
        {
          "termKa": "ნაგულისხმევი კარიბჭე",
          "termEn": "Default Gateway",
          "definitionKa": "როუტერის მისამართი, რომლის გავლითაც ტრაფიკი სხვა ქსელებში გადის."
        },
        {
          "termKa": "ავტომატური კერძო მისამართი",
          "termEn": "APIPA",
          "definitionKa": "მისამართი 169.254.x.x, რომელსაც კომპიუტერი თავად ირჩევს, როცა DHCP მიუწვდომელია."
        },
        {
          "termKa": "CIDR ჩანაწერი",
          "termEn": "CIDR (/24)",
          "definitionKa": "ქსელის ნიღბის მოკლე ჩანაწერი ბიტების რაოდენობით."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): კომპიუტერს აქვს 169.254.x.x მისამართი",
        "ticketDescription": "მომხმარებლის კომპიუტერს აქვს IP მისამართი 169.254.34.12 და ინტერნეტი არ მუშაობს. გაარკვიეთ მიზეზი.",
        "solutionSteps": [
          "გახსენით CMD და გაუშვით ipconfig /all.",
          "დაადგინეთ, რომ 169.254.x.x მიუთითებს, რომ DHCP-სგან მისამართი არ მიღებულა.",
          "შეამოწმეთ კაბელი ან Wi-Fi კავშირი.",
          "სცადეთ ipconfig /release და ipconfig /renew.",
          "შეამოწმეთ, იღებენ თუ არა სხვა მოწყობილობები მისამართს (გადატვირთეთ როუტერი, თუ საჭიროა).",
          "ჩაიწერეთ პრობლემა და გამოსწორება ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-3-1",
        "lessonId": "les-3-1",
        "moduleId": "mod-3",
        "title": "ტესტი: IP მისამართები",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-3-1-1",
            "questionText": "რომელია კერძო (Private) IP მისამართი?",
            "options": [
              {
                "id": "a",
                "text": "8.8.8.8"
              },
              {
                "id": "b",
                "text": "192.168.1.20"
              },
              {
                "id": "c",
                "text": "151.101.1.69"
              },
              {
                "id": "d",
                "text": "1.1.1.1"
              }
            ],
            "correctOptionId": "b",
            "explanation": "192.168.0.0–192.168.255.255 კერძო დიაპაზონია."
          },
          {
            "id": "q-3-1-2",
            "questionText": "რას ნიშნავს მისამართი 169.254.x.x?",
            "options": [
              {
                "id": "a",
                "text": "ინტერნეტი სწრაფია"
              },
              {
                "id": "b",
                "text": "DHCP-სგან მისამართი ვერ მიიღო (APIPA)"
              },
              {
                "id": "c",
                "text": "ეს Public მისამართია"
              },
              {
                "id": "d",
                "text": "კომპიუტერი ვირუსითაა"
              }
            ],
            "correctOptionId": "b",
            "explanation": "169.254.x.x (APIPA) ჩნდება, როცა DHCP მიუწვდომელია."
          },
          {
            "id": "q-3-1-3",
            "questionText": "რა ჩანაწერია 255.255.255.0 CIDR ფორმატში?",
            "options": [
              {
                "id": "a",
                "text": "/8"
              },
              {
                "id": "b",
                "text": "/16"
              },
              {
                "id": "c",
                "text": "/24"
              },
              {
                "id": "d",
                "text": "/32"
              }
            ],
            "correctOptionId": "c",
            "explanation": "255.255.255.0 შეესაბამება /24-ს."
          },
          {
            "id": "q-3-1-4",
            "questionText": "რა როლს ასრულებს Default Gateway?",
            "options": [
              {
                "id": "a",
                "text": "ინახავს ფაილებს"
              },
              {
                "id": "b",
                "text": "ტრაფიკს გადასცემს სხვა ქსელებში (ჩვეულებრივ როუტერი)"
              },
              {
                "id": "c",
                "text": "გამოაქვს ვებგვერდები"
              },
              {
                "id": "d",
                "text": "ამოწმებს ვირუსებს"
              }
            ],
            "correctOptionId": "b",
            "explanation": "Default Gateway არის გასასვლელი წერტილი ლოკალური ქსელიდან გარეთ."
          },
          {
            "id": "q-3-1-5",
            "questionText": "რამდენი ოქტეტისგან შედგება IPv4 მისამართი და რა დიაპაზონია თითოეულში?",
            "options": [
              {
                "id": "a",
                "text": "4 ოქტეტი, 0–255"
              },
              {
                "id": "b",
                "text": "6 ოქტეტი, 0–99"
              },
              {
                "id": "c",
                "text": "2 ოქტეტი, 0–1023"
              },
              {
                "id": "d",
                "text": "8 ოქტეტი, 0–15"
              }
            ],
            "correctOptionId": "a",
            "explanation": "IPv4 შედგება 4 ოქტეტისგან და თითოეული 0-დან 255-მდეა."
          }
        ]
      }
    },
    {
      "id": "les-3-2",
      "moduleId": "mod-3",
      "order": 2,
      "title": "ქსელური სერვისები (DNS, DHCP) და დიაგნოსტიკის ბრძანებები",
      "durationMinutes": 30,
      "summary": "ping, ipconfig, tracert, nslookup ბრძანებების პრაქტიკული გამოყენება.",
      "objectives": [
        "გაიგოთ DNS-ისა და DHCP-ის როლი",
        "გამოიყენოთ ping, ipconfig, tracert და nslookup",
        "გამოიყენოთ პრობლემის ეტაპობრივი დიაგნოსტიკის მეთოდი"
      ],
      "sections": [
        {
          "heading": "DNS და DHCP",
          "content": "DNS (Domain Name System) სახელს (მაგ. google.com) გარდაქმნის IP მისამართად, რადგან კომპიუტერები რიცხვებით ურთიერთობენ. DHCP (Dynamic Host Configuration Protocol) მოწყობილობებს ავტომატურად აძლევს IP მისამართს, ქსელის ნიღაბს, Default Gateway-სა და DNS სერვერს. პროცესი ოთხი ნაბიჯისგან შედგება: Discover, Offer, Request, Acknowledge (DORA). DNS ძირითადად იყენებს 53-ე პორტს, DHCP კი UDP 67 და 68 პორტებს.",
          "codeOrCommand": "nslookup google.com",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): DNS and DHCP explained simply"
        },
        {
          "heading": "დიაგნოსტიკის ბრძანებები",
          "content": "ping ამოწმებს, მიწვდება თუ არა მოწყობილობას (ICMP პაკეტებით). ipconfig /all აჩვენებს ქსელის პარამეტრებს, ipconfig /release და /renew ახლებს DHCP მისამართს, ipconfig /flushdns კი ასუფთავებს DNS ქეშს. tracert აჩვენებს მარშრუტს დანიშნულებამდე, nslookup ამოწმებს DNS-ს, netstat -an კი აქტიურ კავშირებს. რეკომენდებული რიგია: ping 127.0.0.1 (ქსელის ბარათი) → ping საკუთარი IP → ping Gateway → ping 8.8.8.8 (ინტერნეტი) → ping google.com (DNS).",
          "codeOrCommand": "ping 127.0.0.1\nping 8.8.8.8\nping google.com\ntracert google.com\nipconfig /flushdns",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): ping tracert nslookup troubleshooting network"
        }
      ],
      "keyTerms": [
        {
          "termKa": "დომენური სახელების სისტემა",
          "termEn": "DNS",
          "definitionKa": "სისტემა, რომელიც დომენურ სახელებს IP მისამართებად გარდაქმნის."
        },
        {
          "termKa": "მისამართების ავტომატური გაცემა",
          "termEn": "DHCP",
          "definitionKa": "პროტოკოლი, რომელიც ქსელის პარამეტრებს ავტომატურად გასცემს."
        },
        {
          "termKa": "DHCP პროცესი",
          "termEn": "DORA",
          "definitionKa": "Discover, Offer, Request, Acknowledge: DHCP მისამართის მიღების ოთხი ეტაპი."
        },
        {
          "termKa": "ICMP",
          "termEn": "ICMP",
          "definitionKa": "პროტოკოლი, რომელსაც ping იყენებს მოწყობილობის ხელმისაწვდომობის შესამოწმებლად."
        },
        {
          "termKa": "მარშრუტის ტრასირება",
          "termEn": "Traceroute (tracert)",
          "definitionKa": "ხელსაწყო, რომელიც აჩვენებს პაკეტის გზას დანიშნულებამდე."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): „ინტერნეტი არ მუშაობს“",
        "ticketDescription": "მომხმარებელი ამბობს, რომ ვებგვერდები არ იხსნება. გაარკვიეთ, პრობლემა კავშირშია თუ DNS-ში.",
        "solutionSteps": [
          "ping Default Gateway-ს (ipconfig-ით ნახეთ მისამართი).",
          "ping 8.8.8.8: თუ მუშაობს, ინტერნეტთან კავშირი არის.",
          "ping google.com: თუ ვერ მუშაობს, პრობლემა DNS-შია.",
          "შეამოწმეთ nslookup google.com.",
          "გაუშვით ipconfig /flushdns.",
          "საჭიროების შემთხვევაში დააყენეთ DNS 8.8.8.8 ან 1.1.1.1, შეამოწმეთ ისევ და ჩაიწერეთ ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-3-2",
        "lessonId": "les-3-2",
        "moduleId": "mod-3",
        "title": "ტესტი: DNS, DHCP და Ping",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-3-2-1",
            "questionText": "რას აკეთებს DNS?",
            "options": [
              {
                "id": "a",
                "text": "დომენურ სახელებს IP მისამართებად გარდაქმნის"
              },
              {
                "id": "b",
                "text": "ვირუსებს ბლოკავს"
              },
              {
                "id": "c",
                "text": "ფაილებს აარქივებს"
              },
              {
                "id": "d",
                "text": "Wi-Fi-ს აჩქარებს"
              }
            ],
            "correctOptionId": "a",
            "explanation": "DNS ადამიანისთვის გასაგებ სახელებს IP მისამართებად გარდაქმნის."
          },
          {
            "id": "q-3-2-2",
            "questionText": "ping 8.8.8.8 მუშაობს, მაგრამ ping google.com არა. სად არის ყველაზე სავარაუდო პრობლემა?",
            "options": [
              {
                "id": "a",
                "text": "კაბელი გაწყვეტილია"
              },
              {
                "id": "b",
                "text": "DNS-ში"
              },
              {
                "id": "c",
                "text": "კვების ბლოკში"
              },
              {
                "id": "d",
                "text": "მონიტორში"
              }
            ],
            "correctOptionId": "b",
            "explanation": "IP-ზე კავშირი არსებობს, სახელის გარდაქმნა კი ვერ ხერხდება, ამიტომ პრობლემა DNS-შია."
          },
          {
            "id": "q-3-2-3",
            "questionText": "რომელი ბრძანება ასუფთავებს DNS ქეშს?",
            "options": [
              {
                "id": "a",
                "text": "ipconfig /flushdns"
              },
              {
                "id": "b",
                "text": "ipconfig /release"
              },
              {
                "id": "c",
                "text": "tracert"
              },
              {
                "id": "d",
                "text": "netstat -an"
              }
            ],
            "correctOptionId": "a",
            "explanation": "ipconfig /flushdns შლის Windows-ის DNS ქეშს."
          },
          {
            "id": "q-3-2-4",
            "questionText": "რას ნიშნავს DORA DHCP-ში?",
            "options": [
              {
                "id": "a",
                "text": "Discover, Offer, Request, Acknowledge"
              },
              {
                "id": "b",
                "text": "Delete, Open, Read, Allow"
              },
              {
                "id": "c",
                "text": "Data, Output, Route, Access"
              },
              {
                "id": "d",
                "text": "Domain, Origin, Record, Address"
              }
            ],
            "correctOptionId": "a",
            "explanation": "DORA არის DHCP მისამართის მიღების ოთხი ეტაპი."
          },
          {
            "id": "q-3-2-5",
            "questionText": "რას აჩვენებს tracert?",
            "options": [
              {
                "id": "a",
                "text": "კომპიუტერის ტემპერატურას"
              },
              {
                "id": "b",
                "text": "პაკეტის გზას დანიშნულებამდე"
              },
              {
                "id": "c",
                "text": "დისკის მოცულობას"
              },
              {
                "id": "d",
                "text": "გაშვებულ პროგრამებს"
              }
            ],
            "correctOptionId": "b",
            "explanation": "tracert აჩვენებს გზას (Hops) თქვენი კომპიუტერიდან დანიშნულებამდე."
          }
        ]
      }
    },
    {
      "id": "les-3-3",
      "moduleId": "mod-3",
      "order": 3,
      "title": "ქსელური მოწყობილობები და Wi-Fi",
      "durationMinutes": 35,
      "summary": "როუტერი, სვიჩი, ფაირვოლი, Wi-Fi სიხშირეები და უსაფრთხოება.",
      "objectives": [
        "გაარჩიოთ როუტერი, სვიჩი, ფაირვოლი და წვდომის წერტილი",
        "გაიგოთ 2.4 GHz-ისა და 5 GHz-ის განსხვავება",
        "შეარჩიოთ უსაფრთხო Wi-Fi დაცვა"
      ],
      "sections": [
        {
          "heading": "ქსელური მოწყობილობები",
          "content": "სვიჩი (Switch) აერთებს მოწყობილობებს ერთ ლოკალურ ქსელში (LAN) და ტრაფიკს MAC მისამართების მიხედვით გადაამისამართებს. როუტერი (Router) აერთებს სხვადასხვა ქსელს და ტრაფიკს IP მისამართებით მარშრუტიზებს, მაგალითად თქვენს ქსელსა და ინტერნეტს შორის. ფაირვოლი (Firewall) ფილტრავს ტრაფიკს წესების მიხედვით. წვდომის წერტილი (Access Point) უსადენო ქსელს უზრუნველყოფს, მოდემი (Modem) კი პროვაიდერთან კავშირს. სახლის როუტერში ხშირად ეს ყველა ფუნქცია ერთ მოწყობილობაშია გაერთიანებული.",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): router vs switch vs firewall vs access point"
        },
        {
          "heading": "Wi-Fi და კაბელი",
          "content": "Wi-Fi ძირითადად მუშაობს 2.4 GHz და 5 GHz დიაპაზონებზე. 2.4 GHz უფრო შორს აღწევს, მაგრამ უფრო ნელია და მეტ ხელშეშლას (Interference) განიცდის. 5 GHz უფრო სწრაფია, მაგრამ მოკლე მანძილზე. ქსელს აქვს სახელი SSID. დაცვისთვის გამოიყენეთ WPA3 ან სულ მცირე WPA2 და ძლიერი პაროლი. თავი აარიდეთ WEP-ს და ღია (Open) ქსელს. კაბელური Ethernet-ისთვის გამოიყენება RJ-45 კონექტორი და Cat5e/Cat6 კაბელი, მაქსიმალური სეგმენტი 100 მეტრია.",
          "codeOrCommand": "netsh wlan show interfaces",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): Wi-Fi 2.4 GHz vs 5 GHz and WPA3 explained",
          "warning": "ღია (პაროლის გარეშე) Wi-Fi ქსელში მონაცემები შეიძლება სხვამ დაინახოს. კომპანიის მოწყობილობები ასეთ ქსელზე არ უნდა დაუკავშირდეს."
        }
      ],
      "keyTerms": [
        {
          "termKa": "გადამრთველი",
          "termEn": "Switch",
          "definitionKa": "მოწყობილობა, რომელიც ლოკალურ ქსელში მოწყობილობებს აკავშირებს MAC მისამართების მიხედვით."
        },
        {
          "termKa": "მარშრუტიზატორი",
          "termEn": "Router",
          "definitionKa": "მოწყობილობა, რომელიც სხვადასხვა ქსელს აკავშირებს და ტრაფიკს IP მისამართით მარშრუტიზებს."
        },
        {
          "termKa": "ქსელის ფარი",
          "termEn": "Firewall",
          "definitionKa": "მოწყობილობა ან პროგრამა, რომელიც ტრაფიკს წესებით ფილტრავს."
        },
        {
          "termKa": "Wi-Fi ქსელის სახელი",
          "termEn": "SSID",
          "definitionKa": "უსადენო ქსელის სახელი, რომელსაც მოწყობილობები ხედავენ."
        },
        {
          "termKa": "წვდომის წერტილი",
          "termEn": "Access Point",
          "definitionKa": "მოწყობილობა, რომელიც კაბელურ ქსელს უსადენოდ ავრცელებს."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): ნელი Wi-Fi შორეულ ოთახში",
        "ticketDescription": "ოფისის შორეულ ოთახში თანამშრომლებს Wi-Fi ძალიან ნელი აქვთ. გაარკვიეთ მიზეზი და შესთავაზეთ გადაწყვეტა.",
        "solutionSteps": [
          "გაუშვით netsh wlan show interfaces და შეამოწმეთ სიგნალის სიძლიერე და სიხშირე.",
          "შეადარეთ სიჩქარე როუტერთან ახლოს და შორეულ ოთახში.",
          "შეამოწმეთ, ეკავშირება თუ არა მოწყობილობა 5 GHz-ზე და არის თუ არა ხელშემშლელი ქსელები.",
          "სცადეთ კაბელით დაკავშირება, რომ გაარკვიოთ, პრობლემა პროვაიდერშია თუ Wi-Fi-ში.",
          "შესთავაზეთ დამატებითი წვდომის წერტილი (Access Point) ან Mesh სისტემა შორეულ ოთახში.",
          "ჩაიწერეთ დასკვნა და რეკომენდაცია ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-3-3",
        "lessonId": "les-3-3",
        "moduleId": "mod-3",
        "title": "ტესტი: ქსელური მოწყობილობები და Wi-Fi",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-3-3-1",
            "questionText": "რომელი მოწყობილობა აერთებს მოწყობილობებს ერთ LAN-ში და ტრაფიკს MAC მისამართებით გადაამისამართებს?",
            "options": [
              {
                "id": "a",
                "text": "Router"
              },
              {
                "id": "b",
                "text": "Switch"
              },
              {
                "id": "c",
                "text": "Modem"
              },
              {
                "id": "d",
                "text": "Firewall"
              }
            ],
            "correctOptionId": "b",
            "explanation": "Switch მუშაობს MAC მისამართებით და აერთებს მოწყობილობებს ერთ ლოკალურ ქსელში."
          },
          {
            "id": "q-3-3-2",
            "questionText": "რომელი Wi-Fi დიაპაზონი აღწევს უფრო შორს?",
            "options": [
              {
                "id": "a",
                "text": "5 GHz"
              },
              {
                "id": "b",
                "text": "2.4 GHz"
              },
              {
                "id": "c",
                "text": "ორივე ერთნაირად"
              },
              {
                "id": "d",
                "text": "არცერთი"
              }
            ],
            "correctOptionId": "b",
            "explanation": "2.4 GHz უკეთ აღწევს მანძილზე და კედლებს, მაგრამ უფრო ნელია."
          },
          {
            "id": "q-3-3-3",
            "questionText": "რამდენია მაქსიმალური სეგმენტი სპილენძის Ethernet კაბელისთვის?",
            "options": [
              {
                "id": "a",
                "text": "10 მეტრი"
              },
              {
                "id": "b",
                "text": "50 მეტრი"
              },
              {
                "id": "c",
                "text": "100 მეტრი"
              },
              {
                "id": "d",
                "text": "1 კილომეტრი"
              }
            ],
            "correctOptionId": "c",
            "explanation": "მაქსიმალური სეგმენტი 100 მეტრია."
          },
          {
            "id": "q-3-3-4",
            "questionText": "რომელი Wi-Fi დაცვაა ყველაზე უსაფრთხო ქვემოთ ჩამოთვლილიდან?",
            "options": [
              {
                "id": "a",
                "text": "WEP"
              },
              {
                "id": "b",
                "text": "Open (ღია)"
              },
              {
                "id": "c",
                "text": "WPA3"
              },
              {
                "id": "d",
                "text": "MAC ფილტრი მხოლოდ"
              }
            ],
            "correctOptionId": "c",
            "explanation": "WPA3 უსაფრთხო ყველაზე თანამედროვე სტანდარტია."
          },
          {
            "id": "q-3-3-5",
            "questionText": "რა ფუნქცია აქვს როუტერს?",
            "options": [
              {
                "id": "a",
                "text": "ხსნის ვებგვერდებს"
              },
              {
                "id": "b",
                "text": "აერთებს სხვადასხვა ქსელს და მარშრუტიზებს ტრაფიკს IP მისამართით"
              },
              {
                "id": "c",
                "text": "ინახავს ფაილებს"
              },
              {
                "id": "d",
                "text": "ამოწმებს ვირუსებს"
              }
            ],
            "correctOptionId": "b",
            "explanation": "Router ტრაფიკს ქსელებს შორის IP მისამართების მიხედვით მიმართავს."
          }
        ]
      }
    },
    {
      "id": "les-3-4",
      "moduleId": "mod-3",
      "order": 4,
      "title": "OSI და TCP/IP მოდელები, პორტები",
      "durationMinutes": 35,
      "summary": "OSI-ის 7 დონე, TCP და UDP, გავრცელებული პორტები.",
      "objectives": [
        "დაასახელოთ OSI მოდელის 7 დონე",
        "განასხვავოთ TCP და UDP",
        "დაიმახსოვროთ გავრცელებული პორტები"
      ],
      "sections": [
        {
          "heading": "OSI მოდელი",
          "content": "OSI მოდელი ქსელურ კომუნიკაციას შვიდ დონედ ყოფს: 1 Physical, 2 Data Link, 3 Network, 4 Transport, 5 Session, 6 Presentation, 7 Application. დასამახსოვრებელი ფრაზაა „Please Do Not Throw Sausage Pizza Away“. კაბელი და სიგნალი პირველი დონეა, სვიჩი და MAC მისამართები მეორე, IP მისამართები და როუტერი მესამე, TCP და UDP კი მეოთხე. პრობლემის ძიებისას ხშირად იწყებენ ქვედა დონიდან: კაბელი, მისამართი, მარშრუტი, სერვისი. TCP/IP მოდელი ამავე იდეას ოთხ დონეზე აჯგუფებს.",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): OSI model explained simply"
        },
        {
          "heading": "TCP, UDP და პორტები",
          "content": "TCP (Transmission Control Protocol) საიმედოა: ამოწმებს, რომ მონაცემები მივიდა და საჭიროების შემთხვევაში თავიდან აგზავნის. UDP უფრო სწრაფია, მაგრამ მიტანას არ ამოწმებს და გამოიყენება ვიდეოზარებში, თამაშებსა და DNS-ში. პორტი მიუთითებს, რომელ სერვისს ეკუთვნის ტრაფიკი. გავრცელებული პორტებია: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS, 3389 RDP.",
          "codeOrCommand": "Test-NetConnection google.com -Port 443\nnetstat -an",
          "proTip": "YouTube საძიებო ფრაზა (YouTube Search Query): common network ports explained 80 443 22 3389"
        }
      ],
      "keyTerms": [
        {
          "termKa": "OSI მოდელი",
          "termEn": "OSI Model",
          "definitionKa": "ქსელური კომუნიკაციის 7-დონიანი მოდელი."
        },
        {
          "termKa": "გადაცემის კონტროლის პროტოკოლი",
          "termEn": "TCP",
          "definitionKa": "საიმედო პროტოკოლი, რომელიც მიტანას ადასტურებს."
        },
        {
          "termKa": "მომხმარებლის დეიტაგრამის პროტოკოლი",
          "termEn": "UDP",
          "definitionKa": "სწრაფი პროტოკოლი მიტანის დადასტურების გარეშე."
        },
        {
          "termKa": "პორტი",
          "termEn": "Port",
          "definitionKa": "რიცხვი, რომელიც მიუთითებს, რომელ სერვისს ეკუთვნის ქსელური ტრაფიკი."
        },
        {
          "termKa": "პაკეტი",
          "termEn": "Packet",
          "definitionKa": "მონაცემთა პატარა ერთეული, რომელიც ქსელში გადაიცემა."
        }
      ],
      "practicalScenario": {
        "title": "პრაქტიკული დავალება (Lab): Remote Desktop არ უკავშირდება",
        "ticketDescription": "მომხმარებელს ping სერვერზე მუშაობს, მაგრამ Remote Desktop-ით დაკავშირება ვერ ხერხდება.",
        "solutionSteps": [
          "ping მუშაობს, ე.ი. IP-ის (Network) დონეზე კავშირი არსებობს.",
          "გაუშვით Test-NetConnection SERVER -Port 3389.",
          "თუ პორტი დახურულია, შეამოწმეთ, ჩართულია თუ არა სერვერზე Remote Desktop.",
          "შეამოწმეთ Windows Firewall-ის წესი 3389 პორტისთვის.",
          "შეამოწმეთ ქსელის ფაირვოლი ან როუტერი ამ პორტზე.",
          "ხელახლა სცადეთ დაკავშირება და ჩაიწერეთ ბილეთში (Ticket)."
        ]
      },
      "quiz": {
        "id": "quiz-3-4",
        "lessonId": "les-3-4",
        "moduleId": "mod-3",
        "title": "ტესტი: OSI, TCP/UDP და პორტები",
        "passingScorePercent": 80,
        "questions": [
          {
            "id": "q-3-4-1",
            "questionText": "OSI-ის რომელ დონეზე მუშაობს IP მისამართები და როუტერები?",
            "options": [
              {
                "id": "a",
                "text": "Layer 1"
              },
              {
                "id": "b",
                "text": "Layer 2"
              },
              {
                "id": "c",
                "text": "Layer 3 (Network)"
              },
              {
                "id": "d",
                "text": "Layer 7"
              }
            ],
            "correctOptionId": "c",
            "explanation": "IP მისამართები და როუტერები მესამე, Network დონეს ეკუთვნის."
          },
          {
            "id": "q-3-4-2",
            "questionText": "რომელი პორტია HTTPS-ისთვის?",
            "options": [
              {
                "id": "a",
                "text": "80"
              },
              {
                "id": "b",
                "text": "443"
              },
              {
                "id": "c",
                "text": "25"
              },
              {
                "id": "d",
                "text": "21"
              }
            ],
            "correctOptionId": "b",
            "explanation": "HTTPS ნაგულისხმევად 443 პორტს იყენებს."
          },
          {
            "id": "q-3-4-3",
            "questionText": "რომელი პორტი გამოიყენება Remote Desktop-ისთვის (RDP)?",
            "options": [
              {
                "id": "a",
                "text": "22"
              },
              {
                "id": "b",
                "text": "53"
              },
              {
                "id": "c",
                "text": "3389"
              },
              {
                "id": "d",
                "text": "110"
              }
            ],
            "correctOptionId": "c",
            "explanation": "RDP ნაგულისხმევად 3389 პორტზე მუშაობს."
          },
          {
            "id": "q-3-4-4",
            "questionText": "რით განსხვავდება TCP UDP-სგან?",
            "options": [
              {
                "id": "a",
                "text": "TCP მიტანას ადასტურებს და საიმედოა"
              },
              {
                "id": "b",
                "text": "TCP ყოველთვის უფრო სწრაფია"
              },
              {
                "id": "c",
                "text": "UDP მხოლოდ კაბელზე მუშაობს"
              },
              {
                "id": "d",
                "text": "განსხვავება არ არის"
              }
            ],
            "correctOptionId": "a",
            "explanation": "TCP აკონტროლებს მიტანას, UDP კი უფრო სწრაფია, მაგრამ დადასტურების გარეშე."
          },
          {
            "id": "q-3-4-5",
            "questionText": "OSI-ის რომელი დონეა კაბელები და ელექტრული სიგნალები?",
            "options": [
              {
                "id": "a",
                "text": "Physical (Layer 1)"
              },
              {
                "id": "b",
                "text": "Network (Layer 3)"
              },
              {
                "id": "c",
                "text": "Transport (Layer 4)"
              },
              {
                "id": "d",
                "text": "Application (Layer 7)"
              }
            ],
            "correctOptionId": "a",
            "explanation": "კაბელები და სიგნალები Physical დონეს ეკუთვნის."
          }
        ]
      }
    }
  ]
};

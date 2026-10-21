import { Module } from '../core/models/academy.models';
import { MODULE_4_WINDOWS_ADMIN } from './module-4-windows-admin.data';
import { MODULE_5_EMAIL_PRODUCTIVITY } from './module-5-email-productivity.data';
import { MODULE_6_IDENTITY_SECURITY } from './module-6-identity-security.data';
import { MODULE_7_VIRTUALIZATION_HOMELAB } from './module-7-virtualization-homelab.data';
import { MODULE_8_HELPDESK_TICKETING } from './module-8-helpdesk-ticketing.data';
import { MODULE_9_REMOTE_SUPPORT } from './module-9-remote-support.data';
import { MODULE_10_TROUBLESHOOTING_METHODOLOGY } from './module-10-troubleshooting-methodology.data';
import { MODULE_11_SOFT_SKILLS_LANGUAGES } from './module-11-soft-skills-languages.data';
import { MODULE_12_CAREER_CERTIFICATION } from './module-12-career-certification.data';

export const MODULES_DATA: Module[] = [
  {
    id: 'mod-1',
    order: 1,
    title: 'კომპიუტერული აპარატურა (Computer Hardware)',
    subtitle: 'PC კომპონენტები, აწყობა და დიაგნოსტიკა (Diagnostics)',
    description: 'შეისწავლეთ კომპიუტერის შიდა ნაწილები: დედაპლატა (Motherboard), პროცესორი (CPU), ოპერატიული მეხსიერება (RAM) და კვების ბლოკი (PSU).',
    icon: '🖥️',
    estimatedHours: 6,
    lessons: [
      {
        id: 'les-1-1',
        moduleId: 'mod-1',
        order: 1,
        title: 'დედაპლატა (Motherboard) და პროცესორი (CPU)',
        durationMinutes: 25,
        summary: 'სისტემური პლატის სოკეტები (Sockets), ჩიპსეტი (Chipset) და პროცესორის არქიტექტურა.',
        objectives: [
          'გაიგოთ რა როლს ასრულებს დედაპლატა (Motherboard)',
          'გაარჩიოთ LGA და PGA სოკეტები (Sockets)',
          'ისწავლოთ თერმოპასტის (Thermal Paste) დატანის წესები'
        ],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-1-1',
          lessonId: 'les-1-1',
          moduleId: 'mod-1',
          title: 'ტესტი: დედაპლატა და პროცესორი',
          passingScorePercent: 80,
          questions: []
        }
      },
      {
        id: 'les-1-2',
        moduleId: 'mod-1',
        order: 2,
        title: 'ოპერატიული მეხსიერება (RAM) და მონაცემთა საცავები (Storage)',
        durationMinutes: 30,
        summary: 'DDR4/DDR5 მეხსიერების ტიპები, HDD, SATA SSD და NVMe M.2 დისკები.',
        objectives: [
          'განასხვავოთ დროებითი (Volatile) და მუდმივი (Non-volatile) მეხსიერება',
          'ისწავლოთ Dual-Channel რეჟიმის კონფიგურაცია'
        ],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-1-2',
          lessonId: 'les-1-2',
          moduleId: 'mod-1',
          title: 'ტესტი: RAM და Storage',
          passingScorePercent: 80,
          questions: []
        }
      },
      {
        id: 'les-1-3',
        moduleId: 'mod-1',
        order: 3,
        title: 'კვების ბლოკი (PSU) და პერიფერია (Peripherals)',
        durationMinutes: 20,
        summary: 'კვების კონექტორები (24-pin ATX, 8-pin EPS), სიმძლავრის გათვლა და პორტები.',
        objectives: [
          'შეძლოთ კვების ბლოკის (Power Supply Unit) ტესტირება',
          'გაარჩიოთ ვიდეო და მონაცემთა კაბელები (HDMI, DisplayPort, USB-C)'
        ],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-1-3',
          lessonId: 'les-1-3',
          moduleId: 'mod-1',
          title: 'ტესტი: კვების ბლოკი და პორტები',
          passingScorePercent: 80,
          questions: []
        }
      }
    ]
  },
  {
    id: 'mod-2',
    order: 2,
    title: 'ოპერაციული სისტემები (Operating Systems)',
    subtitle: 'Windows და Linux სისტემების ინსტალაცია და ადმინისტრირება',
    description: 'ოპერაციული სისტემების დაყენება, ფაილური სისტემები (NTFS, FAT32, ext4), დრაივერები (Drivers) და სისტემური ხელსაწყოები.',
    icon: '⚙️',
    estimatedHours: 8,
    lessons: [
      {
        id: 'les-2-1',
        moduleId: 'mod-2',
        order: 1,
        title: 'Windows-ის ინსტალაცია და BIOS/UEFI კონფიგურაცია',
        durationMinutes: 35,
        summary: 'ჩამტვირთავი ფლეშკის (Bootable USB) შექმნა, Boot Order და დისკის დაყოფა (Partitioning).',
        objectives: [],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-2-1',
          lessonId: 'les-2-1',
          moduleId: 'mod-2',
          title: 'ტესტი: BIOS/UEFI და ინსტალაცია',
          passingScorePercent: 80,
          questions: []
        }
      },
      {
        id: 'les-2-2',
        moduleId: 'mod-2',
        order: 2,
        title: 'სისტემური ხელსაწყოები (Task Manager, Device Manager, Event Viewer)',
        durationMinutes: 40,
        summary: 'პროცესების მართვა, დრაივერების განახლება და სისტემური ლოგების (System Logs) ანალიზი.',
        objectives: [],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-2-2',
          lessonId: 'les-2-2',
          moduleId: 'mod-2',
          title: 'ტესტი: Windows-ის ხელსაწყოები',
          passingScorePercent: 80,
          questions: []
        }
      },
      {
        id: 'les-2-3',
        moduleId: 'mod-2',
        order: 3,
        title: 'ბრძანებათა სტრიქონი (Command Prompt & PowerShell)',
        durationMinutes: 30,
        summary: 'ძირითადი CLI ბრძანებები: sfc /scannow, chkdsk, diskpart და ფაილების მართვა.',
        objectives: [],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-2-3',
          lessonId: 'les-2-3',
          moduleId: 'mod-2',
          title: 'ტესტი: CLI ბრძანებები',
          passingScorePercent: 80,
          questions: []
        }
      }
    ]
  },
  {
    id: 'mod-3',
    order: 3,
    title: 'ქსელური ტექნოლოგიები (Computer Networking)',
    subtitle: 'TCP/IP, IP მისამართები, DNS, DHCP და როუტერები',
    description: 'ქსელის საფუძვლები IT Support-ისთვის: OSI მოდელი, კაბელების დაჯეკვა (RJ-45), Wi-Fi კონფიგურაცია და ქსელის დიაგნოსტიკა.',
    icon: '🌐',
    estimatedHours: 7,
    lessons: [
      {
        id: 'les-3-1',
        moduleId: 'mod-3',
        order: 1,
        title: 'IP მისამართები (IPv4), Subnet Mask და Default Gateway',
        durationMinutes: 35,
        summary: 'ლოკალური (Private) და გარე (Public) IP მისამართები, სტატიკური და დინამიური კონფიგურაცია.',
        objectives: [],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-3-1',
          lessonId: 'les-3-1',
          moduleId: 'mod-3',
          title: 'ტესტი: IP მისამართები',
          passingScorePercent: 80,
          questions: []
        }
      },
      {
        id: 'les-3-2',
        moduleId: 'mod-3',
        order: 2,
        title: 'ქსელური სერვისები (DNS, DHCP) და დიაგნოსტიკის ბრძანებები',
        durationMinutes: 30,
        summary: 'ping, ipconfig, tracert, nslookup ბრძანებების პრაქტიკული გამოყენება.',
        objectives: [],
        sections: [],
        keyTerms: [],
        quiz: {
          id: 'quiz-3-2',
          lessonId: 'les-3-2',
          moduleId: 'mod-3',
          title: 'ტესტი: DNS, DHCP და Ping',
          passingScorePercent: 80,
          questions: []
        }
      }
    ]
  },
  MODULE_4_WINDOWS_ADMIN,
  MODULE_5_EMAIL_PRODUCTIVITY,
  MODULE_6_IDENTITY_SECURITY,
  MODULE_7_VIRTUALIZATION_HOMELAB,
  MODULE_8_HELPDESK_TICKETING,
  MODULE_9_REMOTE_SUPPORT,
  MODULE_10_TROUBLESHOOTING_METHODOLOGY,
  MODULE_11_SOFT_SKILLS_LANGUAGES,
  MODULE_12_CAREER_CERTIFICATION
];
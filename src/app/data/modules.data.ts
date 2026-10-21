import { LessonSection, Module, Question } from '../core/models/academy.models';
import { MODULE_1_COMPUTER_HARDWARE } from './module-1-computer-hardware.data';
import { MODULE_2_OPERATING_SYSTEMS } from './module-2-operating-systems.data';
import { MODULE_3_NETWORKING } from './module-3-networking.data';
import { MODULE_4_WINDOWS_ADMIN } from './module-4-windows-admin.data';
import { MODULE_5_EMAIL_PRODUCTIVITY } from './module-5-email-productivity.data';
import { MODULE_6_IDENTITY_SECURITY } from './module-6-identity-security.data';
import { MODULE_7_VIRTUALIZATION_HOMELAB } from './module-7-virtualization-homelab.data';
import { MODULE_8_HELPDESK_TICKETING } from './module-8-helpdesk-ticketing.data';
import { MODULE_9_REMOTE_SUPPORT } from './module-9-remote-support.data';
import { MODULE_10_TROUBLESHOOTING_METHODOLOGY } from './module-10-troubleshooting-methodology.data';
import { MODULE_11_SOFT_SKILLS_LANGUAGES } from './module-11-soft-skills-languages.data';
import { MODULE_12_CAREER_CERTIFICATION } from './module-12-career-certification.data';
import { MODULE_RESOURCES_MAP } from './verified-resources.data';

const EXTRA_SECTIONS_BY_LESSON: Record<string, LessonSection> = {
  'les-4-1': {
    heading: 'PowerShell-ით ლოკალური ანგარიშების ავტომატიზაცია',
    content:
      'გრაფიკული კონსოლის (lusrmgr.msc) გარდა, IT Support ხშირად მართავს ლოკალურ ანგარიშებს PowerShell-ის საშუალებით, განსაკუთრებით დისტანციური სესიების დროს. Get-LocalUser, New-LocalUser და Add-LocalGroupMember ბრძანებები საშუალებას გაძლევთ წამებში შექმნათ ანგარიში და მიანიჭოთ ჯგუფის უფლებები.',
    codeOrCommand:
      'Get-LocalUser\nAdd-LocalGroupMember -Group "Remote Desktop Users" -Member "intern01"',
    warning:
      'არასდროს დატოვოთ ჩაშენებული Administrator ანგარიში ცარიელი ან მარტივი პაროლით.'
  },
  'les-4-2': {
    heading: 'Active Directory PowerShell მოდული (RSAT)',
    content:
      'დიდ ორგანიზაციებში Help Desk იყენებს ActiveDirectory PowerShell მოდულს დაბლოკილი ანგარიშების მოსაძებნად და განსაბლოკად. Search-ADAccount -LockedOut მყისიერად აჩვენებს ყველა დაბლოკილ მომხმარებელს, ხოლო Unlock-ADAccount ხსნის ბლოკირებას.',
    codeOrCommand:
      'Import-Module ActiveDirectory\nSearch-ADAccount -LockedOut | Select-Object Name, SamAccountName\nUnlock-ADAccount -Identity "g.beridze"'
  },
  'les-4-3': {
    heading: 'GPO დიაგნოსტიკა და NTFS უფლებების აუდიტი (icacls)',
    content:
      'როდესაც მომხმარებელს არ უყენდება Group Policy ან ვერ ხსნის ქსელურ საქაღალდეს, გამოიყენეთ gpresult /r გამოყენებული პოლიტიკების სანახავად და icacls საქაღალდის ზუსტი NTFS ACL სიის შესამოწმებლად.',
    codeOrCommand: 'gpresult /r\nicacls "C:\\Shared\\Finance"'
  },
  'les-4-4': {
    heading: 'PowerShell-ით სერვისებისა და ქსელის სწრაფი დიაგნოსტიკა',
    content:
      'PowerShell-ის Pipeline საშუალებას გაძლევთ გაფილტროთ გაჩერებული სერვისები ან შეამოწმოთ კონკრეტული TCP პორტის ხელმისაწვდომობა Test-NetConnection ბრძანებით (რაც ჩაანაცვლებს ძველ telnet-ს).',
    codeOrCommand:
      'Get-Service | Where-Object {$_.Status -eq "Stopped" -and $_.StartType -eq "Automatic"}\nTest-NetConnection -ComputerName 192.168.1.1 -Port 443'
  }
};

const EXTRA_QUESTIONS_BY_LESSON: Record<string, Question[]> = {
  'les-4-1': [
    {
      id: 'q-4-1-4',
      questionText: 'რომელი PowerShell ბრძანება ამატებს ლოკალურ მომხმარებელს ჯგუფში?',
      options: [
        { id: 'a', text: 'Add-LocalGroupMember' },
        { id: 'b', text: 'New-GroupUser' },
        { id: 'c', text: 'Set-UserGroup' },
        { id: 'd', text: 'Join-LocalGroup' }
      ],
      correctOptionId: 'a',
      explanation: 'Add-LocalGroupMember ამატებს მომხმარებელს მითითებულ ლოკალურ უსაფრთხოების ჯგუფში.'
    },
    {
      id: 'q-4-1-5',
      questionText: 'რომელ ჯგუფში უნდა დავამატოთ სტანდარტული მომხმარებელი, რომ შეძლოს კომპიუტერთან RDP-ით დაკავშირება სრული ადმინისტრატორის უფლების გარეშე?',
      options: [
        { id: 'a', text: 'Administrators' },
        { id: 'b', text: 'Remote Desktop Users' },
        { id: 'c', text: 'Guests' },
        { id: 'd', text: 'Backup Operators' }
      ],
      correctOptionId: 'b',
      explanation: 'Remote Desktop Users ჯგუფი ანიჭებს RDP წვდომას მინიმალური პრივილეგიის პრინციპის დაცვით.'
    }
  ],
  'les-4-2': [
    {
      id: 'q-4-2-4',
      questionText: 'რომელი PowerShell ბრძანებით იხსნება ბლოკი Active Directory-ში დაბლოკილ ანგარიშზე?',
      options: [
        { id: 'a', text: 'Unlock-ADAccount' },
        { id: 'b', text: 'Enable-LocalUser' },
        { id: 'c', text: 'Reset-ADUser' },
        { id: 'd', text: 'Open-ADAccount' }
      ],
      correctOptionId: 'a',
      explanation: 'Unlock-ADAccount -Identity <username> მყისიერად ხსნის ანგარიშის ბლოკირებას AD-ში.'
    }
  ]
};

const RAW_MODULES: Module[] = [
  MODULE_1_COMPUTER_HARDWARE,
  MODULE_2_OPERATING_SYSTEMS,
  MODULE_3_NETWORKING,
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

export const MODULES_DATA: Module[] = RAW_MODULES.map((mod) => ({
  ...mod,
  resources: MODULE_RESOURCES_MAP[mod.id] ?? [],
  lessons: mod.lessons.map((lesson) => {
    const extraSection = EXTRA_SECTIONS_BY_LESSON[lesson.id];
    const extraQuestions = EXTRA_QUESTIONS_BY_LESSON[lesson.id] ?? [];
    return {
      ...lesson,
      resources: MODULE_RESOURCES_MAP[mod.id] ?? [],
      sections: extraSection ? [...lesson.sections, extraSection] : lesson.sections,
      quiz: {
        ...lesson.quiz,
        questions: [...lesson.quiz.questions, ...extraQuestions]
      }
    };
  })
}));
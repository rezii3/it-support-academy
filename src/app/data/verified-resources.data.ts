import { LearningResource } from '../core/models/academy.models';

export const MODULE_RESOURCES_MAP: Record<string, LearningResource[]> = {
  'mod-1': [
    {
      title: 'CompTIA A+ 220-1101 Training Course (Hardware & Motherboards)',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/',
      type: 'course'
    },
    {
      title: 'CompTIA A+ Certification Official Overview & Exam Objectives',
      provider: 'CompTIA',
      url: 'https://www.comptia.org/certifications/a',
      type: 'doc'
    },
    {
      title: 'Google IT Support Professional Certificate (Technical Support Fundamentals)',
      provider: 'Coursera / Google',
      url: 'https://www.coursera.org/google-career-certificates',
      type: 'course'
    }
  ],
  'mod-2': [
    {
      title: 'CompTIA A+ 220-1102 Training Course (Operating Systems & CLI Tools)',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/',
      type: 'course'
    },
    {
      title: 'PowerShell Official Documentation & Cmdlet Reference',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/powershell/',
      type: 'doc'
    }
  ],
  'mod-3': [
    {
      title: 'Networking Basics Course (IPv4, DHCP, DNS, TCP/UDP & Routing)',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US',
      type: 'course'
    },
    {
      title: 'Networking Essentials (CCST Network & Help Desk Prep)',
      provider: 'Cisco Networking Academy',
      url: 'https://www.netacad.com/courses/networking-essentials',
      type: 'course'
    },
    {
      title: 'Wireshark Official User Guide — Network Protocol Analysis',
      provider: 'Wireshark Foundation',
      url: 'https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html',
      type: 'doc'
    }
  ],
  'mod-4': [
    {
      title: 'Active Directory Domain Services (AD DS) Operations & DNS Guide',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/component-updates/ad-ds-operations',
      type: 'doc'
    },
    {
      title: 'ActiveDirectory PowerShell Module Reference (Get-ADUser, Unlock-ADAccount)',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/powershell/module/activedirectory/?view=windowsserver2025-ps',
      type: 'doc'
    }
  ],
  'mod-5': [
    {
      title: 'Overview of the Microsoft 365 Admin Center (Users, Licenses & Shared Mailboxes)',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/admin-center-overview?view=o365-worldwide',
      type: 'doc'
    },
    {
      title: 'DNS and AD DS / Mail Flow Fundamentals',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/dns-and-ad-ds',
      type: 'doc'
    }
  ],
  'mod-6': [
    {
      title: 'Microsoft Entra Multifactor Authentication (MFA) Overview & Verification Methods',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks',
      type: 'doc'
    },
    {
      title: 'Tutorial: Enable Microsoft Entra Multifactor Authentication & Conditional Access',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-azure-mfa',
      type: 'doc'
    }
  ],
  'mod-7': [
    {
      title: 'Oracle VM VirtualBox Official User Manual (VMs, Networking & Snapshots)',
      provider: 'Oracle VirtualBox',
      url: 'https://www.virtualbox.org/manual/UserManual.html',
      type: 'doc'
    },
    {
      title: 'CompTIA A+ 220-1101 Section 4: Virtualization & Cloud Computing',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/',
      type: 'course'
    }
  ],
  'mod-8': [
    {
      title: 'Jira Service Management Cloud Documentation (ITSM, Queues, SLAs & Incident Management)',
      provider: 'Atlassian Support',
      url: 'https://support.atlassian.com/jira-service-management-cloud/',
      type: 'doc'
    },
    {
      title: 'CompTIA A+ 220-1102 Section 4: Operational Procedures & Ticketing Systems',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/',
      type: 'course'
    }
  ],
  'mod-9': [
    {
      title: 'CompTIA A+ 220-1102 Remote Access Technologies (RDP, VPN, SSH, Screen Sharing)',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/',
      type: 'course'
    },
    {
      title: 'Microsoft Entra Per-User MFA & Secure Remote Access',
      provider: 'Microsoft Learn',
      url: 'https://learn.microsoft.com/en-us/entra/identity/authentication/howto-mfa-userstates',
      type: 'doc'
    }
  ],
  'mod-10': [
    {
      title: 'CompTIA A+ 220-1101 Section 5: 6-Step Hardware & Network Troubleshooting Methodology',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/',
      type: 'course'
    },
    {
      title: 'Wireshark Network Troubleshooting & Packet Capture Guide',
      provider: 'Wireshark Foundation',
      url: 'https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html',
      type: 'doc'
    }
  ],
  'mod-11': [
    {
      title: 'CompTIA A+ 220-1102 Communication & Professionalism in IT Support',
      provider: 'Professor Messer',
      url: 'https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/',
      type: 'course'
    },
    {
      title: 'Google IT Support Certificate — Customer Service & De-escalation',
      provider: 'Coursera / Google',
      url: 'https://www.coursera.org/google-career-certificates',
      type: 'course'
    }
  ],
  'mod-12': [
    {
      title: 'CompTIA A+ Official Certification Guide (Core 1 220-1101 & Core 2 220-1102)',
      provider: 'CompTIA',
      url: 'https://www.comptia.org/certifications/a',
      type: 'doc'
    },
    {
      title: 'Google Career Certificates — IT Support & Cybersecurity Pathways',
      provider: 'Coursera / Google',
      url: 'https://www.coursera.org/google-career-certificates',
      type: 'course'
    }
  ]
};
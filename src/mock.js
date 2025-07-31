export const mockData = {
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Security Projects' },
    { value: '8+', label: 'Certifications' },
    { value: '2', label: 'Research Papers' }
  ],
  
  experience: [
    {
      role: 'Cybersecurity Intern',
      company: 'Catenactio Inc',
      location: 'Los Angeles, CA',
      period: 'May 2024 – Present',
      highlights: [
        'Tuned SIEM rules (Wazuh) to reduce false positives and improve threat detection across enterprise clients, including environments with IT/OT segmentation',
        'Managed IAM (Okta) policies, automated provisioning/deprovisioning, and led user access reviews to enforce least privilege access',
        'Applied system hardening and patch management practices on Linux endpoints; implemented SSH security, logging, and audit controls aligned with OT-style hardening',
        'Authored IR plans, playbooks, and security policy documents aligned with SOC 2, NIST 800-53, and CIS Controls',
        'Researched integration of AI models for alert triage, contributing to early-stage automation of low-priority detection cases'
      ],
      skills: ['SIEM', 'Wazuh', 'IAM', 'Okta', 'Linux Hardening', 'Incident Response', 'SOC 2', 'NIST 800-53', 'CIS Controls']
    },
    {
      role: 'Research Assistant – AI Safety & Security',
      company: 'University at Buffalo',
      location: 'Buffalo, NY',
      period: 'Aug 2024 – Dec 2024',
      highlights: [
        'Fine-tuned LLMs to detect adversarial prompts, hate speech, and toxic content, improved model classification accuracy and coverage',
        'Prompt-engineered secure inputs and outputs to reduce hallucinations and improve trustworthiness of GenAI responses',
        'Drafted internal guidelines for secure AI deployment and usage policies to reduce model risk exposure',
        'Contributed to cutting-edge research on adversarial machine learning and AI safety protocols'
      ],
      skills: ['LLM Fine-tuning', 'Prompt Engineering', 'AI Safety', 'Adversarial ML', 'Python', 'Machine Learning', 'Research']
    },
    {
      role: 'Associate Software Engineer',
      company: 'Bosch Global Software Technologies',
      location: 'Bengaluru, IN',
      period: 'Jan 2023 – Jun 2023',
      highlights: [
        'Developed and tested embedded automotive software in compliance with MISRA C and cybersecurity standards',
        'Supported integration of functional safety protocols with discussions around vehicle cybersecurity and OTA update security',
        'Implemented secure coding practices for automotive control systems and contributed to threat modeling exercises',
        'Collaborated on automotive cybersecurity frameworks and security validation processes'
      ],
      skills: ['Embedded Systems', 'MISRA C', 'Automotive Security', 'Functional Safety', 'OTA Security', 'Threat Modeling']
    }
  ],
  
  projects: [
    {
      title: 'Detection Engine',
      status: 'Published • GitHub & PyPI',
      icon: 'shield',
      description: 'CLI + Flask-based threat intelligence tool that detects VPNs, proxies, botnets, Tor nodes, and DDoS infrastructure using IP intelligence, ASN heuristics, and open-source threat feeds. Published on GitHub and PyPI with enterprise integration capabilities.',
      tech: ['Python', 'Flask', 'IP Intelligence', 'Threat Feeds', 'CLI', 'PyPI', 'ASN Analysis'],
      github: true,
      demo: true
    },
    {
      title: 'LLM AutoSOC',
      status: 'In Development',
      icon: 'terminal',
      description: 'Developing a GenAI-powered security orchestration tool that triages logs, assigns alert severity, and maps incidents to the MITRE ATT&CK framework. Automates IR suggestions for security operations teams using advanced NLP and structured log analysis.',
      tech: ['GenAI', 'NLP', 'MITRE ATT&CK', 'Log Analysis', 'Python', 'Machine Learning', 'SOAR'],
      github: true,
      demo: false
    },
    {
      title: 'ICS Lab Simulation',
      status: 'Completed',
      icon: 'server',
      description: 'Simulated an OT-style network using OpenPLC, ModbusPal, Wireshark, and pfSense to inspect industrial protocol traffic and explore IT/OT segmentation (Purdue model). Integrated Suricata for SCADA-focused threat detection rules.',
      tech: ['OpenPLC', 'ModbusPal', 'Wireshark', 'pfSense', 'Suricata', 'ICS Security', 'SCADA', 'Purdue Model'],
      github: true,
      demo: false
    },
    {
      title: 'Enterprise Homelab',
      status: 'Ongoing',
      icon: 'server',
      description: 'Comprehensive enterprise security simulation with pfSense firewall, Wazuh SIEM, and ELK stack. Advanced alert tuning, incident response drills, and security monitoring in a controlled environment with real-world attack scenarios.',
      tech: ['pfSense', 'Wazuh', 'ELK Stack', 'SIEM', 'Security Monitoring', 'IR Drills', 'Log Management'],
      github: false,
      demo: false
    },
    {
      title: 'Secure Cloud VPN',
      status: 'Deployed',
      icon: 'shield',
      description: 'Deployed hardened WireGuard VPN on AWS EC2 with advanced security configurations. Implemented fail2ban, automated security updates, comprehensive logging, and monitoring with custom security policies.',
      tech: ['WireGuard', 'AWS EC2', 'Linux Hardening', 'VPN', 'Cloud Security', 'Fail2ban', 'Monitoring'],
      github: true,
      demo: false
    },
    {
      title: 'Advanced CTF Labs',
      status: 'Continuous Learning',
      icon: 'bug',
      description: 'Comprehensive penetration testing and vulnerability research across TryHackMe, HackTheBox, and OverTheWire platforms. Documented attack vectors, defense strategies, and created custom exploitation tools and defense mechanisms.',
      tech: ['Penetration Testing', 'Vulnerability Research', 'Linux', 'Web Security', 'Network Security', 'Exploit Development'],
      github: false,
      demo: false
    }
  ],
  
  skills: [
    {
      category: 'Security Engineering',
      icon: 'shield',
      skills: ['SIEM (Wazuh, Splunk)', 'SOAR Platforms', 'MITRE ATT&CK', 'EDR/XDR', 'DLP Solutions', 'FIM', 'Antivirus Management', 'Log Analysis', 'Threat Hunting', 'Alert Tuning']
    },
    {
      category: 'IAM & Compliance',
      icon: 'lock',
      skills: ['Okta Administration', 'RBAC', 'MFA Implementation', 'User Access Reviews', 'SOC 2 Type II', 'NIST 800-53', 'CIS Controls', 'ISO 27001', 'ISA/IEC 62443', 'NERC CIP']
    },
    {
      category: 'Cloud & Infrastructure',
      icon: 'server',
      skills: ['AWS Security', 'GCP', 'Terraform', 'Docker Security', 'Linux Hardening', 'SSH Security', 'pfSense', 'Security Groups', 'VPC Design', 'WAF Configuration']
    },
    {
      category: 'OT/ICS Security',
      icon: 'eye',
      skills: ['OpenPLC', 'ModbusPal', 'SCADA Protocols', 'Modbus/TCP', 'DNP3', 'IT/OT Segmentation', 'Purdue Model', 'Industrial Threat Modeling', 'HMI Security']
    },
    {
      category: 'AI & Automation',
      icon: 'zap',
      skills: ['Python Automation', 'Bash Scripting', 'LLM Fine-Tuning', 'Prompt Engineering', 'Adversarial Testing', 'Alert Prioritization', 'JSON/YAML', 'Pandas', 'Machine Learning']
    },
    {
      category: 'Security Tools',
      icon: 'code',
      skills: ['Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'Vulnerability Scanning', 'Patch Management', 'System Hardening', 'OWASP Top 10', 'Code Review', 'OSINT']
    }
  ],
  
  education: [
    {
      degree: 'Master of Science in Cybersecurity',
      school: 'University at Buffalo, SUNY',
      location: 'Buffalo, NY',
      period: 'Aug 2023 - Dec 2024',
      gpa: '3.8/4.0',
      coursework: ['Advanced Network Security', 'AI Safety & Security', 'Digital Forensics', 'Cryptography', 'Incident Response']
    },
    {
      degree: 'Bachelor of Engineering in Electronics and Instrumentation',
      school: 'Visvesvaraya Technological University',
      location: 'Bengaluru, IN',
      period: 'Aug 2018 - Jun 2022',
      gpa: '8.5/10.0',
      coursework: ['Embedded Systems', 'Control Systems', 'Industrial Automation', 'Signal Processing']
    }
  ],
  
  certifications: [
    'ISO/IEC 27001:2022 Lead Auditor',
    'Google Cybersecurity Certificate v2',
    'AWS Certified Cloud Practitioner',
    '(ISC)² Certified in Cybersecurity',
    'Google AI Essentials',
    'CompTIA Security+ (Scheduled Aug 2025)',
    'GIAC GISCP (Planned)',
    'AWS Security Specialty (Planned)'
  ]
};
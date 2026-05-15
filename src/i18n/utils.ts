// src/i18n/utils.ts

export type Lang = 'zh' | 'en';

const translations = {
  zh: {
    name: '陈子淇',
    nav: {
      home: '首页',
      publications: '学术发表',
      projects: '项目作品',
      awards: '奖项荣誉',
      service: '服务',
    },
    hero: {
      title: '博士 · 教育技术',
      subtitle: '探索技术与教育的深度融合',
      bio: '陈子淇是澳门理工大学应用科学学院教育技术与创新专业的博士候选人。她拥有澳门大学数据科学硕士学位。她的跨学科研究聚焦于教育领域的生成式人工智能、以学习为导向的评估、技术增强型反馈以及教育数据挖掘与分析，致力于构建能够真正改善教学、学习和反馈实践的有效人工智能应用。她始终追求卓越的研究成果，并在国际顶尖期刊和会议上发表过多篇论文。',
    },
    sections: {
      research: '研究方向',
      publications: '学术发表',
      projects: '项目作品',
      awards: '奖项荣誉',
      service: '服务',
      cv: '个人简历',
      contact: '联系方式',
    },
    common: {
      viewMore: '了解更多 →',
      readMore: '阅读全文 →',
      download: '下载简历',
      send: '发送消息',
      copyright: '© 2026 保留所有权利',
      language: '语言',
    },
    blog: {
      title: '博客',
      noPosts: '暂无文章',
    },
    contact: {
      name: '姓名',
      email: '邮箱',
      message: '留言',
      success: '消息已发送，谢谢！',
    },
    timeline: {
      research: '探索技术增强学习环境、教学设计及数字教学法。',
      publications: '同行评审期刊论文、会议论文及学术报告。',
      teaching: '大学层面教育技术和教学设计教学经验。',
      projects: '教育技术领域的研究项目和学术合作。',
      blog: '关于教育技术、学习科学及学术生活的思考。',
      cv: '完整的学术背景、荣誉奖项及专业经历。',
      contact: '联系我，探讨合作机会。',
    },
  },
  en: {
    name: 'Ziqi Chen',
    nav: {
      home: 'Home',
      publications: 'Publications',
      projects: 'Funding',
      awards: 'Awards & Honors',
      service: 'Service',
    },
    hero: {
      title: 'PhD · Educational Technology',
      subtitle: 'Exploring the integration of technology and education',
      bio: 'Ziqi Chen is a PhD candidate in Educational Technology and Innovation at the Faculty of Applied Sciences, Macao Polytechnic University (MPU). She received her MSc in Data Science from the University of Macau. Her interdisciplinary research focuses on Generative AI in Education, learning-oriented assessment, technology-enhanced feedback, and educational data mining & analysis, and seeks to build effective AI+ applications that genuinely improve teaching, learning and feedback practices. She always strives for research excellence and has published in leading international journals and conferences.',
    },
    sections: {
      research: 'Research Interests',
      publications: 'Publications',
      projects: 'Funding',
      awards: 'Awards & Honors',
      service: 'Service',
      cv: 'Curriculum Vitae',
      contact: 'Contact',
    },
    common: {
      viewMore: 'View more →',
      readMore: 'Read more →',
      download: 'Download CV',
      send: 'Send Message',
      copyright: '© 2026 All Rights Reserved',
      language: 'Language',
    },
    blog: {
      title: 'Blog',
      noPosts: 'No posts yet',
    },
    contact: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      success: 'Message sent, thank you!',
    },
    timeline: {
      research: 'Exploring technology-enhanced learning environments, instructional design, and digital pedagogy.',
      publications: 'Peer-reviewed journal articles, conference papers, and academic presentations.',
      teaching: 'University-level teaching experience in educational technology and instructional design.',
      projects: 'Research projects and academic collaborations in educational technology.',
      blog: 'Thoughts on educational technology, learning science, and academic life.',
      cv: 'Complete academic history, awards, and professional experience.',
      contact: 'Get in touch for collaboration opportunities.',
    },
  },
};

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'zh') return 'zh';
  return 'en';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return `/zh${path}`;
}

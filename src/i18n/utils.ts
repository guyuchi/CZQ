// src/i18n/utils.ts

export type Lang = 'zh' | 'en';

const translations = {
  zh: {
    nav: {
      home: '首页',
      research: '研究方向',
      publications: '学术发表',
      teaching: '教学经历',
      projects: '项目作品',
      blog: '博客',
      cv: '简历',
      contact: '联系方式',
    },
    hero: {
      title: '博士 · 教育技术',
      subtitle: '探索技术与教育的深度融合',
      bio: '教育技术研究者，专注于利用人工智能技术增强学习体验。研究涵盖AI辅助学习评估、反馈实践、教育数据挖掘及学习情感分析等领域。',
    },
    sections: {
      research: '研究方向',
      publications: '学术发表',
      teaching: '教学经历',
      projects: '项目作品',
      blog: '博客文章',
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
    nav: {
      home: 'Home',
      research: 'Research',
      publications: 'Publications',
      teaching: 'Teaching',
      projects: 'Projects',
      blog: 'Blog',
      cv: 'CV',
      contact: 'Contact',
    },
    hero: {
      title: 'PhD · Educational Technology',
      subtitle: 'Exploring the integration of technology and education',
      bio: 'Educational Technology researcher passionate about leveraging AI to enhance learning experiences. Research focuses on AI-assisted learning assessment, feedback practice, educational data mining, and emotions in learning.',
    },
    sections: {
      research: 'Research Interests',
      publications: 'Publications',
      teaching: 'Teaching',
      projects: 'Projects',
      blog: 'Blog Posts',
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
  if (parts[0] === 'en') return 'en';
  return 'zh';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'zh') return path;
  return `/en${path}`;
}

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
